import React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({search, onSearchChange, onSearchSubmit}) => {
    return (
        <View style={styles.searchBar}>
            <Feather name="search" color="black" style={styles.icon} />
            <TextInput style={styles.styleInput} 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            value={search}
            onChangeText={onSearchChange}
            onEndEditing={onSearchSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 10,
        backgroundColor: '#E6E6FA',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10

    },
    styleInput:{
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;