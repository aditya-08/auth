//import re-usable library
import React from 'react';
import {Text, TextInput, View} from 'react-native';
//design component

const Field = ({ label, onChangeText,placeholder, value, secureTextEntry }) => {
    const { inputStyle , labelStyle , containerStyle } = styles;
    return(
        <View style={containerStyle}>
            <Text style={label}>{label}</Text>
            <TextInput
                style={inputStyle}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = {
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  };
//make it availble
export {Field}