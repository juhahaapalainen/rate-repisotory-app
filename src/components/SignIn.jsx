import { Form, Formik } from 'formik';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';


const initialValues = {
    username: '',
    password: '',
};
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        margin: 10,
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

const onSubmit = (values) => {
    console.log(values);
};

const SignInForm = ({ onSubmit}) => {
    return (
        <View>
            <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={styles.input}/>
            <Button onPress={onSubmit} title="Sign in" style={{marginLeft: 10}}/>
        </View>
    );
};


const SignIn = () => {
    
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;