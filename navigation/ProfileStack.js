import { Navigation } from "react-native-navigation"
import App from '../screens/ProfileStack/Main'
import {TabBarIcon} from '../utils/TabBarIcon'

export default function(){
    Navigation.registerComponent(`ProfileStack.Main`,  () =>  App);
}

export const ProfileStackSettings =async()=>{
    return{
        stack:{
            children:[{
                component:{
                    name:'ProfileStack.Main'
                }
            }
            ],
            options: {
                bottomTab: {
                    text: 'Profile',
                    icon: await TabBarIcon('Feather','user',25),
                    selectedIconColor:'black'
                }
            }
        }
    }
}
