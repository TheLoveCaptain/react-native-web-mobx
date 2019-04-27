import {Platform, AsyncStorage} from 'react-native';
const ParseWeb = require('parse');
const ParseNative = require('parse/react-native');

class ParseUtil{
	parse = null;

	constructor(){
		if (Platform.OS === 'web'){
			this.parse = ParseWeb;
		}  else {
			this.parse = ParseNative;
			this.parse.setAsyncStorage(AsyncStorage);
		}
		this.parse.initialize('R498Vf88BbLf01HwK45KGUzHpoMvXhhreR0iHulu', 'Wo2Lm7StDNy8sBG2WwU5GTamJYj0Rw2iWVr6LMMX');
		this.parse.serverURL = 'https://backtoharmony.back4app.io';

	}
}

export default  ParseUtil;