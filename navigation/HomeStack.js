import { Navigation } from "react-native-navigation";
import App from '../screens/HomeStack/App';
import Detail from '../screens/HomeStack/Detail';

export default function(){
    Navigation.registerComponent(`HomeStack.Main`, () => App);
    Navigation.registerComponent(`HomeStack.Detail`, () => Detail);
}

export const HomeStackSettings ={
    stack:{
        children:[{
            component:{
                name:'HomeStack.Main'
            }
        }
        ],
        options: {
            bottomTab: {
              text: 'Tab 1',
              icon: require('../assets/icon/cute.png'),
              testID: 'FIRST_TAB_BAR_BUTTON'
            }
        }
    }
}
