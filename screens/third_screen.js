import React from 'react';
import { View, Text } from 'react-native';


function Third_screen({ route, navigation }) {
  const { number } = route.params;

  let arr = [];
  arr.push(number);

  return (
    <View style={{ backgroundColor: 'seashell' }}>

      <Text style={{ fontSize: 20, marginLeft: 30, paddingTop: 40 }}>Mobile Number List</Text>
      <View style={{ padding: 30 }}>
        {arr.map(( e) => (
          <View style={{ padding: 15, fontSize: 20, alignItems: 'center', borderWidth: 2, }}>
            <Text key={e}>{e}</Text>
          </View>
        ))}
      </View>
    </View>
  );

}

export default Third_screen;
