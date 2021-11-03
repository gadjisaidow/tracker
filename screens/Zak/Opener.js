import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image } from 'react-native';

//icons
import Logo from '../../assets/Icons/Logo';
import Left from '../../assets/Icons/Left';
import Swap from '../../assets/Icons/Swap';
import LogoLight from '../../assets/Icons/LogoLight';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Opener({ navigation, route }) {

  const [modal, setModal] = React.useState(false);


  const { id, place_one, place_two, character, auto, talker, tonnage, volume, adr, mode, bopel, konnik, belt, price, km, day, month, time, soder, kurator } = route.params;
  const [data, setData] = React.useState();



  const per = (ids) => {
    fetch('https:/trackcom.ru/api/user.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: ids,
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setData(json);
      } else {
        alert('Ошибка');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const deleted = () => {
    fetch('https:/trackcom.ru/api/trans/deleteTrans.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        navigation.goBack();
      } else {
        alert('Ошибка');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const status = () => {
    fetch('https:/trackcom.ru/api/trans/statusTrans.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        per(json[0].id_user);
      } else {
        console.log(json);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }


  useEffect(() => {
    status();
  }, []);



  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#fff', width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', width: '15%' }}>
                    <Left />
                    <Text style={{marginLeft: 30, color: '#000', fontSize: 1*vw}}>Назад к списку</Text>
                  </TouchableOpacity>
                  <View>
                    <Logo />
                  </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View>
                          <Text style={{marginTop: 60, fontSize: 2.7*vw, fontWeight: '800'}}>Махачкала</Text>
                          <Text style={{marginTop: 60, fontSize: 2.2*vw, fontWeight: '500', marginTop: 30}}>Москва</Text>
                      </View>
                      <View style={{marginLeft: 100, marginTop: 80, transform: [{ rotate: '90deg'}]}}>
                          <Swap />
                      </View>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => deleted()} style={{ paddingTop: 0.8*vw, marginTop: 80, paddingBottom: 0.8*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 7, backgroundColor: '#ff0000' }}>
                      <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Удалить перевозку</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: '#f0f0f0', marginTop: 40, marginBottom: 40}}></View>
                <View>
                  <Text style={{fontSize: 0.8*vw}}>{auto}</Text>
                </View>
                <View style={{flexDirection: 'row',  justifyContent: 'space-between'}}>
                  <View style={{marginTop: 50, width: '50%'}}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <Text style={{fontSize: 1*vw}}>Характер груза:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{character}</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                        <Text style={{fontSize: 1*vw}}>Киллометраж:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{km}</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                        <Text style={{fontSize: 1*vw}}>Тоннаж:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{tonnage} тонн</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                        <Text style={{fontSize: 1*vw}}>Объем:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{volume} м3</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                        <Text style={{fontSize: 1*vw}}>Режим:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{mode}</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                        <Text style={{fontSize: 1*vw}}>Бопелштоки:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{bopel}</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                        <Text style={{fontSize: 1*vw}}>Наличик конников:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{konnik}</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                        <Text style={{fontSize: 1*vw}}>Наличик ремней:</Text>
                        <Text style={{fontSize: 1*vw, textAlign: 'right'}}>{belt}</Text>
                      </View>
                  </View>
                  <View style={{ width: '50%' }}>
                      {data == null ?
                        <View style={{padding: 50}}>
                          <Text style={{color: '#000', fontSize: 1*vw, fontWeight: '600'}}>Перевозчик не определен</Text>
                        </View>
                      :(
                        <View>
                        {data.map((index)=> {
                          return(
                            <View style={{padding: 50}}>
                              <Text style={{color: '#000', fontSize: 1.3*vw, fontWeight: '600'}}>{index.name}</Text>
                              <Text style={{color: '#000', fontSize: 1*vw, fontWeight: '500', opacity: 0.5, marginTop: 20}}>Рейтинг: {index.rating}</Text>
                              <Text style={{color: '#000', fontSize: 1*vw, fontWeight: '500', marginTop: 50}}>Телефон: +{index.tel}</Text>
                              <Text style={{color: '#000', fontSize: 1*vw, fontWeight: '500', marginTop: 20}}>E-mail: {index.mail}</Text>
                              <TouchableOpacity style={{marginTop: 30}}>
                                <Text style={{color: '#009cff', fontSize: 1*vw, fontWeight: '500'}}>Посмотреть местоположение</Text>
                              </TouchableOpacity>
                            </View>
                          )
                        })}
                        </View>
                      )}
                  </View>
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
