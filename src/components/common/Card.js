// import libraries
import React, { Component } from 'react';
import { View } from 'react-native';

//component definition
const Card = (props) => {
    return(
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadow: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

// make it available
export  {Card};