import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            access_token: ""
        }
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            {
                username: this.state.username,
                password: this.state.password
            }
        );

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://stitch.mongodb.com/api/client/v2.0/app/learningjournal-kosdd/auth/providers/local-userpass/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            const jsonResult = JSON.stringify(result);
            AsyncStorage.setItem('@access_token', jsonResult);
        })
        .catch(error => console.log('error', error));
        }

    getData = async () => {
        try {
            console.log("get token");
            const jsonValue = await AsyncStorage.getItem('@access_token')
            console.log(jsonValue);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            // error reading value
        }
        }
        
    componentDidMount = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('@access_token')
            if(jsonValue)
            {
                console.log("ACC Token  : ", jsonValue);
                this.setState({
                    access_token:jsonValue != null ? JSON.parse(jsonValue) : null
                });
            }
        } catch(e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View>
                <Text>Login Page</Text>
                <TextInput
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChangeText={(value) => this.handleChange("username", value)}
                />
                <TextInput
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChangeText={(value) => this.handleChange("password", value)}
                    />
                <Button 
                    title="Login"
                    onPress={this.handleSubmit}
                />
                <Text>{this.state.username}</Text>
                <Text>{this.state.password}</Text>
                <Text>{this.state.access_token}</Text>
            </View>
        )
    }
}

export default Login;
