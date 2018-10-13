//import lib
import React from 'react';
import { View , ActivityIndicator } from 'react-native';

//create component
const Spinner = ({ size }) => {
    return(
        <View styles={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
// make it availble
export { Spinner }