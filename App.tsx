// expo init _____
// 두번째꺼 선택(with typescript) 엔터
// Y -> 설치
// 깃허브 github.com / new
//   프로젝트이름입력 & readme 체크
// git remote add origin https://github.com/Sehwanjun/fokin-weather
// git pull origin master--allow - unrelated - histories
// expo start 하면
// 창열리고 앱과 연결시키자(와이파이 동일해야 함)
// ctrl r -> 새로고침 수정으로
// 폰에서 개발자메뉴: 폰 한번 흔들어서
// ctrl d -> expo 개발자 메뉴
// 리엑트네이티브의 규칙
//   < View > 는 < div > 처럼 쓰임
//     < span > 대신 < text >

import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
// expo, 리액트네이티브 사이트에서 APi검색 후에 내가 쓸거 찾아서
// 설치 및 가져오는 방식이다.

const API_KEY = "ceaaf2c080e78958c442d031da859dfb";

export default class extends React.Component {
  // 4. 아래에서 위치정보 가져오는거 해 보고서는 state 작성 시작했다.
  state = {
    isLoading: true,
  };

  //8. 그담에 wether얻는 사이트에서 키 받아와서 작업하기 시작! 끝나고 Weather.js 작업

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    //7. 밑에 작업후에 일단 isLoading만 만들어 놓음(setstate와)
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      //console.log해보면 weather안에 배열로 이루어져 있음 각 날씨가.. 배열의 첫번째 객체가 haze다
      temp,
      //temp: data.main.temp였다.
    });
  };

  getLocation = async () => {
    try {
      // throw Error(); 에러 발생시키는 실험방법
      //1. 일단 geo사이트, 엑스포 사이트에 가서 API 찾아옴
      //2. 실행해보니 먼저 허가를 받아야 한다고 경고창이 뜸
      //3. 그래서 permissionAsync 이거를 찾아서 넣음 - 허가까진 기다려야 함
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //send to API 그래서 날씨를 가져올거임
      // console.log(location)을 해서보면
      // Object: {"coords": Object{"accuracy: 5, "latitude": 23.291, "longitude: 21.e" }}
      // 이렇게 나와있다. 그렇기때문에 그걸 따라서 const {coords:{lati~~}} 이렇게 하는 것
      //즉, location 객체 안에 coords 객체가 있어서 바로 그 객체를 딸라면 const {coords}= 이렇게..
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
      //허가를 승인 안할 경우엔 에러나올수 있기때문에 이렇게 잡아주는 것이다.
    }
  };

  // 0. 이걸 일단 젤 먼저 작성함
  componentDidMount() {
    this.getLocation();
  }

  // 6. state한 담에 이거 틀을 만들어 놓음 isLoading/():() 이거..
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}

// 컴포넌트 이름 굳이 안써도 됨
