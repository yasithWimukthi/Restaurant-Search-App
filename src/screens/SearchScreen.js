import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = (searchTerm) =>{

    const[term,setTerm] = useState('');
    const[searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
      <View>
          <SearchBar
            term={term}
            onTermChanged={ newTerm => setTerm(newTerm)}
            onTermSubmitted={() => searchApi(term)}
          />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
          <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
          <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
      </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
