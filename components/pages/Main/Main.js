import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./../../../recoil/Global";
import { View, FlatList, Text, Button } from "react-native";
import api from "./../../../config/Api";
// import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 5% 0;
`;

const ContainerText = styled.Text`
  font-size: 18px;
  color: gray;
  padding: 5%;
`;

const ContainterHead = styled.Text`
  padding: 5%;
  font-size: 40px;
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

const App = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        shoWNavs={ture}
        />
    </div>
  );
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
      <ContainterHead>김재환님</ContainterHead>
      <ContainerText>오늘 일정은 어떠셨나요</ContainerText>
      <FlexDemo></FlexDemo>
    </Container>
  );
};

export default Main;
