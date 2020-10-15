import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
   // console.log('teste');
    // estado para a funcionalidade buscar
    const [search, setSearch] = useState('');
    const [ searchApi, result, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === $ || $$ || $$$
        return result.filter(result => {
            return result.price === price;
        });
    };

    return (
        //corrigindo o problema do scrolview em aparelhos pequenos
        <View style={{flex: 1}}> 
            <SearchBar search={search}
             onSearchChange={ newSearch => setSearch(newSearch)}
             onSearchSubmit={ () => searchApi()} />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            {/*<Text> we have found {result.length} results</Text> */} 

            <ScrollView>
                <ResultsList
                result={filterResultsByPrice('$')}
                title="Cost Effective" />  
                <ResultsList
                result={filterResultsByPrice('$$')}
                title="Bit Pricier" />  
                <ResultsList
                result={filterResultsByPrice('$$$')}
                title="Big Spender" />  
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;