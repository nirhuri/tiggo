// import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  Keyboard,
  Modal,
  RadioButton,
  RadioGroup,
  Picker,
} from 'react-native-ui-lib';
import {TextField} from 'react-native-ui-lib/src/incubator';
import {ValidationMessagePosition} from 'react-native-ui-lib/src/incubator/TextField/types';
import {useSelector} from 'react-redux';
import {addNewTransaction} from '../../api/transactions';

import {COLORS} from '../../Colors';
import {TransactionTypeEnum} from '../../screen/Home/type';
import {CategoriesName} from '../../store/slices/transactionSlice';
import {ButtonPrim} from '../Buttons';

function AddTransactionModal(props: any) {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [fieldValidation, setFieldValidation] = React.useState({
    title: false,

    transactionAmount: false,
  });
  const submit = (values: any) => {
    props.setModalVisible(false);
    values.TransactionDate = new Date().toISOString();
    values.IsCash = true;
    values.TransactionAmount = parseInt(values.TransactionAmount);
    addNewTransaction(values);
  };
  const categories = useSelector(CategoriesName);

  const getCategoriesOption = () => {
    const option = categories?.map((item: any) => {
      return {
        label: item,
        value: item,
      };
    });
    return option;
  };

  const onChangeValidity = (name: string) => (isValid: boolean) => {
    let data = {
      ...fieldValidation,
      [name]: isValid,
    };
    let allValid = true;
    Object.keys(data).forEach(key => {
      if (!data[key]) {
        allValid = false;
      }
    });

    setFieldValidation(data);
    setIsFormValid(allValid);
  };
  console.log('fieldValidation', JSON.stringify(fieldValidation));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={{opacity: 0.5}}
      visible={true}>
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.headerTitle}>Add Transaction</Text>
          </View>
          <View>
            <Formik
              initialValues={{
                title: '',
                Catagory: '',
                transactionType: TransactionTypeEnum.Expense,
                transactionAmount: '',
                transactionDescription: '',
              }}
              onSubmit={values => submit(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue,
              }) => (
                <View style={styles.form}>
                  <View style={styles.formItem}>
                    <TextField
                      floatingPlaceholderColor={{
                        focus: COLORS.Primary,
                        default: COLORS.white,
                      }}
                      floatingPlaceholder={true}
                      placeholder="Title"
                      floatingPlaceholderStyle={styles.textFieldPlaceholder}
                      style={styles.textField}
                      value={values.title}
                      onChangeText={handleChange('title')}
                      onBlur={handleBlur('title')}
                      enableErrors
                      validate={['required']}
                      validationMessage={['Field is required']}
                      validationMessagePosition={
                        ValidationMessagePosition.BOTTOM
                      }
                      validateOnChang
                      validateOnBlur
                      onChangeValidity={onChangeValidity('title')}
                    />
                  </View>

                  <View style={styles.formItem}>
                    <TextField
                      keyboardType={'numeric'}
                      floatingPlaceholderColor={{
                        focus: COLORS.Primary,
                        default: COLORS.white,
                      }}
                      floatingPlaceholder={true}
                      placeholder="Amount"
                      floatingPlaceholderStyle={styles.textFieldPlaceholder}
                      style={{marginTop: 5, ...styles.textField}}
                      containerStyle={{flex: 1}}
                      value={values.transactionAmount}
                      onChangeText={handleChange('transactionAmount')}
                      onBlur={handleBlur('transactionAmount')}
                      enableErrors
                      validate={['required']}
                      validationMessage={['Field is required']}
                      validationMessagePosition={
                        ValidationMessagePosition.BOTTOM
                      }
                      validateOnChang
                      validateOnBlur
                      onChangeValidity={onChangeValidity('transactionAmount')}
                    />
                  </View>

                  <View style={styles.formItem}>
                    <Picker
                      selectedValue={values.Catagory}
                      style={styles.picker}
                      placeholder="Select Category"
                      onValueChange={handleChange('Catagory')}
                      // add valdtion to Select Category
                      onBlur={handleBlur('Catagory')}
                      enableErrors
                      validate={['required']}
                      validationMessage={['Field is required']}
                      validationMessagePosition={
                        ValidationMessagePosition.BOTTOM
                      }
                      validateOnChang
                      validateOnBlur
                      onChangeValidity={onChangeValidity('Catagory')}>
                      <Picker.Item
                        key={'Select Category'}
                        label={'Select Category'}
                        value={'Select Category'}
                        disabled={true}
                      />
                      {getCategoriesOption()?.map((item, index) => (
                        <Picker.Item
                          style={styles.pickerItem}
                          key={index}
                          label={item.label}
                          value={item.value}
                        />
                      ))}
                    </Picker>
                  </View>

                  <View style={styles.formItem}>
                    <RadioGroup
                      initialValue={TransactionTypeEnum.Expense}
                      style={{marginTop: 5}}
                      onValueChange={(value: any) => {
                        setFieldValue('transactionType', value, false);
                      }}>
                      <Text
                        style={{
                          ...styles.textFieldPlaceholder,
                          marginBottom: 10,
                        }}>
                        Transaction Type
                      </Text>

                      <RadioButton
                        size={20}
                        style={{marginBottom: 5}}
                        value={TransactionTypeEnum.Income}
                        label={'Income'}
                        labelStyle={{
                          fontSize: 20,
                          marginBottom: 5,
                        }}
                      />
                      <RadioButton
                        labelStyle={{
                          fontSize: 20,
                          marginBottom: 5,
                        }}
                        size={20}
                        value={TransactionTypeEnum.Expense}
                        label={'Expense'}
                      />
                    </RadioGroup>
                  </View>

                  <View style={styles.buttonContainer}>
                    <ButtonPrim
                      text="Add"
                      onPress={handleSubmit}
                      disabled={!isFormValid}
                    />

                    <ButtonPrim
                      text="Cancel"
                      onPress={() => props.setModalVisible(false)}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  pickerItem: {
    fontSize: 23,
    marginBottom: 5,
    color: COLORS.Primary,
  },
  formItem: {
    marginTop: 20,
  },
  picker: {
    flex: 1,
    color: COLORS.Primary,
  },
  buttonContainer: {
    borderTopColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 'auto',
    minWidth: '80%',
  },

  headerTitle: {
    fontSize: 25,
    color: COLORS.Primary,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    marginTop: 10,
  },
  form: {
    flex: 1,
    width: '100%',
    minHeight: 600,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  textFieldPlaceholder: {
    color: COLORS.black,
    fontSize: 23,
  },
  textField: {
    color: COLORS.Primary,
    fontSize: 30,
  },

  container: {
    flex: 1,
    width: '90%',
    margin: '5%',
    padding: '5%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    shadowOpacity: 0.8,

    shadowRadius: 2,
    elevation: 5,
  },

  headerText: {
    color: COLORS.white,
    fontSize: 23,
    borderRadius: 20,
    backgroundColor: COLORS.Primary,

    padding: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
    alignSelf: 'center',
  },
  body: {
    width: '100%',
    height: '90%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '5%',
  },
  footer: {
    height: 50,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.white,
    fontSize: 20,
    marginHorizontal: 10,
  },
});
export default AddTransactionModal;
