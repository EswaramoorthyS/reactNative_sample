import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


function Second_screen({ route, navigation }) {

  const [isErr, setIsErr] = useState(false);

  const { num } = route.params;
  const onChangeOtp = (no) => {
    if (no == "9999") {
      navigation.navigate('ThirdScreen', {
        id: '2',
        number: num
      })
    } else {
      setIsErr(true)
    }
  }
  return (
    <View style={{ backgroundColor: 'seashell' }}>
      <View style={{ padding: 20 }}>
        <Text
          style={styles.startText}
        > Enter OTP </Text>
        <Text style={{ padding: 10 }}> We have send one time password(OTP) to **** {num.substr(-4)}</Text>

        <TextInput
          style={styles.input}
          onChangeText={(val) => onChangeOtp(val)}
          placeholder='OTP'
        />
        {isErr ? <Text
          style={{ color: "red" }}
        >Please Enter the valid OTP</Text> : null}

        <Text>Resend OTP in 0.15</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,

  },
  startText: {
    color: 'black',
    fontSize: 18,
    paddingTop: 120,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

export default Second_screen;
