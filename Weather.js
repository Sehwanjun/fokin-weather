import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// expo install expo-linear-gradient
import PropTypes from "prop-types";

// 엑스포 문서에서 아이콘 관련 찾아
// https://icons.expo.fyi/MaterialCommunityIcons/brain
// 거기서 만든 회사이름(?) 넣으면 됨
//https://openweathermap.org/weather-conditions

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "what the Haze",
    subtitle: "fuck",
  },
  Thunderstorm: {
    iconName: "",
    gradient: [],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["89F7FE", "#66A6FF"],
    title: "what the Haze",
    subtitle: "fuck",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00c6FB", "#005BEA"],
    title: "what the Haze",
    subtitle: "fuck",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7de2fc", "#B9b6e5"],
    title: "what the Haze",
    subtitle: "fuck",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["89F7fe", "#66a6ff"],
    title: "what the Haze",
    subtitle: "fuck",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["fef253", "#ff7300"],
    title: "what the Haze",
    subtitle: "fuck",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#d7D2cc", "#304352"],
    title: "what the Haze",
    subtitle: "fuck",
  },

  Mist: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39D38"],
    title: "what the Haze",
    subtitle: "fuck",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "D39D38"],
    title: "what the Haze",
    subtitle: "fuck",
  },
};

export default function Weather({ temp, condition }) {
  //text는 temp가 될 것이라 넣어 놓음
  return (
    // <View style={styles.container}>
    // {/* 이건 사이트에서 그대로 따와서 변경한 것 */}
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
      // style={{ padding: 15, alignItems: "center", borderRadius: 5 }} 원래 이거
    >
      {/* 상태바 변경 */}
      <StatusBar barStyle="light-content" />

      <View style={styles.halfContainer}>
        {/* 아이콘 주는 사이트에서 태그명을  이렇게 하라고 함 */}
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}o</Text>
      </View>
      <View style={styles.textContainer}>
        {/* 이게 두 오브젝트를 함께 쓰는 ex6 방식이래 */}

        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        {/* 내용에 들어가는것도 응용하는거라 중괄호 들어가야 한다고 함 */}
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
    // {/* </View> */}
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,

  //weather 사이트에서 code의 name들을 찾은다음에 기재함
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
