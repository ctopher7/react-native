import { Navigation } from "react-native-navigation"
import App from '../screens/GroupStack/Main'
import {TabBarIcon} from '../utils/TabBarIcon'

export default function(){
    Navigation.registerComponent(`GroupStack.Main`,  () =>  App);
}

export const GroupStackSettings =async()=>{
    return{
        stack:{
            children:[{
                component:{
                    name:'GroupStack.Main'
                }
            }
            ],
            options: {
                bottomTab: {
                    text: 'Group',
                    icon: await TabBarIcon('Feather','users',25),
                    selectedIconColor:'black'
                }
            }
        }
    }
}
