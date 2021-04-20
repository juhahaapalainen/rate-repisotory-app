import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.container,
        height: 100,
        display: 'flex',

    // ...
    },
    text1: {
        flexGrow: 0,
        fontSize: theme.fontSizes.body,
        color: theme.colors.textSecondary,
    }
    // ...
});

const AppBar = () => {
    return <View style={styles.container}>{
        <Pressable>
            <Text style={styles.text1}>Repositories</Text>
        </Pressable>
        
    }</View>;
};

export default AppBar;