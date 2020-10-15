import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { useNavigation } from '@react-navigation/native'; 

const ResultsList = ({ title, result}) => {

    if( !result.length){
        return null;
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={result}
            keyExtractor={ (result) => result.id }
            renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={ () => navigation.navigate('Results', {id: item.id })}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
            ) 
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginBottom: 15
    },
    title:{
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsList;