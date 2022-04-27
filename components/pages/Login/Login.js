import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import useInput from "./../../hooks/useInput";
import { Alert } from "react-native";
import AuthButton from "./../../atoms/AuthButton";
import LoginInput from "./../../atoms/LoginInput";
import constants from "./../../hooks/useSize";
import { isLoggedInState } from "./../../../recoil/Global";
import { useRecoilState } from "recoil";
import api from "./../../../config/Api";


const Logo = styled.View`
  width: 60%;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const Content = styled.View`
  margin-top: -100px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ChangeInfo = styled.View`
  width: ${constants.width - 80}px;
  height: 50px;
  flex-direction: row;
  margin-left: 40px;
  margin-right: 40px;
`;

const InviteContentLeft = styled.TouchableOpacity`
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
`;

const InviteText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #8f8f8f;
`;

const Bottom = styled.View`
  position: absolute;
  width: 60%;
  flex-direction: column;
  bottom: 50;
`;

const BackImageView = styled.ImageBackground`
  width: 299px;
  height: 124px;
  flex-direction: column;
`;

const Login = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const loginInput = useInput("");
  const passwordInput = useInput("");
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const dummy = {
    id : "1",
    password : "1"
  }

  async function handleLogin() {
    if (loginInput.value === "") {
      return Alert.alert("아이디를 입력하시오.");
    }
    if (passwordInput.value === "") {
      return Alert.alert("암호를 입력하시오.");
    }
    setIsLoading(true);
    try {
      // const { data, status } = await api.login(
      //   {
      //     password: passwordInput.value,
      //     userid: loginInput.value,
      //   },
      //   ""
      // );

      if (dummy.id === loginInput.value && dummy.password === passwordInput.value) {
        // if (data != "Faild") {
          setIsLoggedIn({
            islogin: true,
            // userid: data[0].id,
            // name: data[0].name,
            userid: loginInput.value,
            name: passwordInput.value,
            token: "",
          });
        } else {
          return Alert.alert("로그인에 실패하였습니다.");
        }
      // }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.warn(e);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "android" ? "height" : "padding"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <Logo>
            <BackImageView source={require("./../../../assets/medienglogo.png")} />
          </Logo>
          <LoginInput
            {...loginInput}
            loc={loginRef}
            icon="account-circle"
            placeholder="아이디"
            keyboardType="default"
            returnKeyType="send"
            autoCorrect={false}
            onEnter={() => {
              passwordRef.current.focus();
            }}
          />
          <LoginInput
            {...passwordInput}
            loc={passwordRef}
            icon="lock"
            placeholder="비밀번호"
            textContentType="password"
            keyboardType="default"
            returnKeyType="send"
            secureTextEntry={true}
            onEnter={() => {
              handleLogin();
            }}
          />


          <Bottom>
            <AuthButton
              onPress={handleLogin}
              text="로그인"
              bgColor={"#813DD9"}
            />
          </Bottom>
        </Content>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

<BackImageView>
<BackImageView source={require("./../../../assets/cafe.jpg")} />
</BackImageView>