import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from 'expo-app-loading';
import firebase from "firebase";
import * as Font from "expo-font";

//SplashScreen.preventAutoHideAsync();
let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            userSignedIn: false,
            fontsLoaded: false,
        };

    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    signInWithGoogle = async () => {
        firebase
            .auth()
            .signInWithGoogleAsync()
            .then(() => {
                this.props.navigation.replace("Dashboard");
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };


    render() {
        if (!this.state.fontsLoaded) {
            return <AppLoading/>
        }else{
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />

                    <View style={styles.appTitle} >
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.appIcon}
                        ></Image>
                        <Text style={styles.appTitleText} >{'Spectagram'}</Text>
                    </View>

                    <View style={styles.buttonContainer} >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.signInWithGoogle()}
                        >
                            <Image
                                source={require("../assets/google_icon.png")}
                                style={styles.googleIcon}
                            ></Image>
                            <Text style={styles.googleText}> Sign in with Google </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cloudContainer} >
                        {/* <Image
                            source={require("../assets/cloud.png")}
                            style={styles.cloudImage}
                        ></Image> */}
                    </View>
                </View>
            )
        }
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
        height: RFValue(50),
        padding: RFValue(10),
        borderColor: "#FFFFFF",
        borderWidth: RFValue(4),
        borderRadius: RFValue(10),
        fontSize: RFValue(20),
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
    },
    googleIcon: {
        width: RFValue(60),
        height: RFValue(60),
        resizeMode: "contain",
        marginBottom: RFValue(2)
    }
});
