import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/HomeScreen';
import DetailsScreen from './src/Screens/DetailsScreen';

import Variables from './src/ModuleOne/Variables';
import DataTypes from './src/ModuleOne/DataTypes';
import Function from './src/ModuleOne/Function';
import Hooks from './src/ModuleOne/Hooks';
import Chaining from './src/ModuleOne/Chaining';
import CounterApp from './src/ModuleOne/CounterApp';
import Inline from './src/ModuleTwo/CssTypes/Inline';
import Internal from './src/ModuleTwo/CssTypes/Internal';
import External from './src/ModuleTwo/CssTypes/External';
import ScrollViewComponent from './src/ModuleTwo/ScrollViewComponent';
import FlatListComponent from './src/ModuleTwo/FlatListComponent';
import FlatlistInsideScrollView from './src/ModuleTwo/FlatlistInsideScrollView';
import ActivityIndicatorComponent from './src/ModuleTwo/ActivityIndicatorComponent';
import SortComponent from './src/ModuleOne/SortComponent';
import FliterComponent from './src/ModuleOne/FliterComponent';
import ModelComponent from './src/ModuleTwo/ModelComponent';
import ImageComponent from './src/ModuleTwo/ImageComponent';
import BackgroundImage from './src/ModuleTwo/BackgroundImage';
import ModalImageCoomponent from './src/ModuleTwo/ModalImageCoomponent';
import InputComponent from './src/ModuleTwo/InputComponent';
import AudioComponent from './src/ModuleTwo/AudioComponent';
import SwitchandChecbox from './src/ModuleTwo/SwitchandChecbox';
import PropsDisplay from './src/PropsDisplay';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* ModuleOne */}
      {/* <DataTypes /> */}
      {/* <Variables /> */}
      {/* <Function /> */}
      {/* <Hooks /> */}
      {/* <Chaining /> */}
      {/* <Conditons /> */}
      {/* <CounterApp /> */}
      {/* <SortComponent /> */}
      {/* <FliterComponent /> */}
      {/* ModuleTwo */}
      {/* <Inline /> */}
      {/* <Internal /> */}
      {/* <External /> */}
      {/* <ResponsiveCss /> */}
      {/* <ScrollViewComponent /> */}
      {/* <FlatListComponent /> */}
      {/* <FlatlistInsideScrollView /> */}
      {/* <ActivityIndicatorComponent /> */}
      {/* <ModelComponent /> */}
      {/* <ImageComponent /> */}
      {/* <BackgroundImage /> */}
      {/* <ModalImageCoomponent /> */}
      {/* <InputComponent />  <AudioComponent /> */}
      {/* <SwitchandChecbox /> */}
      <PropsDisplay />
      {/* <Text>Hello World</Text> */}
    </View>
  );
};

export default App;

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
