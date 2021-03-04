import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchScreen = ({term,onTermChanged,onTermSubmitted}) =>{
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyles}/>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={newTerm => onTermChanged(newTerm)}
                onEndEditing={() => onTermSubmitted()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal: 15,
        marginTop:15,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyle: {
        flex: 1,
        fontSize:18
    },
    iconStyles: {
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:15
    }
});

export default SearchScreen;
