import React from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Controller, useForm} from 'react-hook-form';
import {ButtonPrim} from '../../Components/Buttons';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../store/slices/authSlice';
import {signup} from '../../api/auth';
interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
const SignupScreen = (props: any) => {
  const dispatch = useDispatch();
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);
  const firstNameInput = React.useRef<TextInput>(null);
  const lastNameInput = React.useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    console.log('click Sub');
    const res = await signup(data);
    Alert.alert(JSON.stringify(res));
    console.log('data', data);
    dispatch(loginUser(data));
  });

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}>
          <Text style={styles.title}>JOIN DRIVE THROUGH</Text>
          <Text style={styles.subtitle}>Get fast orders</Text>
          <Pressable onPress={() => firstNameInput.current?.focus()}>
            <View style={styles.fromItem}>
              <Text style={styles.label}>first name</Text>

              <Controller
                rules={{
                  required: true,
                }}
                control={control}
                name="firstName"
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    onSubmitEditing={() => firstNameInput.current?.focus()}
                    ref={firstNameInput}
                    returnKeyType="next"
                    style={styles.textInput}
                    textContentType="username"
                    value={value}
                  />
                )}
              />
              {errors.firstName && <Text>This is required.</Text>}
            </View>
          </Pressable>
          <Pressable onPress={() => lastNameInput.current?.focus()}>
            <View style={styles.fromItem}>
              <Text style={styles.label}>last name</Text>

              <Controller
                rules={{
                  required: true,
                }}
                control={control}
                name="lastName"
                render={({field: {onChange, onBlur, value}}): any => (
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    onSubmitEditing={() => lastNameInput.current?.focus()}
                    ref={lastNameInput}
                    returnKeyType="next"
                    style={styles.textInput}
                    textContentType="username"
                    value={value}
                  />
                )}
              />
            </View>
          </Pressable>

          <Pressable onPress={() => emailInput.current?.focus()}>
            <View style={styles.fromItem}>
              <Text style={styles.label}>Email</Text>

              <Controller
                rules={{
                  required: true,
                }}
                control={control}
                name="email"
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    onSubmitEditing={() => passwordInput.current?.focus()}
                    ref={emailInput}
                    returnKeyType="next"
                    style={styles.textInput}
                    textContentType="username"
                    value={value}
                  />
                )}
              />
            </View>
          </Pressable>
          <Pressable onPress={() => passwordInput.current?.focus()}>
            <View style={styles.fromItem}>
              <Text style={styles.label}>Password</Text>

              <Controller
                rules={{
                  required: true,
                }}
                control={control}
                name="password"
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    onSubmitEditing={onSubmit}
                    ref={passwordInput}
                    returnKeyType="done"
                    secureTextEntry
                    style={styles.textInput}
                    textContentType="password"
                    value={value}
                  />
                )}
              />
            </View>
          </Pressable>
          {errors.firstName && <Text>This is required.</Text>}
          <TouchableOpacity
            onPress={() => {
              props.gotToSingIn();
            }}>
            <Text style={styles.textButton}>Allready have account?</Text>
          </TouchableOpacity>
          <View style={styles.fromButton}>
            <ButtonPrim />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
const SizedBox: React.FC<any> = ({height, width}) => {
  return <View style={{height, width}} />;
};
function useStyles() {
  return StyleSheet.create({
    fromButton: {
      margin: 10,
      padding: 10,
      width: '80%',
    },
    fromItem: {
      margin: 10,
      padding: 10,
      width: '80%',
      borderRadius: 8,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    forgotPasswordContainer: {},
    form: {
      alignItems: 'center',
      backgroundColor: 'rgb(58, 58, 60)',
    },
    label: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundColor: '#000000',
      flex: 1,
    },

    subtitle: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 22,
      paddingBottom: 30,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 20,
    },
    textInput: {
      color: '#FFFFFF',
      flex: 1,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 34,
      paddingBottom: 10,
    },
  });
}

export default SignupScreen;