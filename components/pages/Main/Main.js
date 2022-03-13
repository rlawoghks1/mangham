import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./../../../recoil/Global";
import { View, FlatList, Text, Button } from "react-native";
import api from "./../../../config/Api";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  flex-direction: column;
  margin-top: 30px
`;

const ContainerText = styled.Text`
  padding-top: 10px;
  font-size: 12px;
  color: gray;
`;

const ContainterHead = styled.Text`
  padding-top: 50px;
  font-size: 20px;
`;

const FlexDemo = () => {
  return (
    <View style={{ marginTop: 30, height: '3%'}}>
      <View style={{ flex: 1, backgroundColor: '#c4c4c4'}} />
    </View>

  )
}

// const ImageBackground = Styled.ImageBackground`
//     flex: 1;
//     height: 100%;
//     weight: 100%;
//     opacity: 0.8;
// `;

const Main = ({ navigation, route }) => {
  const [loginState, setLoginState] = useRecoilState(isLoggedInState);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    try {
      const { data, status } = await api.getUserAll("");
      if (status == "200") {
        setData(data);
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.warn(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );


  // statusBar.setBackgroundColor("transparent");
  // statusBar.setTranslucent(true);
  // statusBar.setBarstyle("dark-content");
  
  return (
    <Container>
      <ContainterHead>김재환</ContainterHead>
      <ContainerText>님</ContainerText>
      <ContainerText>오늘 일정은 어떠셨나요</ContainerText>
      <FlexDemo></FlexDemo>
    </Container>
  );
};

export default Main;
