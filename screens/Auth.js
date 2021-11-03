import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, AsyncStorage, Text, Alert, TouchableOpacity, TextInput, View, Image } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'

//icons
import Logo from '../assets/Icons/Logo';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Auth({ navigation }) {

  const [text, onChangeText] = React.useState();
  const [password, setPass] = React.useState();


  const fetser = () => { 
    if (text == null){
        alert('Введите номер телефона');
    } else {
        if (password != null) {
            fetch('https:/trackcom.ru/api/auth/auth.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tel: text,
                    code: password,
                })
            }).then((response) => response.json())
            .then((json) => {
              if (json != null) {
                EventRegister.emit('user', json[0].status);
                localStorage.setItem('user', json[0].status);
                localStorage.setItem('id', json[0].id);
              } else {
                alert('Неправильный логин или пароль');
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
            alert('Введите пароль');
        }
    }
  }

  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ height: windowHeight, paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#fff', width: '50%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Logo />
                </TouchableOpacity>
                <View>
                    <Text style={{marginTop: 100, fontSize: 2.7*vw, fontWeight: '800'}}>Авторизация</Text>
                </View>
                <View style={{marginTop: 50}}>
                    <TextInput
                      onChangeText={onChangeText}
                      value={text}
                      style={{width: '100%', borderRadius: 10, backgroundColor: '#f9f9f9', fontSize: 0.9*vw, padding: 20}}
                      placeholder="Номер телефона"
                      placeholderTextColor="gray"
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <TextInput
                      onChangeText={setPass}
                      value={password}
                      style={{width: '100%', borderRadius: 10, backgroundColor: '#f9f9f9', fontSize: 0.9*vw, padding: 20}}
                      placeholder="Пароль"
                      secureTextEntry={true}
                      placeholderTextColor="gray"
                    />
                </View>
                <View style={{marginTop: 40}}>
                  <TouchableOpacity onPress={() => fetser()} style={{ padding: 1*vw, borderRadius: 10, backgroundColor: '#000', width: '40%'}}>
                    <Text style={{color: '#fff', fontSize: 1*vw, textAlign: 'center'}}>Войти</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 40}}>
                  <TouchableOpacity style={{ width: '40%'}}>
                    <Text style={{color: '#000', fontSize: 0.8*vw }}>Забыли пароль ? Восстановите</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: windowHeight, paddingTop: 70, backgroundColor: '#1e1e1e' }}>
                <View style={{marginTop: 150}}>
                    <Image source={require('../assets/track.png')} style={{width: 50*vw, height: 30*vw}} />
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
