import { Navigation } from "react-native-navigation"
import App from '../screens/ChatStack/Main'
import {TabBarIcon} from '../utils/TabBarIcon'

export default function(){
    Navigation.registerComponent(`ChatStack.Main`,  () =>  App);
}

export const ChatStackSettings =async()=>{
    return{
        stack:{
            children:[{
                component:{
                    name:'ChatStack.Main'
                }
            }
            ],
            options: {
                bottomTab: {
                    text: 'Chat',
                    icon: await TabBarIcon('Feather','message-square',25),
                    selectedIconColor:'black'
                }
            }
        }
    }
}
