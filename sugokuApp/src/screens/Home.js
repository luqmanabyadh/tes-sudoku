import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button,
  Text,
  Picker,
  Alert,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [selectedValue, setSelectedValue] = useState("easy");

  const handleInputUserName = (text) => {
    setUserName(text);
  };

  const handleStart = () => {
    if (userName === "") {
      alert("Please fill ur name");
    } else {
      navigation.navigate("Game", { userName, level: selectedValue });
      setUserName("");
      setSelectedValue("easy");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SUDOKU GAME</Text>
      <Text style={styles.greetings}>Your name</Text>
      <TextInput
        style={styles.inputForm}
        onChangeText={(text) => handleInputUserName(text)}
        value={userName}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.difficulties}>Select difficulties :</Text>
        <Picker
          selectedValue={selectedValue}
          style={[styles.picker]}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Random" value="random" />
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
      </View>
      <View style={styles.btn}>
        <Button color="#52de97" title="Start!" onPress={() => handleStart()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
    backgroundColor: "#fbd46d",
  },
  inputForm: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    height: 25,
    width: "50%",
    borderRadius: 40,
    backgroundColor: "#eeeeee",
    textAlign: "center",
  },
  btn: {
    alignSelf: "center",
    borderRadius: 80,
    color: "white",
  },
  picker: {
    height: 30,
    width: 85,
    backgroundColor: "white",
    alignSelf: "center",
    marginVertical: 20,
    color: "#2c7873",
    borderRadius: 20,
  },
  greetings: {
    color: "#2c7873",
    marginVertical: 10,
    fontSize: 20,
  },
  difficulties: {
    color: "#2c7873",
    fontSize: 20,
    marginTop: 23,
    marginRight: 10,
  },
  title: {
    fontSize: 50,
    color: "#2c7873",
    backgroundColor: "#52de97",
    padding: 20,
    borderRadius: 20,
  },
});

export default Home;
