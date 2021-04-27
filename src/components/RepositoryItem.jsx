import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    item: {
        padding: 2,
        marginVertical: 1,
        marginHorizontal: 1,
        marginBottom: 10,
        marginRight: 10,
        borderBottomWidth: 10,
        borderBottomColor: theme.colors.container,   
    },
    logo: {
        width: 55,
        height: 55,
        borderRadius: 5,
        padding: 20,
        marginRight: 30,
    },
    container: {
        display: 'flex',
        flexDirection: 'row', 
    },
    language: {
        
        textAlign: 'center',
        backgroundColor: theme.colors.primary,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        justifyContent: 'center',  
    },
    numbers:{
        flex: 1,
        backgroundColor: "white", 
        textAlign: 'center',
    },
});

const numberFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
};
const RepositoryItem = ({fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl} ) => {
    return (
        <View style={styles.item}>
            <View style={{margin: 10}}>
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: ownerAvatarUrl,
                        }}
                    />
                    <View style={{flexDirection: 'column', display:'flex', justifyContent:'center', alignItems:'flex-start', flexGrow: 1}}>
                        <Text color="textPrimary" fontWeight="bold" fontSize="subheading">{fullName}</Text>
                        <Text style={{flexShrink:1}} color="textPrimary" fontWeight="normal" fontSize="subheading">{description}</Text>
                        <Text color="textSecondary" style={styles.language}>{language}</Text>
                    </View>  
                </View>            
                <View style={styles.container}>
                    <Text fontWeight="bold" style={styles.numbers}>{numberFormatter(stargazersCount)}</Text>
                    <Text fontWeight="bold" style={styles.numbers}>{numberFormatter(forksCount)}</Text>
                    <Text fontWeight="bold" style={styles.numbers}>{numberFormatter(reviewCount)}</Text>
                    <Text fontWeight="bold" style={styles.numbers}> {numberFormatter(ratingAverage)}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={{flex: 1, textAlign: 'center'}}>Stars</Text>
                    <Text style={{flex: 1, textAlign: 'center'}}>Forks</Text>
                    <Text style={{flex: 1, textAlign: 'center'}}>Reviews</Text>
                    <Text style={{flex: 1, textAlign: 'center'}}>Rating</Text>
                </View>
            </View>
           
        </View>
    );
    
};

export default RepositoryItem;