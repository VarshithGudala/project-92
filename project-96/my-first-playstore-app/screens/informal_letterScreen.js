import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar
} from "react-native";

export default class Informal_LetterScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.titleBar}>
                          <Text style={[styles.titleText,{color:"red"}]}> Informal Letter</Text>
                    </View>

                      <ScrollView style={{marginTop : 30}}>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("love_letter")
                    }>
                        <Text style={styles.routeText}>Love Letter</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("santaletter")
                    }>
                        <Text style={styles.routeText}>Santa Letter</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("friendship")
                    }>
                        <Text style={styles.routeText}>Friendship Letter </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("birthday_letter")
                    }>
                        <Text style={styles.routeText}>Birthday Letter </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("welcome")
                    }>
                        <Text style={styles.routeText}>Invitation Letter </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("christmas_format")
                    }>
                        <Text style={styles.routeText}>Christmas Letter </Text>
                    </TouchableOpacity>

                      <TouchableOpacity 
                        onPress={() =>
                            this.props.navigation.navigate("Home")
                        }
                    >
                        <Image source={require("../assets/back.png")} style = {{width:80 , height:80 , borderRadius : 100, alignSelf : "center" , marginTop : 20}}/>
                    </TouchableOpacity>

                    </ScrollView>

                          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }
});