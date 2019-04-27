// App.js - WEB
import React, { Component } from "react";
import { View } from "react-native";
import WebRoutesGenerator from "./NativeWebRouteWrapper";
import { ModalContainer } from "react-router-modal";
import HomeScreen from "./HomeScreen";
import TopNav from "./TopNav";
import SecondScreen from "./SecondScreen";
import UserScreen from "./UserScreen";
import DasModalScreen from "./DasModalScreen";
const Parse = require('parse');

const routeMap = {
  Home: {
    component: HomeScreen,
    path: "/",
    exact: true
  },
  Second: {
    component: SecondScreen,
    path: "/second"
  },
  User: {
    component: UserScreen,
    path: "/user/:name?",
    exact: true
  },
  DasModal: {
    component: DasModalScreen,
    path: "*/dasmodal",
    modal: true
  }
};

class App extends Component {
	constructor(){
		super();

		Parse.initialize('R498Vf88BbLf01HwK45KGUzHpoMvXhhreR0iHulu', 'Wo2Lm7StDNy8sBG2WwU5GTamJYj0Rw2iWVr6LMMX');
		Parse.serverURL = 'https://backtoharmony.back4app.io';

		let liveQuery = new Parse.Query('MatrixData');
		let results = liveQuery.find().then(res  => {
			console.log(res);
		})
		console.log(Parse);
	}
  render() {
    return (
      <View style={{ height: "100vh", width: "100vw" }}>
        <TopNav />
        {WebRoutesGenerator({ routeMap })}
        <ModalContainer />
      </View>
    );
  }
}

export default App;
