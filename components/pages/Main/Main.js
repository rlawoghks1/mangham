import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./../../../recoil/Global";
import { View, FlatList, Text, Button, StyleSheet,Image } from "react-native";
import api from "./../../../config/Api";

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 5% 0;
`;

const ContainterHead = styled.Text`
  padding: 20px 0 0 20px;
  font-size: 24px;
`;

const ContainerText = styled.Text`
  font-size: 14px;
  color: gray;
  padding: 10px 0 0 20px;
`;

const Image1 = styled.View`
  width: 60%;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  margin-top : 5px;
  position : relative;
`;

const BackImageView = styled.ImageBackground`
  width: 250px;
  height: 60px;
  flex-direction: column;
`;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

// const Image2 = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={require("./../../assets/stew.png")}
//       />
//       <Image
//         style={styles.tinyLogo}
//         source={require("./../../assets/store.png")}
//       />
//       <Image
//         style={styles.logo}
//         source={require("./../../assets/cafe.png")}
//       />
//     </View>
//   );
// }


const Flexbox = () => {
  return (
    <View style={{ marginTop: 10, height: 10}}>
      <View style={{ flex: 1, backgroundColor: '#c4c4c4'}} />
    </View>

  )
}

const Demobox = () => {
  return (
    <View style={{ height: 30}}>
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

  const RenderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  const Stew = () => {
    return (
      <View style={styles.container}>
        <Image
          style={{
            borderColor: "gray",
            borderWidth: 1,
            height: 100,
            width: 100
          }}
          source={require("./../../../assets/stew.png")}
        />
      </View>
    );
  }
  // statusBar.setBackgroundColor("transparent");
  // statusBar.setTranslucent(true);
  // statusBar.setBarstyle("dark-content");
  const RebornText = () => {
    return (
      <Container>
        <BackImageView />
      </Container>
    )
  }



  return (
    <Container>
      <ContainterHead>김재환님</ContainterHead>
      <ContainerText>오늘 일정은 어떠셨나요</ContainerText>
      <Flexbox></Flexbox>
      <Image1>
        <BackImageView source={require("./../../../assets/reborn.png")} resizeMode="stretch"/>
        <Text> 오늘 일정은?</Text>
        </Image1>
      <ContainerText> 저녁 식사 준비하기</ContainerText>
        <View 
      style={{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
      }}
    >
      <View 
      
      // <Stewimage source={require("./../../../assets/reborn.png")} resizeMode="stretch"/>
        style={{
          backgroundColor:"green",
          width:80,
          height:80,
        }}
      /> 
      <View 
        style={{
          backgroundColor:"gold",
          width:80,
          height:80,
        }}
      /> 
      <View 
        style={{
          backgroundColor:"tomato",
          width:80,
          height:80,
        }}
      /> 
    </View>
    <Demobox></Demobox>
    
    </Container>
  );
};


export default Main;
