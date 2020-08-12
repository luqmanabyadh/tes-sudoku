import React, { useState, useEffect } from "react";
import CountDown from "react-native-countdown-component";
import { Text } from "react-native";

const MyCountdown = ({ level }) => {
  const [timerLevel, setTimerLevel] = useState(0);

  useEffect(() => {
    switch (level) {
      case "easy":
        return setTimerLevel(1800);
      case "medium":
        return setTimerLevel(900);
      case "hard":
        return setTimerLevel(300);
      case "random":
        return setTimerLevel(1000);
    }
  }, [level]);

  if (timerLevel === 0) {
    return <Text>Loading</Text>;
  }

  return (
    <CountDown
      size={25}
      until={timerLevel}
      onFinish={() => alert("Finished")}
      digitStyle={{
        backgroundColor: "#fbd46d",
        borderWidth: 1,
        borderColor: "#black",
      }}
      digitTxtStyle={{ color: "black" }}
      timeLabelStyle={{ color: "red", fontWeight: "bold" }}
      separatorStyle={{ color: "#1CC625" }}
      timeToShow={["H", "M", "S"]}
      timeLabels={{ m: null, s: null }}
      showSeparator
    />
  );
};

export default MyCountdown;
