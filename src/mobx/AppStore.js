import { observable } from 'mobx';
import ParseUtil from '../data/ParseUtils';

export default class AppStore{
	@observable parse = new ParseUtil().parse;
}