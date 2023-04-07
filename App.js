import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from ''
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First_screen from './screens/first_screen';
import Second_screen from './screens/second_screen';
import Third_screen from './screens/third_screen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator 
          initialRouteName="FirstScreen"
          >
         <Stack.Screen name="FirstScreen" component={First_screen}
         options={{ title: '' }}
         />
         <Stack.Screen name="SecondScreen" component={Second_screen} 
         options={{ title: '' }}
         />
         <Stack.Screen name="ThirdScreen" component={Third_screen} 
         options={{ title: '' }}
         />
         </Stack.Navigator>
     </NavigationContainer>

    
    //     
    //     

    //   
    // <View style={styles.container}>
    //   <Text>on your app!</Text>
    //   <First_screen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
