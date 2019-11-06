import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import Axios from 'axios'
import { connect } from 'react-redux'
import authReducer from '../reducers/auth.reducer'
import {authAction} from '../actions/authAction'
import {alertConstant} from '../constant/alertConstant'

class register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                name: 'law',
                username: 'law3',
                email: 'law@gmail.com',
                phone_no: '07068870589',
                password: '111111',
                password_confirmation: '111111'
            },
            error: {
                name: null,
                username: null,
                email: null,
                phone_no: null,
                password: null,
                password_confirmation: null
            }
        }
    }
    handleText = (inputField, Text) => {
        let error = this.state.error
        const { data } = this.state
        const {dispatch} = this.props
        switch (inputField) {
            case 'password':
                error.password = Text.length < 6 ? 'Password must be a minimum of six characters' : null;
                break;
            case 'phone_no':
                error.phone_no = Text.length !== 11 ? 'Phone number must be 11 digits' : null;
                break;
            case 'password_confirmation':
                error.password_confirmation = Text !== data.password ? 'Password do not match' : null;
                break;
            case 'name':
                error.name = Text.length == 0 ? 'Full Name is required' : null;
                break;
            case 'username':
                error.username = Text.length == 0 ? 'Username is required' : null;
                break;
            case 'email':
                error.email = Text.length == 0 ? 'Email is required' : null;
                break;
        }
        this.setState((prevState) => ({
            error: error,
            data: {
                ...prevState.data,
                [inputField]: Text.trim()
            }
        }))
    }

    handleError = (inputField, Err) => {
        this.setState((prevState) => ({
            error: {
                ...prevState.error,
                [inputField]: Err
            }
        }))
    }

    checkRegister = () => {
        const { data } = this.state
        this.setState({
            error: {
                name: null,
                username: null,
                email: null,
                phone_no: null,
                password: null,
                password_confirmation: null
            }
        })

        if (data.name == '') {
            this.handleError('name', 'Full Name is required')
        }
        if (data.username == '') {
            this.handleError('username', 'Username is required')
        }
        if (data.email == '') {
            this.handleError('email', 'Email is required')
        }
        if (data.phone_no == '') {
            this.handleError('phone_no', 'Phone number is required')
        }
        if (data.password == '') {
            this.handleError('password', 'Password is required')
        }
        if (data.password_confirmation == '') {
            this.handleError('password_confirmation', 'Password Confirmation is required')
        }
        if (data.name != '' && data.username != '' && data.email != '' && data.phone_no != '' && data.password != '' && data.password_confirmation != '') {
            const { dispatch} = this.props
            // const url = 'http://successalert.store/api/register';
            // const data = {
            //     'name': this.state.data.name,
            //     'username': this.state.data.username,
            //     'email': this.state.data.email,
            //     'phone_no': this.state.data.phone_no,
            //     'password': this.state.data.password,
            //     'password_confirmation': this.state.data.password_confirmation
            // }
            dispatch(authAction.register(data))
            // const config = {
            //     headers: { "Content-Type": "application/json" },
            // }
            // Axios.post(url, data, config).then(resp => {
            //     console.warn(resp.response)
            // }).catch(err => {
            //     return err.response.data
            // }
            // ).then(err => {
            //     Object.keys(err.error_message).map((key, i) => {
            //         this.setState((prevState) => ({
            //             error: {
            //                 ...prevState.error,
            //                 [key]: err.error_message[key]
            //             }
            //         }))
            //     })
            // })
        }
    }

    render() {
        const { data, error } = this.state
        // const { error }
        return (
            <ScrollView>
                <View style={styles.container}>
                    {error.name && <Text style={styles.error}>{error.name}</Text>}
                    {this.props.error.name && <Text style={styles.error}>{this.props.error.name}</Text>}
                    <Text>Full Name</Text>
                    <TextInput
                        placeholder='Full Name'
                        onChangeText={(text) => this.handleText('name', text)}
                        underlineColorAndroid={"green"}
                    />
                    {error.username && <Text style={styles.error}>{error.username}</Text>}
                    {this.props.error.username && <Text style={styles.error}>{this.props.error.username}</Text>}
                    <Text>Username</Text>
                    <TextInput
                        placeholder='Username'
                        onChangeText={(text) => this.handleText('username', text)}
                        underlineColorAndroid={"green"}
                    />
                    {error.email && <Text style={styles.error}>{error.email}</Text>}
                    {this.props.error.email && <Text style={styles.error}>{this.props.error.email}</Text>}
                    <Text>Email Address</Text>
                    <TextInput
                        placeholder='email@address.com'
                        onChangeText={(text) => this.handleText('email', text)}
                        underlineColorAndroid={"green"}
                    />
                    {/* {error.phone_no && <Text style={styles.error}>{error.phone_no}</Text>} */}
                    {this.props.error.phone_no && <Text style={styles.error}>{this.props.error.phone_no}</Text>}
                    {error.phone_no && <Text style={styles.error}>{error.phone_no}</Text>}
                    <Text>Phone Number</Text>
                    <TextInput
                        placeholder='Phone Number'
                        onChangeText={(text) => this.handleText('phone_no', text)}
                        underlineColorAndroid={"green"}
                    />
                    {this.props.error.password && <Text style={styles.error}>{this.props.error.password}</Text>}
                    {error.password && <Text style={styles.error}>{error.password}</Text>}
                    <Text>Password</Text>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(text) => this.handleText('password', text)}
                        underlineColorAndroid={"green"}
                    />
                    {error.password_confirmation && <Text style={styles.error}>{error.password_confirmation}</Text>}
                    {this.props.error.password_confirmation && <Text style={styles.error}>{this.props.error.password_confirmation}</Text>}
                    <Text>Confirm Password</Text>
                    <TextInput
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        onChangeText={(text) => this.handleText('password_confirmation', text)}
                        underlineColorAndroid={"green"}
                    />
                    <Button buttonStyle={styles.but} title="Register" onPress={this.checkRegister} />
                    <TouchableOpacity onPress={() => Actions.login()}>
                        <Text style={styles.text}>Already Registered? Login to continue</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 20
    },
    but: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        color: 'green',
        textAlign: 'center',
        marginTop: 10
    },
    error: {
        color: 'red'
    }
})

mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
        error: state.error
    }
}
export default connect(mapStateToProps)(register)