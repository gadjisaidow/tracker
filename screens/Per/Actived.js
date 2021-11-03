import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

//icons
import Logo from '../../assets/Icons/Logo';
import LeftLight from '../../assets/Icons/LeftLight';
import Swap from '../../assets/Icons/Swap';
import LogoLight from '../../assets/Icons/LogoLight';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Actived({ navigation, route }) {

  const { id, place_one, place_two, character, talker, auto, tonnage, volume, adr, mode, bopel, konnik, belt, price, km, day, month, time, soder, kurator } = route.params;

  const [sta, setSta] = React.useState();
  var user = localStorage.getItem('id');

  const Start = () => {
    alert('Номер телефона куратора: +79898873832')
  }

  const fetser = () => { 
    fetch('https:/trackcom.ru/api/statususer.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: user
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setSta(json[0].id_trans);
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
    <ScrollView style={styles.container}>
        <View style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 70}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', backgroundColor: '#2b2b2b', padding: 1*vw, borderRadius: 10, alignItems: 'center', width: '13%' }}>
                    <LeftLight />
                    <Text style={{marginLeft: 1.2*vw, color: '#fff', opacity: 0.6, fontSize: 1*vw}}>Назад</Text>
                  </TouchableOpacity>
                  <View>
                    <LogoLight />
                  </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View>
                          <Text style={{marginTop: 60, fontSize: 2.7*vw, fontWeight: '800', color: '#fff'}}>{place_one}</Text>
                          <Text style={{marginTop: 60, fontSize: 2.2*vw, fontWeight: '500', marginTop: 30, color: '#fff'}}>{place_two}</Text>
                      </View>
                      <View style={{marginLeft: 100, marginTop: 80, transform: [{ rotate: '90deg'}]}}>
                          <Swap />
                      </View>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => Start()} style={{ paddingTop: 0.8*vw, marginTop: 80, paddingBottom: 0.8*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 7, backgroundColor: '#ff0000' }}>
                      <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Завершить перевозку</Text>
                    </TouchableOpacity>
                  </View>
              </View>
              <View style={{width: '100%', height: 2, backgroundColor: '#232323', marginTop: 40, marginBottom: 40}}></View>
              <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                  <View style={{width: '50%'}}>
                    <View>
                      <Text style={{fontSize: 0.8*vw, color: '#fff', opacity: 0.6}}>{auto}</Text>
                    </View>
                    <View style={{marginTop: 50}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Характер груза:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{character}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Киллометраж:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{km}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Тоннаж:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{tonnage} тонн</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Режим:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{mode}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>АДР:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{adr}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Бопелштоки:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{bopel}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Объем:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{volume}м3</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Наличик конников:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{konnik}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                          <Text style={{fontSize: 1*vw, color: '#fff', opacity: 0.6}}>Наличик ремней:</Text>
                          <Text style={{fontSize: 1*vw, textAlign: 'right', color: '#fff'}}>{belt}</Text>
                        </View>
                    </View>
                  </View>
                  <View style={{width: '50%', paddingLeft: 70, paddingTop: 50}}>
                      <View>
                        <Image source={require('../../assets/Benner.png')} style={{width: '100%', height: 31*vw}} />
                      </View>
                  </View>
                </View>
                <View style={{width: '100%', height: 2, backgroundColor: '#232323', marginTop: 40, marginBottom: 40}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <View>
                    <Text style={{color: '#fff', opacity: 0.6, fontSize: 1*vw}}>Куратор</Text>
                    <Text style={{color: '#fff', fontSize: 1.6*vw, marginTop: 30, fontWeight: '700'}}>{kurator}</Text>
                  </View>
                  <TouchableOpacity onPress={() => alert(talker)} style={{ paddingTop: 0.8*vw, paddingBottom: 0.8*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 7, backgroundColor: '#0d84fb' }}>
                    <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Связаться</Text>
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
    backgroundColor: '#1e1e1e'
  },
});
