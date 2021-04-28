import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link, useHistory } from 'react-router-native';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

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
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const {authorizedUser} = useAuthorizedUser();
    console.log('AUTHUSER:', authorizedUser);
    const history = useHistory();

    const signout = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push('/');
        console.log('SIGNOUT');
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
              
                <View style={{flex: 1}}>
                    <Link to="/" text="Repositories" path="/" component={AppBarTab} />
                    {/* <AppBarTab text="Repositories" path="/" ></AppBarTab> */}
                </View>
                <View style={{flex: 1}}>
                    <Link to="/signin" text="Sign in" path="/signin" component={AppBarTab} />
                    {/* { 
                        authorizedUser === null && (
                            <AppBarTab text="Sign in" path="/signin"></AppBarTab>)
                    } 
                    { 
                        authorizedUser && (
                            <AppBarTab text="Sign out" cb={signout} path="/"></AppBarTab> )
                    
                    }  */}
                </View>
            </ScrollView>
            
        </View>
    );
};

export default AppBar;