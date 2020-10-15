import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import yelp from '../api/Yelp';

const ResultsShowScreen = ({route}) => {

    const [result, setResult] = useState(null);

    console.log(result);
    // passando parâmetro para rota 
    const {id} = route.params;

    const getResult = async () =>{
        const response = await yelp.get(`/${id}`); 
        setResult(response.data);
    }

    useEffect( () => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}><Fontisto name="motorcycle" size={26} color="black" /> {result.name}</Text>
            <Text style={styles.text}><Entypo name="old-phone" size={26} color="blue" /> ({result.phone})</Text>
            <Text style={styles.text}><Entypo name="old-phone" size={26} color="blue" /> ({result.display_phone})</Text>
            <FlatList  
            data={result.photos}
            keyExtractor={ (photo) => photo }
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item}} />
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
container:{
    flex: 1
},
 image:{
     width: 300,
     height: 150,
     margin: 15,
     alignSelf: 'center',
     borderWidth: 1,
     borderColor: 'black'
 },
 text:{
     fontSize: 25,
     alignSelf: 'center',
     fontWeight: 'bold',
     color: 'red',
     marginVertical: 5
 }
});

export default ResultsShowScreen;