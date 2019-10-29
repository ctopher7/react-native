import {Navigation} from 'react-native-navigation'

export const NavigatePush=(prop,screenName)=>{
    Navigation.push(prop, {
        component: {
            name: screenName
        }
    })
}