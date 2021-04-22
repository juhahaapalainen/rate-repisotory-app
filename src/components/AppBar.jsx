import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

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
                <View style={{flex: 1}}>
                    <Link to="/" component={TouchableOpacity}>
                        <Text color="textSecondary" fontWeight="bold" fontSize="subheading" style={styles.text1} >Repositories</Text>
                    </Link>
                </View>
            
                
         
                <View style={{flex: 1}}>
                    <Link to="/signin" component={TouchableOpacity} >
                        <Text color="textSecondary" fontWeight="bold" fontSize="subheading" style={styles.text1} >Sign in</Text>
                    </Link>
                </View>
                
            </ScrollView>
                
            
        </View>
    );
};

export default AppBar;