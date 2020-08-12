import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoards,
  getSolve,
  getValidate,
  setLeaderboards
} from "../store/actions/boardsAction";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const Board = ({ level, userName }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { boards, status, solution } = useSelector(
    (state) => state.boardReducer
  );
  const [stateBoards, setStateBoards] = useState([]);

  useEffect(() => {
    if (status) {
      if (status == "unsolved") {
        console.log("unsolved");
      } else if (status == "solved") {
        dispatch(setLeaderboards(userName))
        navigation.navigate("Finish", { userName });
      } else if (status == "broken") {
        alert("Youre still wrong, please check again");
      }
    }
  }, [status]);

  useEffect(() => {
    dispatch(getBoards(level));
  }, [dispatch]);

  useEffect(() => {
    setStateBoards(JSON.parse(JSON.stringify(boards)));
  }, [boards]);

  useEffect(() => {
    if (solution.length > 0) {
      setStateBoards(JSON.parse(JSON.stringify(solution)));
    }
  }, [solution]);

  const handleOnchange = (val, rowIdx, colIdx) => {
    const newBoards = [...stateBoards];
    newBoards[rowIdx][colIdx] = Number(val);
    setStateBoards(newBoards);
  };

  const handleSolve = (solvedBoards) => {
    dispatch(getSolve(solvedBoards));
  };

  const handleValidate = (validateBoard) => {
    dispatch(getValidate(validateBoard));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.userNameStyle}>{userName}</Text>
          <Text style={styles.textDefault}>is Trying to solve</Text>
          <Text style={styles.textLevel}>{level} level</Text>
        </View>
        {stateBoards.length > 1 &&
          stateBoards.map((rows, rowIdx) => {
            return (
              <View key={rowIdx} style={styles.row}>
                {rows.map((col, colIdx) => {
                  return (
                    <TextInput
                      keyboardType="numeric"
                      key={colIdx}
                      style={styles.col(boards, rowIdx, colIdx)}
                      maxLength={1}
                      defaultValue={col === 0 ? "" : String(col)}
                      editable={boards[rowIdx][colIdx] > 0 ? false : true}
                      onChangeText={(val) =>
                        handleOnchange(val, rowIdx, colIdx)
                      }
                    />
                  );
                })}
              </View>
            );
          })}
        <View style={styles.btnInBoard}>
          <View style={styles.btnValidate}>
            <Button
              color="#84a9ac"
              title="Validate"
              onPress={() => handleValidate(stateBoards)}
            />
          </View>
          <View style={styles.btnSolve}>
            <Button
              color="#d9adad"
              title="Give Up"
              onPress={() => handleSolve(boards)}
            />
          </View>
        </View>
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
    height: windowWidth / 9,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  col: (boards, rowIdx, colIdx) => ({
    backgroundColor: boards[rowIdx][colIdx] !== 0 ? "#fbd46d" : "white",
    borderWidth: 1,
    width: (windowWidth - 80) / 9,
    height: (windowWidth - 80) / 9,
    textAlign: "center",
    borderLeftWidth: colIdx == 0 ? 3 : 1,
    borderRightWidth: colIdx == 8 || (colIdx + 1) % 3 == 0 ? 3 : 1,
    borderTopWidth: rowIdx == 0 ? 3 : 1,
    borderBottomWidth: rowIdx == 8 || (rowIdx + 1) % 3 == 0 ? 3 : 1,
  }),
  btnInBoard: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  btnSolve: {
    marginHorizontal: 5,
  },
  btnValidate: {
    marginHorizontal: 5,
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  textDefault: {
    color: "white",
    marginHorizontal: 8,
    fontSize: 20,
  },
  userNameStyle: {
    color: "#fbd46d",
    fontSize: 20,
  },
  textLevel: {
    color: "black",
    fontSize: 20,
  },
});

export default Board;
