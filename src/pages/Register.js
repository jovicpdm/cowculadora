import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Alert, BackHandler} from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

function Register({navigation}){

  const [checked, setChecked] = useState("boi");
  const [peso, setPeso] = useState(0);

  const [boi, setBoi] = useState({
    id: 1,
    n: 0,
    pesoTotal: 0,
  });

  const [vaca, setVaca] = useState({
    id: 2,
    n: 0,
    pesoTotal: 0,
  })  

  const [bezerro, setBezerro] = useState({
    id: 3,
    n: 0,
    pesoTotal: 0,
  }) 

  const [bezerra, setBezerra] = useState({
    id: 4,
    n: 0,
    pesoTotal: 0,
  }
)
  const savePeso = () => {
    if(peso > 0){
      if(checked == "boi"){
        setBoi(prevState => ({
          ...prevState,
          n: boi.n + 1,
          pesoTotal: parseFloat(boi.pesoTotal) + parseFloat(peso)
        }))
      } else if(checked == "vaca"){
        setVaca(prevState => ({
          ...prevState,
          n: vaca.n + 1,
          pesoTotal: parseFloat(vaca.pesoTotal) + parseFloat(peso)
        }))            
      } else if(checked == "bezerro"){
        setBezerro(prevState => ({
          ...prevState,
          n: bezerro.n + 1,
          pesoTotal: parseFloat(bezerro.pesoTotal) + parseFloat(peso)
        }))
      } else if (checked == "bezerra"){
        setBezerra(prevState => ({
          ...prevState,
          n: bezerra.n + 1,
          pesoTotal: parseFloat(bezerra.pesoTotal) + parseFloat(peso)
        }))
      }
      showMessage({
        message: `${checked} adicionado! (${peso} kg)`,
        type: "success", 
        position: 'top'
          }
      )
    }
    else if(peso <= 0){
      alert("O Número deve maior que 0")
    } else {
      alert("Número inválido")
    }
  }

  const confirmData = () =>
    Alert.alert(
      "Deseja finalizar a pesagem?",
      ` Bois: ${boi.n}  Vacas: ${vaca.n}\n Bezerros: ${bezerro.n}  Bezerras: ${bezerra.n}`,
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Finalizar", onPress: () => saveData()}
      ]
    );


  const saveData = async () => {
    try {
      await AsyncStorage.setItem("bois", JSON.stringify(boi));
      await AsyncStorage.setItem("vacas", JSON.stringify(vaca));
      await AsyncStorage.setItem("bezerros", JSON.stringify(bezerro));
      await AsyncStorage.setItem("bezerras", JSON.stringify(bezerra));
            
      navigation.navigate("Relatory");
    } catch (error) {
      alert(error)
    }
  }    

  return(
    <ScrollView>
      <View></View>
      <Text style={styles.title}>Insira os dados</Text>
      <Text style={styles.titleWeight}>Informe o peso </Text>            
      <TextInput 
        style={styles.input}
        placeholder="KG"
        keyboardType="number-pad"
        onChangeText={(value) => {
          setPeso(value)
        }}     
      />
      <View style={styles.radioArea}>
        <Text style={styles.areaTitleRadio}>Escolha o animal</Text>
        <View style={styles.radioLine}>
          <RadioButton
            value="boi"
            status={checked === "boi" ? "checked" : undefined}
            onPress={() => setChecked('boi')} color="rgba(44, 79, 4, 1)"
          />
          <Text>Boi</Text>
           <RadioButton
            value="vaca"
            status={checked === "vaca" ? "checked" : undefined}
            onPress={() => setChecked('vaca')} color="rgba(44, 79, 4, 1)"               
          />
          <Text>Vaca</Text>
          <RadioButton
            value="bezerro"
            status={checked === "bezerro" ? "checked" : undefined}
            onPress={() => setChecked('bezerro')} color="rgba(44, 79, 4, 1)"               
          />
          <Text>Bezerro</Text>
          <RadioButton
            value="bezerra"
            status={checked === "bezerra" ? "checked" : undefined}
            onPress={() => setChecked('bezerra')} color="rgba(44, 79, 4, 1)"               
          />
          <Text>Bezerra</Text>                
        </View>
      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={savePeso}>
        <Text style={styles.buttonAddText}>ADICIONAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFinalize} onPress={confirmData}>
        <Text style={styles.buttonFinalizeText}>FINALIZAR</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "RobotoRegular",
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 40,
    color: "rgba(0, 0, 0, 0.6)"
  },
  radioArea: {
    borderWidth: 1,
    borderColor: "rgba(44, 79, 4, 1)",
    height: 80,
    width: 312,
    alignSelf: 'center',
    borderRadius: 16,
    marginBottom: 56
  },
  areaTitleRadio: {
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 4,
    fontSize: 24,
    color: "rgba(44, 79, 4, 1)",
  },
  radioLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleWeight: {
    fontSize: 24,
    color: "rgba(44, 79, 4, 1)",
    textAlign: 'center',
    marginBottom: 8      
  },
  input: {
    height: 56,
    width: 312,
    alignSelf: 'center',
    borderColor: "rgba(0, 0, 0, 0.87)",
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    marginBottom: 60       
  },
  buttonAdd:{
    marginTop: 40,
    backgroundColor: "#018786",
    alignSelf: 'center',
    width: 312,
    height: 48,
    alignItems: 'center',
    borderRadius: 10, 
    shadowOpacity: (0.2, 0.12),
    shadowColor: "rgba(0, 0, 0, 0.2)",
    marginBottom: 16
  },
  buttonAddText: {
   fontSize: 16,
    marginTop: 13,
    fontFamily: "RobotoRegular",
    color: "rgba(255, 255, 255, 1)",
  },
  buttonFinalize: {
    alignSelf: 'center'
  },
  buttonFinalizeText: {
    color: "#018786",
    fontSize: 16
  },
})

export default Register;