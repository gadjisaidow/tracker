import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
//icons
import Logo from '../assets/Icons/Logo';
import LeftLight from '../assets/Icons/LeftLight';
import LogoLight from '../assets/Icons/LogoLight';
import Swap from '../assets/Icons/Swap';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Profile({ navigation }) {

  var id = localStorage.getItem('id');
  const [data, setData] = React.useState();
  const [datas, setDatas] = React.useState();
  const [dataTwo, setDataTwo] = React.useState();
  const [name, setName] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [year, setYear] = React.useState('');
  const [model, setModel] = React.useState('');
  const [number, setNumber] = React.useState('');



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
        autos(json[0].id);
        stat(json[0].id);
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


  const stat = (ider) => { 
    fetch('https:/trackcom.ru/api/statususer.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: ider
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        taker(json[0].id_trans);
      } else {
        setData(null);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const taker = (ider) => { 
    fetch('https:/trackcom.ru/api/trans/takeInfo.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: ider
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setDataTwo(json);
      } else {
        setDataTwo(null);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };


  const autos = (iser) => { 
    fetch('https:/trackcom.ru/api/auto.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: iser
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setTitle(json[0].title);
        setYear(json[0].year);
        setModel(json[0].model);
        setNumber(json[0].number);
      } else {
        setDatas(null);
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
    <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 70, width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', backgroundColor: '#2b2b2b', padding: 1*vw, borderRadius: 10, alignItems: 'center', width: '13%' }}>
                    <LeftLight />
                    <Text style={{marginLeft: 1.2*vw, color: '#fff', opacity: 0.6, fontSize: 1*vw}}>На главную</Text>
                  </TouchableOpacity>
                  <View>
                    <LogoLight />
                  </View>
                </View>
                      <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                          <View>
                            <Text style={{marginTop: 60, color: '#fff', fontSize: 2.7*vw, fontWeight: '800'}}>{name}</Text>
                          </View>
                          <View style={{ marginTop: 80, width: '50%'}}>
                              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                              <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Автомобиль:</Text>
                              <Text style={{fontSize: 1*vw, textAlign: 'right', fontWeight: '600', color: '#fff'}}>{title}</Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                              <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Модель:</Text>
                              <Text style={{fontSize: 1*vw, textAlign: 'right', fontWeight: '600', color: '#fff'}}>{model}</Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                              <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Год выпуска:</Text>
                              <Text style={{fontSize: 1*vw, textAlign: 'right', fontWeight: '600', color: '#fff'}}>{year}</Text>
                              </View>
                          </View>
                      </View>
                      <View style={{ marginTop: -20 }}>
                          <Text style={{color: '#fff', fontSize: 1.1*vw}}>Рейтинг: {rating}</Text>
                      </View>
                <View style={{width: '100%', height: 2, backgroundColor: '#232323', marginTop: 40, marginBottom: 40}}></View>
                <View>
                  <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Активная перевозка</Text>
                </View>
                {dataTwo != null ?
                  <View style={{marginTop: 20}}>
                    {dataTwo.map((index)=> {
                        return(
                          <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
                              <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                  <Text style={{color: '#fff', fontSize: 1.1*vw, fontWeight: '600'}}>{index.place_one}</Text>
                                  <View style={{marginLeft: 20}}>
                                    <Swap />
                                  </View>
                                  <Text style={{color: '#fff', fontSize: 1.1*vw, fontWeight: '600', marginLeft: 20}}>{index.place_two}</Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                  <Text style={{color: '#fff', opacity: 0.6, fontSize: 0.8*vw}}>{index.auto}</Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                  <Text style={{color: '#fff', opacity: 0.6, fontSize: 0.8*vw}}>Режим: {index.mode}</Text>
                                </View>
                                <View style={{marginTop: 20, padding: 1*vw, backgroundColor: '#2b2b2b', borderRadius: 10}}>
                                  <Text style={{color: '#fff', opacity: 0.7, fontSize: 1*vw, textAlign: 'center'}}>{index.price} руб</Text>
                                </View>
                              </View>
                              <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
                                <Text style={{color: '#fff', opacity: 0.6, fontSize: 0.8*vw}}>{index.km} km</Text>
                                <View>
                                  <TouchableOpacity onPress={() => navigation.navigate('Actived', {id: index.id, talker: index.talker, place_one: index.place_one, place_two: index.place_two, character: index.character, auto: index.auto, tonnage: index.tonnage, volume: index.volume, adr: index.adr, mode: index.mode, bopel: index.bopel, konnik: index.konnik, belt: index.belt, price: index.price, km: index.km, day: index.day, month: index.month, time: index.time, soder: index.soder, kurator: index.kurator})} style={{ paddingTop: 0.8*vw, paddingBottom: 0.8*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#0d84fb' }}>
                                    <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Подробнее</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                          </View>
                      )
                    })}
                  </View>
                : (
                  <View>
                    <Text style={{marginTop: 30, color: '#fff', fontWeight: '800', fontSize: 20}}>Нет активных перевозок</Text>
                  </View>
                )}
                <View style={{width: '100%', height: 2, backgroundColor: '#232323', marginTop: 40 }}></View>
                <View style={{marginTop: 60}}>
                  <Text style={{color: '#fff', fontSize: 2*vw, fontWeight: '800'}}>Информация для перевозчиков</Text>
                </View>
                <View style={{ marginTop: 40, width: '100%', borderRadius: 20}}>
                  <Text style={{color: '#fff', fontSize: 1*vw, lineHeight: 25}}>Какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст, какой-то текст</Text>
                </View>
                <View style={{width: '100%', height: 2, backgroundColor: '#232323', marginTop: 40}}></View>
                <TouchableOpacity onPress={() => exit()} style={{marginTop: 50}}>
                  <Text style={{fontSize: 1.2*vw, color: '#ff0000'}}>Выйти</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{bottom: 0, zIndex: 0, marginTop: 40, marginLeft: 100, marginRight: 100, paddingTop: 40, paddingBottom: 40, borderTopWidth: 2, borderTopColor: '#232323'}}>
          <View>
            <LogoLight />
            <Text style={{marginTop: 30, color: '#fff', fontSize: 0.8*vw}}>Все права защищены © 2021</Text>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
});
