import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.container,
        height: 100,
        display: 'flex',
        flexDirection: 'row',  
    },
    text1: {
        flexGrow: 0,
        fontSize: theme.fontSizes.body,
        textAlignVertical: 'bottom',
        borderRightWidth: 20,
        backgroundColor: theme.colors.container,
        borderColor: theme.colors.container,
    }
    
});

const AppBarTab = () => {
    return (
        <View style={styles.container}>
         
        </View>
    );
};

export default AppBarTab;