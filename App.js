import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import NavController from "./navigation/NavController";
import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        NanumSquareB: require("./assets/fonts/NanumSquareB.otf"),
      });
      await Asset.loadAsync([require("./assets/icon.png")]);      
      setLoaded(true);
    } catch (e) {}
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <>
        <StatusBar translucent={true} />
        <RecoilRoot>
          <NavController />
        </RecoilRoot>
    </>
  ) : (
    <AppLoading />
  );
};

export default App;
