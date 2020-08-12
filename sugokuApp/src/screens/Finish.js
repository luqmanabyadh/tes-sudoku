import React from "react";
import { StyleSheet, View, Dimensions, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDefaultStatus } from "../store/actions/boardsAction";

// const windowWidth = Dimensions.get("window").width;

const Finish = ({ route }) => {
  const navigation = useNavigation();
  const { userName } = route.params;
  const dispatch = useDispatch();

  const handleBackHome = () => {
    dispatch(setDefaultStatus("unsolved"));
    navigation.navigate("Home", { userName: "" });
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.congratulate}>Congratulations</Text>
          <Text style={styles.name}> {userName}</Text>
        </View>
        <View style={styles.btnNewGame}>
          <Button title="Start new game?" onPress={() => handleBackHome()} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#50d890",
    alignItems: "center",
    justifyContent: "center",
  },
  congratulate: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
  name: {
    fontSize: 30,
    textAlign: "center",
  },
  btnNewGame: {
    marginVertical: 50,
  },
});

export default Finish;
