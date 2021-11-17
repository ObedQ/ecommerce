import React,{useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const Cart = ({}) => {
  return (
    <View style={styles.container}>
        <View style={{
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 25,
        }}>
         <Text style= {{
             padding: 10,
             fontSize: 15,
         }}>
            Total: 
        </Text>
        <Text style= {{ 
             fontSize: 20,
             color: '#000000'
             }}>
        $67
        </Text>
        </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "white",
            alignSelf: 'center',
            fontSize: 20,
          }}
        >
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  button: {
      backgroundColor: '#36B06B',
      marginBottom: 20,
    marginVertical: 20,
    fontSize: 14,
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
    height: '8%',
    justifyContent:'space-around'
  },
});
