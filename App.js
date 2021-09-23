// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/HomeListView/index.js';
import ModelListView from './src/screens/ModelListView/index.js';
import ModelDetailsView from './src/screens/ModelDetailsView/index.js';
import EditModelView from './src/screens/EditModelView/index.js';
import HeaderLeftButton from './src/sharedComponents/HeaderLeftButton.js';
import {Provider} from 'react-redux';
import store from './src/store/index.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#DEDEDE',
              }
            }}
          />
          <Stack.Screen
            name="Model"
            component={ModelListView}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: '#DEDEDE',
              },
              headerLeft: () => (
                <HeaderLeftButton />
              ),
            })}
          />
          <Stack.Screen
            name="Model Details"
            component={ModelDetailsView}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: '#DEDEDE',
              },
              headerLeft: () => (
                <HeaderLeftButton />
              ),
            })}
          />
          <Stack.Screen
            name="Edit"
            component={EditModelView}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: '#DEDEDE',
              },
              headerLeft: () => (
                <HeaderLeftButton />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
