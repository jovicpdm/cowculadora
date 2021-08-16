import React, { useState, useEffect } from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {List} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PersonalizedList from '../Components/PersanilizedList';
import formatNumber from '../services/FormatNumber';

const Relatory = ({navigation}) => {
  const valorPesoBoi = 4.20;    
  const valorPesoVaca = 3.90;
  const valorPesoBezerro = 9.50;
  const valorPesoBezerra = 8.50;
    
  const [boi, setBoi] = useState([])
  const [vaca, setVaca] = useState([])
  const [bezerro, setBezerro] = useState([])
  const [bezerra, setBezerra] = useState([])

  useEffect(() => {
    AsyncStorage.getItem("bois").then(data => {
      const dataBoi = JSON.parse(data);
      setBoi(dataBoi);
     });
    AsyncStorage.getItem("vacas").then(data => {
      const dataVaca = JSON.parse(data);
      setVaca(dataVaca);
    });
    AsyncStorage.getItem("bezerros").then(data => {
      const dataBezerro = JSON.parse(data);
      setBezerro(dataBezerro);
    });
    AsyncStorage.getItem("bezerras").then(data => {
      const dataBezerra = JSON.parse(data);
      setBezerra(dataBezerra);
    });
  }, [])

  const precoTotalBoi = boi.pesoTotal * valorPesoBoi;
  const precoTotalVaca = vaca.pesoTotal * valorPesoVaca;
  const precoTotalBezerro = bezerro.pesoTotal * valorPesoBezerro;
  const precoTotalBezerra = bezerra.pesoTotal * valorPesoBezerra;

  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  const confirmData = () =>
    Alert.alert(
      "Deseja finalizar a pesagem?",
      "Você encerrará essa sessão de pesagem",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Finalizar", onPress: () => navigation.navigate("Main")}
      ]
    );

  return (
    <ScrollView>
      <Text style={styles.title}>
        Relatório
      </Text>
      <List.Section title="Relatório por animais">
        <PersonalizedList 
          expanded={expanded}
          onPress={handlePress}
          title="bois"
          pesoTotal={boi.pesoTotal}
          animals={boi.n}
          pesoMedio={boi.pesoTotal / boi.n}
          valorTotal={precoTotalBoi}
          valorMedio={precoTotalBoi / boi.n}
        />
        <PersonalizedList 
          expanded={expanded}
          onPress={handlePress}
          title="vacas"
          pesoTotal={vaca.pesoTotal}
          animals={vaca.n}
          pesoMedio={vaca.pesoTotal / vaca.n}
          valorTotal={precoTotalVaca}
         valorMedio={precoTotalVaca / vaca.n}
        />
        <PersonalizedList 
          expanded={expanded}
          onPress={handlePress}
          title="bezerros"
          pesoTotal={bezerro.pesoTotal}
          animals={bezerro.n}
          pesoMedio={bezerro.pesoTotal / bezerro.n}
          valorTotal={precoTotalBezerro}
          valorMedio={precoTotalBezerro / bezerro.n}
        />
        <PersonalizedList 
          expanded={expanded}
          onPress={handlePress}
          title="bezerras"
          pesoTotal={bezerra.pesoTotal}
          animals={bezerra.n}
          pesoMedio={bezerra.pesoTotal / bezerra.n}
          valorTotal={precoTotalBezerra}
          valorMedio={precoTotalBezerra / bezerra.n}
        />
      </List.Section>
      <Text style={[styles.results, styles.resultsAux]}>Peso total: {boi.pesoTotal + vaca.pesoTotal + bezerro.pesoTotal + bezerra.pesoTotal} KG</Text>
      <Text style={styles.results}>Valor total: R$ {formatNumber(precoTotalBoi + precoTotalVaca + precoTotalBezerro + precoTotalBezerra)}</Text>
      <TouchableOpacity style={styles.button} onPress={confirmData}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "RobotoRegular",
    textAlign: 'center',
    marginTop: 16,
    fontSize: 34,
    color: "#4B9460"
  }, 
  results: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "RobotoRegular",
  }, 
  resultsAux: {
    marginTop: 32
  },   
  button:{
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
  buttonText: {
    fontSize: 16,
    marginTop: 13,
    fontFamily: "RobotoRegular",
    color: "rgba(255, 255, 255, 1)",
  },
})

export default Relatory