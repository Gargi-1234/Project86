import React, { Component } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Alert,
    Platform,
    StatusBar,
    TouchableOpacity,
    Text,
} from "react-native";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            confirm_password: "",
        };
    }
    registerUser = (email, password,confirmPassword,first_name,last_name) => {
        if(password==confirmPassword){
           firebase
           .auth()
           .createUserWithEmailAndPassword(email, password)
           .then((userCredential) => {
             Alert.alert("User registered!!");
           })
           .catch(error => {
               Alert.alert(error.message);
             });
           }else{
             Alert.alert("Passwords don't match!");
           }
    }

    render() {
        const { email, password, confirm_password, first_name, last_name } = this.state;

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />

                <Text style={styles.appTitleText}>Register</Text>

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder={"Enter Email"}
                    placeholderTextColor={"#FFFFFF"}
                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ password: text })}
                    placeholder={"Enter Password"}
                    placeholderTextColor={"#FFFFFF"}
                    secureTextEntry
                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ first_name: text })}
                    placeholder={"First Name"}
                    placeholderTextColor={"#FFFFFF"}
                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ last_name: text })}
                    placeholder={"Last Name"}
                    placeholderTextColor={"#FFFFFF"}
                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ confirm_password: text })}
                    placeholder={"Renter Password"}
                    placeholderTextColor={"#FFFFFF"}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={[styles.button, { marginTop: 20 }]}
                    onPress={() => {
                        this.registerUser(email, password, first_name, last_name, confirm_password)
                    }}
                >

                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.replace("Login")
                    }}
                >
                    <Text> Login ? </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
      alignItems: "center",
      justifyContent: "center"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appIcon: {
      width: RFValue(200),
      height: RFValue(200),
      resizeMode: "contain",
      marginBottom: RFValue(20)
    },
    appTitleText: {
      color: "white",
      textAlign: "center",
      fontSize: RFValue(40),

      marginBottom: RFValue(20)
    },
    textinput: {
      width: RFValue(250),
      height: RFValue(40),
      padding: RFValue(10),
      marginTop: RFValue(10),
      borderColor: "#FFFFFF",
      borderWidth: RFValue(4),
      borderRadius: RFValue(10),
      fontSize: RFValue(15),
      color: "#FFFFFF",
      backgroundColor: "#15193c",

    },
    button: {
      width: RFValue(250),
      height: RFValue(50),
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: RFValue(30),
      backgroundColor: "white",
      marginBottom: RFValue(20)
    },
    buttonText: {
      fontSize: RFValue(24),
      color: "#15193c",

    },
    buttonTextNewUser: {
      fontSize: RFValue(12),
      color: "#FFFFFF",
      textDecorationLine: 'underline'
    }
  });
  