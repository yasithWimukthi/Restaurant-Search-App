import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = (searchTerm) =>{

    const[term,setTerm] = useState('');
    const[searchApi,results,errorMessage] = useResults();

    return (
      <View>
          <SearchBar
            term={term}
            onTermChanged={ newTerm => setTerm(newTerm)}
            onTermSubmitted={() => searchApi(term)}
          />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
