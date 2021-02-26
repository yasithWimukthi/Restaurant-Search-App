import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchScreen = () =>{
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyles}/>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
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
        flexDirection: 'row'
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
