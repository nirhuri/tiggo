/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {
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
import {signup} from '../../api/auth';
import {HttpStatusCodes} from '../../api/httpStatusCodes';

interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface SingupProp {
  signedupUser: (newUser: any) => void;
  goToSignIn: () => any;
}

const SignupScreen: React.FC<SingupProp> = (props: SingupProp) => {
  const [error, setError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [generalErrorMessage, setGeneralErrorMessage] = useState('');
  const styles = useStyles();
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);
  const firstNameInput = React.useRef<TextInput>(null);
  const lastNameInput = React.useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    setError(false);
    setGeneralErrorMessage('');
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
    try {
      const response: any = await signup(data);
      if (response.status === HttpStatusCodes.CREATED) {
        const {token} = response.data;
        props.signedupUser({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: '',
          token: token,
        });
      } else if (response.status === HttpStatusCodes.CONFLICT) {
        setError(true);
        setEmailErrorMessage('Email already in use');
      } else if (response.status === HttpStatusCodes.BAD_REQUEST) {
        setError(true);
        setPasswordErrorMessage('Invalid password');
      } else {
        setError(true);
        setGeneralErrorMessage('Something went wrong');
      }
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      setError(true);
      setGeneralErrorMessage('Something went wrong.');
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}>
          <Text style={styles.title}>JOIN TIGGO</Text>
          <Text style={styles.subtitle}>Take Control of Your Money</Text>
          <Pressable onPress={() => firstNameInput.current?.focus()}>
            <View style={styles.fromItem}>
              <Text style={styles.label}>First Name</Text>
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
            <View>
              {error && (
                <Text style={styles.textError}>{emailErrorMessage}</Text>
              )}
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
            <View>
              {error && (
                <Text style={styles.textError}>{passwordErrorMessage}</Text>
              )}
            </View>
          </Pressable>
          <View>
            {errors.firstName && (
              <Text style={styles.validationError}>First name required.</Text>
            )}
            {errors.lastName && (
              <Text style={styles.validationError}>Last name required.</Text>
            )}
            {errors.email && (
              <Text style={styles.validationError}>Email required.</Text>
            )}
            {errors.password && (
              <Text style={styles.validationError}>Password required.</Text>
            )}
          </View>
          <View style={styles.formButton}>
            <ButtonPrim disabled={false} text={'Sign Up'} onPress={onSubmit} />
          </View>
          <View>
            {error && (
              <Text style={styles.textError}>{generalErrorMessage}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.bottomContainer}
            onPress={() => {
              props.goToSignIn();
            }}>
            <Text style={styles.textButton}>Allready have account?</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

function useStyles() {
  return StyleSheet.create({
    formButton: {
      marginTop: 50,
      padding: 10,
      width: '80%',
    },
    fromItem: {
      marginTop: 30,
      padding: 10,
      width: '80%',
      borderRadius: 8,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },
    textError: {
      marginLeft: 17,
      color: 'red',
    },
    validationError: {
      color: 'red',
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
      backgroundColor: '#120005',
      flex: 1,
    },
    bottomContainer: {
      marginTop: 150,
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
      height: 100,
    },
    textInput: {
      color: '#FFFFFF',
      flex: 1,
      marginBottom: 8,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 34,
      paddingBottom: 10,
      marginTop: 100,
    },
  });
}

export default SignupScreen;
