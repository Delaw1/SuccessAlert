import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { Card, ListItem, Button, Avatar } from 'react-native-elements'
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import SplashScreen from 'react-native-splash-screen';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'

handleBackButton = () => {
    Alert.alert('yes')
     return true;
}

class index extends React.Component {
    componentDidMount() {
        // Alert.alert('yes')
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
                <View style={styles.top}>
                    <TouchableOpacity style={[styles.box, styles.top_right]} onPress={() => Actions.alert()}>
                        <Image style={styles.image} source={require('../Assest/images/alert.png')} />
                        <Text style={styles.left}>My Alert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, styles.top_left]} onPress={() => Actions.network()}>
                        <Image style={styles.image} source={require('../Assest/images/network.png')} />
                        <Text style={styles.left}>Networking</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.box, styles.bottom]} onPress={() => Actions.about()}>
                    <Image style={styles.image} source={require('../Assest/images/about.png')} />
                    <Text style={styles.left}>About Us</Text>
                </TouchableOpacity>
            </View>);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 15,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    top: {
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    box: {
        borderWidth: 1,
        borderColor: "green",
        height: 150,
        marginEnd: 20,
        width: 170,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top_left: {
        flex: 1,
    },
    top_right: {
        flex: 1,
    },
    bottom: {
        marginTop: 20
    },
    left: {
        fontSize: 15
    },
    image: {
        width: 70, 
        height: 70
    }
})

export default index;
