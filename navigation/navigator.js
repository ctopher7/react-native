import { Navigation } from "react-native-navigation";
import HomeStack,{HomeStackSettings} from './HomeStack'

export default function RootNavigator(){
    HomeStack()
    Navigation.setRoot({
        root: {
            bottomTabs:{
                children:[
                    HomeStackSettings
                ]
            }
        }
    })
}