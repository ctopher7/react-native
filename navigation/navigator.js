import { Navigation } from "react-native-navigation";
import HomeStack,{HomeStackSettings} from './HomeStack'
import GroupStack,{GroupStackSettings} from './GroupStack'
import ChatStack,{ChatStackSettings} from './ChatStack'
import ProfileStack,{ProfileStackSettings} from './ProfileStack'

export default async function RootNavigator(){
    HomeStack()
    GroupStack()
    ChatStack()
    ProfileStack()
    Navigation.setRoot({
        root: {
            bottomTabs:{
                children:[
                    await HomeStackSettings(),
                    await GroupStackSettings(),
                    await ChatStackSettings(),
                    await ProfileStackSettings()
                ],
                options: {
                    bottomTabs: {
                        backgroundColor: 'white',
                        titleDisplayMode: 'alwaysHide',
                    },
                },
            }
        }
    })
}