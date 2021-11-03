import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';

//icons
import Logo from '../assets/Icons/Logo';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;


export default function Regisster({ navigation }) {

  const [number, setNumber] = React.useState();
  const [code, setCode] = React.useState();
  const [mail, setMail] = React.useState();



  

  const [cheker, onVhangeCheck] = React.useState(1);
  const [study, setStudy] = React.useState(1);
  


  const numb = (tel) => { 
    fetch('https:/trackcom.ru/api/register/reg_per.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tel: tel
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json == 1) {
        alert('Номер телефона уже зарегистрирован');
        setStudy(1);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const coder = (tel, cod) => { 
    fetch('https:/trackcom.ru/api/register/Code.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tel: tel,
            code: cod
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json == null) {
        alert('Неправильный код');
        setStudy(2);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const mailer = (tel, text) => { 
    fetch('https:/trackcom.ru/api/register/mail_per.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tel: tel,
            mail: text
        })
    }).then((response) => response.json())
    .then((json) => {
        if(json == 1) {
            alert('Отлично');
        } else {
            alert('Ошибка');
        }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const oneStep = () => {
    setStudy(2);
    numb(number);
  }
  const TwoStep = () => {
    setStudy(3);
    coder(number, code);
  }
  const ThreeStep = () => {
    setStudy(4);
    mailer(number, mail)
  }
  const FourStep = () => {
    setStudy(5);
  }
  const FiveStep = () => {
    
  }


  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: windowWidth }}>
            <View style={{ height: windowHeight, paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#fff', width: '50%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Logo />
                </TouchableOpacity>
                <View>
                    <Text style={{marginTop: 100, fontSize: 2.7*vw, fontWeight: '800'}}>Регистрация</Text>
                </View>
                <View style={{marginTop: 50}}>

                  {cheker == 1 ?
                    <View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity onPress={() => onVhangeCheck(1)} style={{padding: 20, width: 15*vw, backgroundColor: '#1e1e1e', borderRadius: 10}}>
                            <Text style={{textAlign: 'center', color: '#fff'}}>Я Перевозчик</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => onVhangeCheck(2)} style={{padding: 20, width: 15*vw, marginLeft: 1*vw, backgroundColor: '#f0f0f0', borderRadius: 10}}>
                            <Text style={{textAlign: 'center', color: '#000'}}>Я Заказчик</Text>
                          </TouchableOpacity>
                      </View>
                      <View>
                        {study == 1 ?
                        <View style={{marginTop: 50}}>
                            <TextInput
                              onChangeText={setNumber}
                              value={number}
                              style={{width: '100%', borderRadius: 10, backgroundColor: '#f9f9f9', fontSize: 0.9*vw, padding: 20}}
                              placeholder="Номер телефона"
                              placeholderTextColor="gray"
                            />
                            <TouchableOpacity onPress={() => oneStep()} style={{padding: 20, marginTop: 30, width: 15*vw, backgroundColor: '#1e1e1e', borderRadius: 10}}>
                              <Text style={{textAlign: 'center', color: '#fff'}}>Далее</Text>
                            </TouchableOpacity>
                        </View>
                        :(<View></View>)}
                        {study == 2 ?
                        <View style={{marginTop: 50}}>
                            <TextInput
                              onChangeText={setCode}
                              value={code}
                              style={{width: '100%', borderRadius: 10, backgroundColor: '#f9f9f9', fontSize: 0.9*vw, padding: 20}}
                              placeholder="Код из СМС"
                              placeholderTextColor="gray"
                            />
                            <TouchableOpacity onPress={() => TwoStep()} style={{padding: 20, marginTop: 30, width: 15*vw, backgroundColor: '#1e1e1e', borderRadius: 10}}>
                              <Text style={{textAlign: 'center', color: '#fff'}}>Далее</Text>
                            </TouchableOpacity>
                        </View>
                        :(<View></View>)}
                        {study == 3 ?
                        <View style={{marginTop: 50}}>
                            <TextInput
                              onChangeText={setMail}
                              value={mail}
                              style={{width: '100%', borderRadius: 10, backgroundColor: '#f9f9f9', fontSize: 0.9*vw, padding: 20}}
                              placeholder="Ваш e-mail"
                              placeholderTextColor="gray"
                            />
                            <TouchableOpacity onPress={() => ThreeStep()} style={{padding: 20, marginTop: 30, width: 15*vw, backgroundColor: '#1e1e1e', borderRadius: 10}}>
                              <Text style={{textAlign: 'center', color: '#fff'}}>Далее</Text>
                            </TouchableOpacity>
                        </View>
                        :(<View></View>)}
                      </View>
                    </View>
                  :(
                    <View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity onPress={() => onVhangeCheck(1)} style={{padding: 20, width: 15*vw, backgroundColor: '#f0f0f0', borderRadius: 10}}>
                            <Text style={{textAlign: 'center', color: '#000'}}>Я Перевозчик</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => onVhangeCheck(2)} style={{padding: 20, width: 15*vw, marginLeft: 1*vw, backgroundColor: '#1e1e1e', borderRadius: 10}}>
                            <Text style={{textAlign: 'center', color: '#fff'}}>Я Заказчик</Text>
                          </TouchableOpacity>
                      </View>
                    </View>
                  )}
            
                </View>
            </View>
            <View style={{ height: windowHeight, paddingTop: 70, backgroundColor: '#232323' }}>
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
