import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar</Text>
                        <Text style={styles.titleText}>App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Star Map</Text>
                    </TouchableOpacity>
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
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    }
});
