import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, PixelRatio} from 'react-native';

function Main({navigation}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Bem vindo ao</Text>
            <Text style={[styles.title]}>Cowculadora</Text>
            <Text style={styles.text}>Sua calculadora de preço de bovinos</Text>
            <Text style={styles.text}>Basta escolher o animal e digitar o peso para obter o valor da sua venda/compra</Text>
            <Text style={styles.text}>Boa venda!</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate("Register")
            }}>
                <Text style={styles.buttonText}>COMEÇAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        textAlign: 'center',
        fontFamily: "RobotoRegular",
        fontSize: 16,
        lineHeight: 24,
        marginTop: 80,
        color: "rgba(0,0,0,0.87)"
    }, 
    title: {
        textAlign: 'center',
        fontSize: 48,
        fontFamily: "RobotoRegular",
        color: "#017374",
        lineHeight: 56,
        marginBottom: 36
    }, 
    text: {
        textAlign: 'center',
        fontFamily: "RobotoRegular",
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 40,
        color: "rgba(0,0,0,0.87)"
    },
    button: {
        backgroundColor: "rgba(1, 135, 134, 1)",
        alignSelf: 'center',
        shadowColor:"0px 1.05747px 1.05747px rgba(0, 0, 0, 0.14), 0px 2.11494px 1.05747px rgba(0, 0, 0, 0.12), 0px 1.05747px 3.17241px rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
        width: 328,
        height: 48,
    }, 
    buttonText: {
        marginTop: 13,
        textAlign: 'center',
        textAlignVertical: 'auto',
        fontSize: 16,
        color: "rgba(255, 255, 255, 1)",
    }
    
})

export default Main;