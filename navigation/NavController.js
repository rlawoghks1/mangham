import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { NavigationContainer } from "@react-navigation/native";
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';
import { isLoggedInState } from './../recoil/Global';
import LogedInNav from "./LogedInNav";
import LoginNav from "./LoginNav";

const Container = styled.View`
    flex : 1;
    background-color : #F2F2F2;
`

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

    return (
        <Container>
            <NavigationContainer >
                {isLoggedIn?.islogin ?
                    <LogedInNav /> :
                    <LoginNav />
                }
            </NavigationContainer>
        </Container>
    )

}