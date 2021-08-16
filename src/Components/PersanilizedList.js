import React from 'react';
import {StyleSheet} from 'react-native';  
import {List} from 'react-native-paper';

import formatNumber from '../services/FormatNumber';

const PersonalizedList = (props) => {
    
  // const formatNumber = (amount, decimalCount = 2, decimal = ",", thousands = ".") => {
  //   try {
  //     decimalCount = Math.abs(decimalCount);
  //     decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
  //     const negativeSign = amount < 0 ? "-" : "";
  
  //     let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
  //     let j = (i.length > 3) ? i.length % 3 : 0;
  
  //     return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };
    
  return(
    <List.Accordion 
      title={`Relatório de ${props.title}`}
      style={styles.relatories}
    >
      <List.Item title={`Peso total: ${props.pesoTotal > 0 ? props.pesoTotal : '-'} kg`}/>
      <List.Item title={`Número de ${props.title}: ${props.animals > 0 ? props.animals: '-'}`}/>
      <List.Item title={`Peso médio: ${props.pesoMedio > 0 ? props.pesoMedio.toFixed(2) : '-'} kg`}/>
      <List.Item title={`Valor total: R$ ${props.valorTotal > 0 ? formatNumber(props.valorTotal) : '-'}`}/>
      <List.Item title={`Valor medio: R$ ${props.valorMedio > 0 ? formatNumber(props.valorMedio) : '-'}`}/>
    </List.Accordion>
  )
}

const styles = StyleSheet.create({
  relatories: {
    marginVertical: 1,
    backgroundColor: "hsla(0, 0%, 90%, 1.0)",
    marginHorizontal: 4,
    borderRadius: 4,
  }, 
})

export default PersonalizedList;
