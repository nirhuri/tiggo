import React from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Controller, useForm} from 'react-hook-form';
import {ButtonPrim} from '../../Components/Buttons';
import {RequiredText} from '../../Components/FormUtils';
import {COLORS} from '../../Colors';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../store/slices/authSlice';
import {signin} from '../../api/auth';

interface FormData {
  email: string;
  password: string;
}
const SigninScreen = (props: any) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const onSubmit = handleSubmit(async data => {
    const res = await signin(data);

    Alert.alert(JSON.stringify(res));
    //  dispatch(loginUser(data));
  });

  console.log('errors', errors);
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <View style={styles.content}>
          <Text style={styles.title}>TIGGO</Text>
          <Text style={styles.subtitle}>Take Control of Your Money</Text>

          <View style={styles.fromItem}>
            <Text style={styles.label}>Email:</Text>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onChangeText={value => onChange(value)}
                  style={styles.textInput}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <RequiredText />}
          </View>

          <View style={styles.fromItem}>
            <Text style={styles.label}>Password:</Text>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  onSubmitEditing={onSubmit}
                  secureTextEntry
                  style={styles.textInput}
                  textContentType="password"
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && <RequiredText />}
          </View>

          <TouchableOpacity onPress={props.goToSingup}>
            <View style={{height: 30}}></View>
            <Text style={styles.textButton}>Click to Signup</Text>
          </TouchableOpacity>
          <View style={styles.fromButton}>
            <ButtonPrim onSubmit={onSubmit} />
          </View>
          <Text style={styles.textButton}>Forgot password?</Text>
        </View>
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
      margin: 30,
      alignItems: 'center',
      width: '80%',
      height: 48,
      paddingHorizontal: 16,
      borderRadius: 8,
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
      fontSize: 18,
      alignSelf: 'baseline',
    },
    root: {
      backgroundColor: '#000000',
      flex: 1,
    },

    subtitle: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 17,
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
      fontSize: 18,
      color: '#FFFFFF',

      borderRadius: 4,
      borderColor: COLORS.Primary,
      borderWidth: 1,
      padding: 10,
      width: '100%',
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

export default SigninScreen;
