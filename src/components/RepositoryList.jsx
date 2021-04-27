import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const RepositoryList = () => {
    const { repositories } = useRepositories();

    const ItemSeparator = () => <View style={styles.separator} />;

    const renderItem = ({ item }) => (
        <RepositoryItem 
            fullName={item.fullName} 
            description={item.description} 
            language={item.language} 
            stargazersCount={item.stargazersCount}
            forksCount={item.forksCount}
            reviewCount={item.reviewCount}
            ratingAverage={item.ratingAverage}
            ownerAvatarUrl={item.ownerAvatarUrl}
        />
    );

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];


    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            // other props
            renderItem={renderItem}
            keyExtractor={(item ,index) => index.toString()}
        />
    );
};

export default RepositoryList;