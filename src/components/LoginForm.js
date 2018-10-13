//import re-usable lib
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button , Card , CardSection , Field , Spinner } from './common/';
import firebase from 'firebase';

//create component
class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error:'',
        loading: false
    };

    showSpinner() {
        if(this.state.loading) {
            return <Spinner size='small'/>
        }
        return (
        <Button onPress={this.onPressButton.bind(this)}>
            Log in
        </Button>);
    }

    onPressButton() {
        const {email, password} = this.state;
        this.setState({
            email:'',
            password:'',
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.setState({loading: false}))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(() => this.setState({loading: false}))
                    .catch(()=> {
                        this.setState({error: 'Authentication failed', loading: false});
                    })
            });
    }
    render() {
        return(
            <Card>
                <CardSection>
                    <Field
                        label='Email'
                        onChangeText={email => this.setState({email})}
                        placeholder='example@mail.com'     
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Field
                        label='Password'
                        onChangeText={password => this.setState({password})}
                        placeholder='password'     
                        value={this.state.password}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.Field}>{this.state.error}</Text>
                
                <CardSection>
                    {this.showSpinner()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 18,
        color: 'red'
    }
};


//make it available
export default LoginForm