import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image } from 'react-native';

//icons
import Logo from '../assets/Icons/Logo';
import Left from '../assets/Icons/Left';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Politic({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ height: windowHeight, paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#fff', width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', width: '15%' }}>
                    <Left />
                    <Text style={{marginLeft: 30, color: '#000', fontSize: 1*vw}}>На главную</Text>
                  </TouchableOpacity>
                  <View>
                    <Logo />
                  </View>
                </View>
                <View>
                    <Text style={{marginTop: 60, fontSize: 2.7*vw, fontWeight: '800'}}>Политика конфиденциальности</Text>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
