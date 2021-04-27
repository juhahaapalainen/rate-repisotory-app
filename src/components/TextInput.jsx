import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    error: {
        borderColor: theme.colors.error,
    },
    normal: {
        borderColor: theme.colors.primary,
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, error ? styles.error : styles.normal];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;