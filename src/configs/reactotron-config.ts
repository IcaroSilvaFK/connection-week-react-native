import Reactotrom from 'reactotron-react-native';
import { NativeModules } from 'react-native';

const { scriptURL } = NativeModules.SourceCode;

const host = scriptURL.split('://')[1].split(':')[0];

Reactotrom.configure({
  name: 'connection week',
  host,
}).useReactNative();

export default Reactotrom;
