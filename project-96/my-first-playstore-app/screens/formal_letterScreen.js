import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar
} from "react-native";

export default class Formal_LetterScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.titleBar}>
                        <Text style={[styles.titleText,{color:"red"}]}> Formal Letter</Text>
                        
                    </View>
                        
                        <ScrollView style={{marginTop : 30}}>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("buisness")
                    }>
                        <Text style={styles.routeText}>Buisness Letter</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("formal_letter")
                    }>
                        <Text style={styles.routeText}>Formal Letter Sample</Text>
                      </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("enquir")
                    }>
                        <Text style={styles.routeText}>Enquiry Letter </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("job")
                    }>
                        <Text style={styles.routeText}> Job Application </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("badnews")
                    }>
                        <Text style={styles.routeText}>Bad News Letter </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("leaving")
                    }>
                        <Text style={styles.routeText}>Leave Letter </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("complaint")
                    }>
                        <Text style={styles.routeText}>Complaint Letter </Text>
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