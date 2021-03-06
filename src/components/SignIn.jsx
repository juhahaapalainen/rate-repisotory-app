import { Formik } from 'formik';
import React from 'react';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
    username: '',
    password: '',
};
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    button: {
        
        textAlign: 'center',
        backgroundColor: theme.colors.primary,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 10,
        marginBottom: 16,
        borderWidth: 1,
        fontWeight: theme.fontWeights.bold,
        paddingHorizontal: 5,
        justifyContent: 'center',  
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
    },
});
const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});

// const onSubmit = (values) => {
//     console.log(values);
// };

const SignInForm = ({ onSubmit}) => {
    return (
        <View>
            <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={styles.input}/>
            <TouchableOpacity  onPress={onSubmit}>
                <Text style={styles.button}>Sign in</Text>
            </TouchableOpacity>
            
        </View>
    );
};


const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;
        console.log('username', username);
        console.log('password', password);
        try {
            // const { data } = await signIn({ username, password });
            // console.log('data',data.authorize.accessToken);
            await signIn({ username, password });
            

        } catch (e) {
            console.log(e);
        }
    };
  
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;