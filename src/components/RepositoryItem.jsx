import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    item: {
        padding: 2,
        marginVertical: 1,
        marginHorizontal: 1,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
const RepositoryItem = ({fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl} ) => {
    return (
        <View style={styles.item}>
            <Image
                style={styles.logo}
                source={{
                    uri: ownerAvatarUrl,
                }}
            />
            <Text style={styles.item}>{fullName}{"\n"}{description}{"\n"}{language}{"\n"}{stargazersCount}{"\n"}{forksCount}{"\n"}{reviewCount}{"\n"}{ratingAverage}</Text>
        </View>
    );
    
};

export default RepositoryItem;