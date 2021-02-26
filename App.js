import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from "./src/screens/SearchScreen";

    const screens = {
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: 'Business Search',
                //headerStyle: { backgroundColor: '#eee' }
            }
        }
    };

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default createAppContainer(HomeStack);
