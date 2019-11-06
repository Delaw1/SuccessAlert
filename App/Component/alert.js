import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import axios from 'axios'
import { connect } from 'react-redux'
import { apiAction } from '../actions/apiCallAction'
// import { apiCallConstant } from '../constant/apiCallConstant'

class alert extends Component {
    constructor(props) {
        super(props)
    }

    getCategory() {
        axios.get('http://10.0.2.2:8000/api/categories').then((resp) => {
            return resp.data
        }).then(resp => this.props.dispatch({ type: 'API_CALL_SUCCESS', resp }))
            .catch(err => console.log(err + " i display error"))
    }

    componentDidMount() {
        this.props.dispatch(apiAction.getCategories())
    }

    render() {
        const { categories } = this.props
        let list = <View style={styles.container}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
        if (categories.data) {
            <View>
                {list = categories.data.map((l, i) => (
                    <ListItem
                        key={i}
                        leftIcon={{ name: 'heartbeat', type: 'font-awesome' }}
                        title={l.name}
                        subtitle={l.name}
                        bottomDivider
                    />
                ))}
            </View>
        }
        return (list)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
mapStateToProps = (state) => ({
    categories: state.categories
})
export default connect(mapStateToProps)(alert)
