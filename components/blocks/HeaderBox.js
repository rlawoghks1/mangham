import React from "react";
import styled from "styled-components";
const Container = styled.View`
  width: 100%;
  height: ${(props) => (props.isAndroid ? "80px" : "90px")};
  padding-top: ${(props) => (props.isAndroid ? "40px" : "50px")};
  background-color: rgba(196, 196, 196, 0.2);
  flex-direction: row;
`;

const HeaderCenterView = styled.View`
  width: 60%;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderSideView = styled.TouchableOpacity`
  width: 20%;
  height: 30px;
  flex-direction: row;
  align-items: center;
`;

const HeaderBox = ({ 
  headerLeft,
  headerRight,
  children
  }) => {

  return (
    <Container isAndroid={Platform.OS == "android"}>
      {headerLeft ? 
      headerLeft :
        <HeaderSideView></HeaderSideView>
      }
      <HeaderCenterView>
       {
         children 
       }
      </HeaderCenterView>
      {headerRight ? 
      headerRight :
        <HeaderSideView></HeaderSideView>
      }
    </Container>
  );
};
export default HeaderBox;