import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Platform,
    Image,
    StatusBar
} from "react-native";

export default class ComplaintScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />

                <View style={styles.titleBar}>

                    <Image
                        source={require("../assets/SAMPLE-complaint-letter.png")}
                        style={{
                            width: 80,
                            height: 80,
                            flex: 1,
                            resizeMode: 'cover',
                        }}
                    />

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("formal letter")
                        }
                    >
                        <Image source={require("../assets/back.png")} style={{ width: 80, height: 80, borderRadius: 100, alignSelf: "center", marginTop: 20 }} />
                    </TouchableOpacity>

                </View>



                <ScrollView>

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