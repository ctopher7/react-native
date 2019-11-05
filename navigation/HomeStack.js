import { Navigation } from "react-native-navigation";
import App from '../screens/HomeStack/Main';
import Detail from '../screens/HomeStack/Detail';
import {TabBarIcon} from '../utils/TabBarIcon'

export default function(){
    Navigation.registerComponent(`HomeStack.Main`,  () =>  App);
    Navigation.registerComponent(`HomeStack.Detail`, () => Detail);
}

export const HomeStackSettings =async()=>{
    return{
        stack:{
            children:[{
                component:{
                    name:'HomeStack.Main'
                }
            }
            ],
            options: {
                bottomTab: {
                    text: 'Home',
                    icon: await TabBarIcon('Feather','home',25),
                    selectedIconColor:'black'
                }
            }
        }
    }
}
