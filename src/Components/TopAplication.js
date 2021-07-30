import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import { Appbar } from "react-native-paper";


function TopAplication (){
    return(
        <View>
            <StatusBar 
                animated={true}
                backgroundColor="#005457"
                key="Cowculador"
            />
            <Appbar.Header style={styles.appBar}>
                <Appbar.Content title="Cowculadora"  style={styles.appBar}/>
            </Appbar.Header>
        </View>
    )
}

const styles = StyleSheet.create({
    appBar:{
        height: 40,
        backgroundColor:"#005457"
    },
})

export default TopAplication;