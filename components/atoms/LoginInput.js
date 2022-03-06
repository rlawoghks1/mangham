import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "./../hooks/useSize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TextInput = styled.TextInput`
  width: ${constants.width / 1.7}px;
  height: 60px;  
  font-size : 20px;
  margin-left: 10px;
`;


const Container = styled.View`
  margin-left : 40px;
  margin-right : 40px;
  width : ${constants.width - 80}px;
  border-radius:10px; 
  height: 60px;
  background-color : white;
  justify-content: center;
  `
const LoginIcon = styled.View`
  justify-content: center;
  width: 40px;
  align-items: center;
`

const RowBox = styled.View`
  flex-direction: row;
  height: 50px;
 
  `


const LoginInput = ({
  placeholder,
  value,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  onChange,
  autoCorrect = true,
  secureTextEntry = false,
  focus = false,
  icon,
  onEnter,
  loc
}) => {

  state = { isFocused: false };
  const [isFocused, setIsFocused] = useState(false);

  onFocusChange = () => {
    setIsFocused(true);
  }

  return (
    <Container
      style={isFocused ? {
        borderBottomWidth: 2,
        borderBottomColor: '#DA0011'
      } : {
          borderBottomWidth: 2,
          borderBottomColor: 'black'
        }}>
      <RowBox>
        <LoginIcon>
          <MaterialCommunityIcons
            name={icon}
            size={30}
            color="#454955"
          />
        </LoginIcon>
        <TextInput
          ref={loc}
          allowFontScaling={false}
          onChangeText={onChange}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={onEnter}
          autoCorrect={autoCorrect}
          value={value}
          secureTextEntry={secureTextEntry}
          onFocus={onFocusChange}
          onBlur={() => setIsFocused(false)}
        />
      </RowBox>
    </Container >
  )
};

LoginInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad"
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  onChange: PropTypes.func.isRequired,
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  onSubmitEditing: PropTypes.func,
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  secureTextEntry: PropTypes.bool
};

export default LoginInput;