import React from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import Board from "../components/Board";
import MyCountdown from "../components/MyCountDown";

const Game = ({ route }) => {
  const { level, userName } = route.params;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.timer}>
          <MyCountdown level={level} />
        </View>
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
  timer: {
    marginTop: 80,
  },
});

export default Game;
