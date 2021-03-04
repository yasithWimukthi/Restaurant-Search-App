import {createAppContainer,createStackNavigator} from 'react-navigation';

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultShow: ResultsShowScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions :{
            title : 'Business Search'
        }
    }
);


export default createAppContainer(navigator);
