import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () =>{

    const[term,setTerm] = useState('');
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }catch (e) {
            setErrorMessage('Something went wrong.');
        }
     }

    return (
      <View>
          <SearchBar
            term={term}
            onTermChanged={ newTerm => setTerm(newTerm)}
            onTermSubmitted={searchApi}
          />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
