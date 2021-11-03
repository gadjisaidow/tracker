import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View } from 'react-native';

//icons
import Logo from '../assets/Icons/Logo';

//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ height: windowHeight, paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#fff', width: '50%'}}>
                <View style={{flexDirection: 'row'}}>
                  <Logo />
                  <TouchableOpacity onPress={() => navigation.navigate('Tech')} style={{marginLeft: 50}}>
                      <Text style={{color: '#000', fontSize: 1*vw}}>Служба поддержки</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Politic')} style={{marginLeft: 50}}>
                      <Text style={{color: '#000', fontSize: 1*vw}}>Политика конфиденциальности</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 50}}>
                  <Text style={{marginTop: 12*vw, fontSize: 2.7*vw, fontWeight: '800'}}>Вы перевозчик ?</Text>
                  <Text style={{marginTop: 30, fontSize: 1*vw}}>Найдите перевозки по вашим параметрам</Text>
                </View>
                <View style={{marginTop: 50}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Auth')}  style={{ padding: 1*vw, borderRadius: 10, backgroundColor: '#000', width: '40%'}}>
                    <Text style={{color: '#fff', fontSize: 1*vw, textAlign: 'center'}}>Найти перевозку</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 150}}>
                  <Text style={{marginTop: 30, fontSize: 1*vw, lineHeight: 20}}>Для поиска или добавления перевозок вам необходимо будет авторизоваться.</Text>
                </View>
            </View>
            <View style={{  height: windowHeight,paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#1e1e1e', width: '50%' }}>
                <View style={{alignItems: 'flex-end'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Regisster')}>
                      <Text style={{color: '#fff', fontSize: 1*vw}}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={{ paddingLeft: 35, paddingRight: 35, borderRadius: 7, backgroundColor: '#fff', marginLeft: 30, paddingTop: 10, paddingBottom: 10 }}>
                      <Text style={{color: '#000', fontSize: 1*vw, fontWeight: '500'}}>Войти</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginTop: 30}}>
                  <Text style={{marginTop: 12*vw, fontSize: 2.4*vw, fontWeight: '800', color: '#fff'}}>Хотите заказать перевозку ?</Text>
                  <Text style={{marginTop: 30, fontSize: 1*vw, color: '#fff'}}>Найдите перевозчика для вашего груза за 2 клика</Text>
                </View>
                <View style={{marginTop: 50}}>
                  <TouchableOpacity style={{ padding: 1*vw, borderRadius: 10, backgroundColor: '#fff', width: '40%'}}>
                    <Text style={{color: '#000', fontSize: 17, textAlign: 'center'}}>Добавить перевозку</Text>
                  </TouchableOpacity>
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
