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
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {  FlatList } from "react-native-gesture-handler";
import PostCard from "./PostCard";


let posts = require("./temp_posts.json");

export default class Feed extends Component {
  
  constructor(props){
    super(props);
    this.state={

    }
  }

  componentDidMount(){

  }

  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigaton={this.props.navigaton} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
      return (
        <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate("PostScreen", {
            post: this.props.post
          })
        }
      >
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>SPECTAGRAM</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={posts}
              renderItem={this.renderItem}
            />
          </View>
        </TouchableOpacity>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
 
  },
  cardContainer: {
    flex: 0.85
  }
});
