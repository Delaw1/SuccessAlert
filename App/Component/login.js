import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import {authAction} from '../actions/authAction'

class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: {
                 email: '',
                 password: ''
             }
        }
    }
    handleText = (inputField, text) => {
        this.setState((prevState) => ({
            ...prevState.data,
            [inputField] : text.trim()
        }))
    }
    checkLogin = () => {
        const { dispatch } = this.props
        const { data } = this.state
        if(data.email == '') {
            
        }
        dispatch(authAction.login(this.state.data))
    }
    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder='email@address.com'
                    leftIcon={{ type: 'font-awesome', name: 'envelope', size: 18 }}
                    label='Email Address'
                    onChangeText={(text) => this.handleText('email', text)}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{ type: 'font-awesome', name: 'unlock', size: 18 }}
                    label='Password'
                    onChangeText={(text) => this.handleText('password', text)}
                />
                <Button buttonStyle={styles.but} title="Login"  onPress={this.checkLogin} />
                <TouchableOpacity onPress={() => Actions.register()}>
                    <Text  style={styles.text}>Don't have an account? Click here</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    but: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10
    }
})
export default connect(null)(login)
