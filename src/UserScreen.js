import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ParseUtil from "./data/ParseUtils";
import { observer, inject } from "mobx-react/native";

@inject("appStore")
@observer
class UserScreen extends React.Component {

	constructor(){
		super();

		this.state = {mat: []};
	}

	async componentDidMount(){
		let p = this.props.appStore.parse;
		let liveQuery = new p.Query('MatrixData');
		let mat = [];
		let res = await liveQuery.find();
			res.forEach(element => {
				let txt = element.get('text');
				mat.push({txt});
				// console.log(element);
			});
		console.log(mat);

		this.setState({mat});
	}
	
  render() {
		console.log(this.state.mat.length);
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No user was defined!");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{`Name of the user: ${name}`}</Text>
				{this.state.mat.map((d, i) => {
					console.log(d);
				return (<Text key={i}>{d.txt}</Text>);
				})}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default UserScreen;
