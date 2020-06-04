import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
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
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
            </View>
        )
    }
}

export default Login;
