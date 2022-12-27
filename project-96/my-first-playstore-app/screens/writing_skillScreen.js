import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Platform,
    StatusBar,Image
} from "react-native";

export default class Informal_LetterScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.titleBar}>
                      <Text style={[styles.titleText,{color:"red"}]}> Writing Skills</Text>
                </View>

                <ScrollView style={{marginTop : 30}}>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("creativewriting")
                    }>
                        <Text style={styles.routeText}>Creative Writing</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("journalistic")
                    }>
                        <Text style={styles.routeText}>Journalistic Writing</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("dar")
                    }>
                        <Text style={styles.routeText}>Diary Entry </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("paragraph")
                    }>
                        <Text style={styles.routeText}> Paragraph Writing </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("speech")
                    }>
                        <Text style={styles.routeText}> Speech Writing </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("technique")
                    }>
                        <Text style={styles.routeText}> Technical Writing </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("res")
                    }>
                        <Text style={styles.routeText}> Scientific Research</Text>
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
        marginTop: 20,
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
    }
});