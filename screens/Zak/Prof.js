import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
//icons
import Logo from '../../assets/Icons/Logo';
import Left from '../../assets/Icons/Left';
import LogoLight from '../../assets/Icons/LogoLight';

 
//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Prof({ navigation }) {


  var id = localStorage.getItem('id');
  const [name, setName] = React.useState('');
  const [rating, setRating] = React.useState('');

  const exit = () => {
    EventRegister.emit('user', 0);
    localStorage.setItem('user', 0);
    localStorage.setItem('id', 0);
  }

  const fetser = () => { 
    fetch('https:/trackcom.ru/api/user.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setName(json[0].name);
        setRating(json[0].rating);
      } else {
        setData(null);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    fetser();
  }, []);


  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#fff', width: '100%'}}>
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
                    <View>
                        <Text style={{marginTop: 60, fontSize: 2.7*vw, fontWeight: '800'}}>{name}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={{color: '#000', fontSize: 1.1*vw}}>Рейтинг: {rating}</Text>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: '#f0f0f0', marginTop: 40, marginBottom: 40}}></View>
                <TouchableOpacity onPress={() => exit()}>
                  <Text style={{fontSize: 1.2*vw, color: '#ff0000'}}>Выйти</Text>
                </TouchableOpacity>
                <View style={{marginTop: 60}}>
                  <Text style={{color: '#000', fontSize: 2*vw, fontWeight: '800'}}>Информация для перевозчиков</Text>
                </View>
                <View style={{ marginTop: 40, width: '100%', borderRadius: 20}}>
                  <Text style={{color: '#000', fontSize: 1*vw, lineHeight: 25}}>Какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст</Text>
                </View>
            </View>
        </View>
        <View style={{bottom: 0, zIndex: 0, marginTop: 80, marginLeft: 100, marginRight: 100, paddingTop: 40, paddingBottom: 40, borderTopWidth: 2, borderTopColor: '#F9F9F9'}}>
          <View>
            <Logo />
            <Text style={{marginTop: 30, color: '#000', fontSize: 0.8*vw}}>Все права защищены © 2021</Text>
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
