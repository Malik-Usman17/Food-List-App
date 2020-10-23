// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import FoodForm from './src/screens/FoodForm';
// import FoodList from './src/screens/FoodList';
// import MainScreen from './src/screens/MainScreen';

// const navigator = createStackNavigator(
//   {
//     Food: FoodForm,
//     FoodL: FoodList,
//     Main: MainScreen
//   },
//   {
//     initialRouteName: 'Main',
//     defaultNavigationOptions: {
//       title: 'FoodListApp'
//     }
//   }
// );

// export default createAppContainer(navigator);


import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FoodForm from './src/screens/FoodForm';
import FoodList from './src/screens/FoodList';

const AppStack = createStackNavigator({
  FoodForm: FoodForm,
  FoodList: FoodList
});

export default createAppContainer(AppStack);