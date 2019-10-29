import { Navigation } from "react-native-navigation";
import Navigator from './navigation/navigator'

Navigation.events().registerAppLaunchedListener(() => {Navigator()})