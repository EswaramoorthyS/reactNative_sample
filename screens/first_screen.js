import React, { Component, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements'


function First_screen({ navigation }) {
  const [number, setNumber] = useState('');
  const [isBtnEnable, setIsBtnEnable] = useState(false);

  const onChangeNo = (no) => {
    setNumber(no)
    if (no.length > 9) {
      setIsBtnEnable(true)
    }
  }
  return (
    <View style={{ backgroundColor: 'seashell' }}>

      <View style={{ padding: 20 }}>
        <Text
          style={styles.startText}
        > Getting Started </Text>
        <TextInput
        maxLength={10}
          style={styles.input}
          onChangeText={(no) => onChangeNo(no)}
          placeholder='Enter Mobile Number'
        />
        <View style={{
          padding: 10,
        }}>
          <Button style={[styles.btn, { color: 'green', fontSize: 50 }]}
            title="Continue!"
            disabled={!isBtnEnable}
            onPress={() => {
              navigation.navigate('SecondScreen', {
                num: number
              })
            }
            }
          >
          </Button>
        </View>
        <Text>Or Contact with</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          justifyContent: 'space-around'
        }}>
          <View style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderRadius: 5,
            alignItems: 'center',
            borderColor: 'green',
            color: 'green'
          }}>
            <SocialIcon
              type='whatsapp'
              color='white'
              iconSize={10}
              style={{fontSize:10}}
            />
            <Text style={{
              padding: 5, color: 'green'
            }}>Whatsapp</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderRadius: 5,
            alignItems: 'center',
            borderColor: 'green',
            color: 'green'
          }}>
            <SocialIcon
              type='google'
              color='white'
              iconSize={10}
            />
            <Text style={{
              padding: 5, color: 'green'
            }}>Google</Text>
          </View>


        </View>
        <Text style={{ fontSize: 14 }}>
          By continuing you agree to out Terms and Policies</Text>
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
    paddingTop: 130,
  },
  btn: {
    padding: 80,
    borderColor: 'red',
    borderWidth: 10,
    fontSize: 30,
    height: 50,
  },
});

export default First_screen;
