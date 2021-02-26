import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from "../../components/SearchBar";

const SearchScreen = () =>{

    const[term,setTerm] = useState('');

    return (
      <View>
          <SearchBar
            term={term}
            onTermChanged={ newTerm => setTerm(newTerm)}
            onTermSubmitted={ () => console.log('submitted')}
          />
          <Text>Search screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
