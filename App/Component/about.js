import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'

class about extends Component {
    render() {
        return (
            <ScrollView>
            <View>
                <Image style={{ height: 150, width: '100%' }} source={require('../Assest/images/about.png')} />
                <View style={{padding: 20}}>
                    <Text style={styles.text}>
                        We are the entrepreneurial team of Parah-Vine International. It is an international company
                        of peculiar reputation with its agent in the UK. So, one of the services and products that
                        substantiate our enterprising and peculiar operation is the running of this Mobile App, named;
                        SUCCESS ALERT. {"\n"}</Text>
                        <Text style={styles.text}>We launched this Mobile App for the purpose of enhancing individual globally,
                        towards attaining their worthily- desired success. Then believe strongly that as you join us
                        making use of this Mobile App, succesful testimony shall reach us back.{"\n"}</Text>
                        <Text style={styles.text}>

                            Thank you!{"\n"}{"\n"}{"\n"}


                            Our Contact:{"\n"}

                            <Text style={{fontWeight: 'bold'}}>Parah-Vine Int'l</Text>{"\n"}{"\n"}

                            NIGERIA{"\n"}
                            No 5, Salat Shopping Complex, Ede-Osogbo Road, Ofatedo (Osogbo), Osun State,Nigeria.{"\n"}{"\n"}

                            UNITED KINGDOM{"\n"}
                            Frank Towel Court{"\n"}
                            Glebelands Road{"\n"}
                            Feltham{"\n"}
                            London{"\n"}
                            TW14 9BN{"\n"}
                            UK{"\n"}{"\n"}

                            Mobile Line and Whatsapp:{"\n"}
                            +2348031508969{"\n"}{"\n"}

                            E-mail:{"\n"}
                            parahdvine@gmail.com
                    </Text>
                    </View>
            </View></ScrollView>
        )
    }
}

styles = StyleSheet.create({
    text: {
        fontSize: 15
    }
})
export default about