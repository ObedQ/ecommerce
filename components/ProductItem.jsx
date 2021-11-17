import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export const ProductItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={product.image}
        style={{ width: 150, height: 150 }}
      />
      <Text>{product.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: 220,
    width: "47%",
    borderRadius: 20,
    alignItems: "center",
  },
});
