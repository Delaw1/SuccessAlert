import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import Axios from 'axios'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import { apiAction } from '../actions/apiCallAction'

class network extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            showIndicator: true
        }
    }

    getUser = () => {
        Axios.get('http://successalert.store/api/users').then((resp) => {
            this.setState({
                users: resp.data,
                showIndicator: false
            })
        }).catch(err => console.log(err+" i display error"))
    }

    componentDidMount() {
        this.getUser()
        this.props.dispatch(apiAction.getUsers())
    }

    render() {
        const { users } = this.props
        let list = <View style={styles.container}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
        if(users.data) {
            list = <View>
                        <ScrollView>
                            {
                                users.data.map((user, i) =>

                                    <Card key={i}>
                                        <Image style={{ height: 70, width: 70 }} source={require('../Assest/images/avatar.png')} />
                                        <Text style={{ fontSize: 25 }}>{user.name}</Text>
                                        <Text>Username: {user.username}</Text>
                                        <Text>Email: {user.email}</Text>
                                        <Text>Phone Number: {user.phone_no}</Text>
                                    </Card>


                                )
                            }
                        </ScrollView>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.TouchableOpacityStyle} onPress={() => Actions.login()}>
                            <Icon name='plus-circle' type='font-awesome' color='green' size={50} />
                        </TouchableOpacity>
                    </View>
        }
        return (list)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    // MainContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5F5F5',
    // },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 40,
    },

    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
})

mapStateToMap = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToMap)(network)