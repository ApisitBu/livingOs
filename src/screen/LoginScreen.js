import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native";


export default function LoginScren({navigation}) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onLoginPressed = () => {

        navigation.navigate('StartScreen')
    }
    return (
        <View style={
            styles.container
        }>

            <StatusBar style="auto"/>
            <View style={
                styles.inputView
            }>
                <TextInput style={
                        styles.TextInput
                    }
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={
                        (username) => setUserName(username)
                    }/>
            </View>

            <View style={
                styles.inputView
            }>
                <TextInput style={
                        styles.TextInput
                    }
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={
                        (password) => setPassword(password)
                    }/>
            </View>


            <TouchableOpacity style={
                    styles.loginBtn
                }
                disabled={
                    username && password ? false : true
                }
                onPress={onLoginPressed}>
                <Text>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={
                    styles.loginBtn
                }

                onPress={
                    () => navigation.navigate('ListView')
            }>
                <Text>ListView</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

    inputView: {
        backgroundColor: "#adebf7",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center"
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },


    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#00c4eb"
    }
});
