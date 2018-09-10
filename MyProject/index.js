import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import App from './App';
import App1 from './screens/com1';
import App2 from './screens/com2';
import App3 from './screens/com3';

const App = StackNavigator({
    'Main':{ screen: App1 },
    'Detail':{ screen: App2 },
    'Third':{ screen: App3}
});


AppRegistry.registerComponent('MyProject', () => App);
 