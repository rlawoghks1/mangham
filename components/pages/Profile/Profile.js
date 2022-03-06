import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { isLoggedInState } from "./../../../recoil/Global";
import { useRecoilState } from "recoil";
import HeaderBox from "../../blocks/HeaderBox";

const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  flex-direction: column;
`;

const Content = styled.View`
  background-color: #ffffff;
  align-items: center;
  flex: 1;
  padding: 30px;
`;

const ContentHeader = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 0.5px;
  border-color: rgba(117, 117, 117, 0.4);
`;

const HeaderLeft = styled.View`
  width: 60%;
  height: 100%;
  flex-direction: column; ;
`;

const HeaderLeftTop = styled.View`
  width: 100%;
  height: 30px;
  justify-content: center;
`;

const HeaderLeftBottom = styled.View`
  width: 100%;
  height: 25px;
`;

const HeaderNameText = styled.Text`
  font-size: 24px;
  color: #000000;
`;

const HeaderIdText = styled.Text`
  font-size: 15px;
  color: #2d2d2d;
`;

const HeaderRight = styled.View`
  width: 40%;
  height: 100%;
  align-items: flex-end;
`;

const LogOutButton = styled.TouchableOpacity`
  width: 143px;
  height: 41px;
  background-color: #ffffff;
  border-radius: 30px;
  border-color: #219653;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

const LogOutButtonText = styled.Text`
  font-size: 15px;
  color: #219653;
`;

const ContentBody = styled.View`
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: rgba(117, 117, 117, 0.4);
`;

const ContentRow = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentRowLeft = styled.View`
  flex: 1;
  justify-content: center;
`;

const ContentRowLeftText = styled.Text`
  color: #5b5b5b;
  font-size: 16px;
`;

const ContentRowRight = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const CenterRowText = styled.Text`
  font-size: 18px;
  color: black;
`;

const Profile = ({ navigation, route }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Container>
      <HeaderBox>
        <CenterRowText allowFontScaling={false}>설정</CenterRowText>
      </HeaderBox>
      <Content>
        <ContentHeader>
          <HeaderLeft>
            <HeaderLeftTop>
              <HeaderNameText allowFontScaling={false}>
                {isLoggedIn.login}
              </HeaderNameText>
            </HeaderLeftTop>
            <HeaderLeftBottom>
              <HeaderIdText allowFontScaling={false}>
                {isLoggedIn.name}
              </HeaderIdText>
            </HeaderLeftBottom>
          </HeaderLeft>
          <HeaderRight>
            <LogOutButton
              onPress={() =>
                setIsLoggedIn({
                  islogin: false,
                  name: "",
                  passwd: "",
                  userid: 0,
                  token: "",
                })
              }
            >
              <LogOutButtonText allowFontScaling={false}>
                로그아웃
              </LogOutButtonText>
            </LogOutButton>
          </HeaderRight>
        </ContentHeader>

        <ContentBody>
          <ContentRow onPress={() => navigation.navigate("암호")}>
            <ContentRowLeft>
              <ContentRowLeftText allowFontScaling={false}>
                비밀번호 설정
              </ContentRowLeftText>
            </ContentRowLeft>
            <ContentRowRight>
              <AntDesign name="right" size={20} color="#545454" />
            </ContentRowRight>
          </ContentRow>
          <ContentRow>
            <ContentRowLeft>
              <ContentRowLeftText allowFontScaling={false}>
                버전정보
              </ContentRowLeftText>
            </ContentRowLeft>
            <ContentRowRight>
              <ContentRowLeftText allowFontScaling={false}>
                1.0.0
              </ContentRowLeftText>
            </ContentRowRight>
          </ContentRow>
        </ContentBody>
      </Content>
    </Container>
  );
};

export default Profile;
