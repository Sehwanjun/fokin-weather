import React from "react";
import { StyleSheet, Text, View, YellowBox, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}
// export를 이렇게 해도 되나보다..

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
    // 네이티브에만 잇는...
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
