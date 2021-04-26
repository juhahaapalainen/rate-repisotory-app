import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';

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

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to="/" component={TouchableOpacity} style={{flex: 1}}>
                    <AppBarTab text="Repositories"></AppBarTab>
                </Link> 
                <Link to="/signin" component={TouchableOpacity} style={{flex: 1}} >
                    <AppBarTab text="Sign in"></AppBarTab>
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;