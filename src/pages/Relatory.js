import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Relatory = () => {
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

    return (
        <View>
            <Text style={styles.title}>
                Relatório
            </Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Animais</DataTable.Title>
                    <DataTable.Title>Qtd</DataTable.Title>
                    <DataTable.Title>Peso Total</DataTable.Title>
                    <DataTable.Title>Peso Médio</DataTable.Title>
                    <DataTable.Title numeric>Valor</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>Boi</DataTable.Cell>
                    <DataTable.Cell>{boi.n != 0 ? boi.n : "-"}</DataTable.Cell>
                    <DataTable.Cell>{boi.pesoTotal != 0 ? boi.pesoTotal : "-"}</DataTable.Cell>
                    <DataTable.Cell>{boi.pesoTotal ? (boi.pesoTotal / boi.n) : "-"}</DataTable.Cell>
                    <DataTable.Cell numeric>{precoTotalBoi != 0 ? precoTotalBoi : "-"}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Vaca</DataTable.Cell>
                    <DataTable.Cell>{vaca.n != 0 ? vaca.n : "-"}</DataTable.Cell>
                    <DataTable.Cell>{vaca.pesoTotal != 0 ? vaca.pesoTotal : "-"}</DataTable.Cell>
                    <DataTable.Cell>{vaca.pesoTotal != 0 ? (vaca.pesoTotal/ vaca.n) : "-" }</DataTable.Cell>
                    <DataTable.Cell numeric>{precoTotalVaca != 0 ? precoTotalVaca : "-"}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Bezerro</DataTable.Cell>
                    <DataTable.Cell>{bezerro.n != 0 ? bezerro.n : "-"}</DataTable.Cell>
                    <DataTable.Cell>{bezerro.pesoTotal != 0 ? bezerro.pesoTotal : "-"}</DataTable.Cell>
                    <DataTable.Cell>{bezerro.pesoTotal !=0 ? (bezerro.pesoTotal / bezerro.n) : "-"}</DataTable.Cell>
                    <DataTable.Cell numeric>{precoTotalBezerro != 0 ? precoTotalBezerro : "-"}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Bezerra</DataTable.Cell>
                    <DataTable.Cell>{bezerra.n != 0 ? bezerra.n : "-"}</DataTable.Cell>
                    <DataTable.Cell>{bezerra.pesoTotal != 0 ? bezerra.pesoTotal : "-"}</DataTable.Cell>
                    <DataTable.Cell>{bezerra.pesoTotal ? bezerra.pesoTotal / bezerra.n : "-"}</DataTable.Cell>
                    <DataTable.Cell numeric>{precoTotalBezerra != 0 ? precoTotalBezerra : "-"}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>

            <Text style={[styles.results, styles.resultsAux]}>Peso total: {boi.pesoTotal + vaca.pesoTotal + bezerro.pesoTotal + bezerra.pesoTotal} KG</Text>
            <Text style={styles.results}>Valor total: R$ {precoTotalBoi + precoTotalVaca + precoTotalBezerro + precoTotalBezerra}</Text>
        </View>
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
    table: {
        textAlign: 'center',
        marginBottom: 32,
        marginTop: 16
    },
    results: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 8,
        fontFamily: "RobotoRegular",
    }, 
    resultsAux: {
        marginTop: 32
    }
})

export default Relatory