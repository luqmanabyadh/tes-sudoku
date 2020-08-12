import React from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import Board from "../components/Board";

const Game = ({ route }) => {
  const { level, userName } = route.params;
  return (
    <>
      <View style={styles.container}>
        <Board level={level} userName={userName} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5d5b6a",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Game;
