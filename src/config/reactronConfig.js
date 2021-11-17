import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Reactotron, {
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let scriptHostname = '';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;

  // eslint-disable-next-line no-unused-vars
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const reactotron = Reactotron.configure({
  name: 'Plates',
  // host: scriptHostname,
}) // controls connection & communication settings
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .useReactNative()
  .use(openInEditor())
  .use(trackGlobalErrors()) // add all built-in react native plugins
  .use(reactotronRedux()) //use the reactotron redux plugin
  .use(sagaPlugin()) //use the reactotron saga plugin
  .connect(); // let's connect!

Reactotron.clear();

console.tron = Reactotron;

export default reactotron;
