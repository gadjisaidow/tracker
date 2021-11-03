import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Image, TextInput, ScrollView, ImageBackground } from 'react-native';

//icons
import Logo from '../../assets/Icons/Logo';
import Swap from '../../assets/Icons/Swap';
import Settings from '../../assets/Icons/Settings';
import LogoLight from '../../assets/Icons/LogoLight';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Cont({ navigation }) {


  const [scroller, setScroller] = React.useState('scroll');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      overflow: scroller
    },
  });

  var id = localStorage.getItem('id');
  const [data, setData] = React.useState();
  const [trans, setTrans] = React.useState();
  const [modal, setModal] = React.useState(false);

  const modaler = () => {
    setScroller('hidden');
    setModal(true);
  }

  const closer = () => {
    setScroller('scroll');
    setModal(false);
    add(id);
  }




  const [okt, setOtkuda] = React.useState();
  const [dp, setDop] = React.useState();
  const [kud, setKuda] = React.useState();
  const [zapchasti, setZap] = React.useState();
  const [aut, setAuto] = React.useState();
  const [adrer, setAdr] = React.useState();
  const [bopel, setBopel] = React.useState();
  const [konnik, setKonnik] = React.useState();
  const [remen, setRemen] = React.useState();
  const day = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
  const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const year = ["2021"];
  const [dayer, setDayer] = React.useState('1');
  const [monther, setMonther] = React.useState('Январь');
  const [yearer, setYearer] = React.useState('2021');

  const [d, setD] = React.useState(false);
  const [m, setM] = React.useState(false);
  const [y, setY] = React.useState(false);
  
  const daying = (e) => {
    setDayer(e);
    setD(false);
  }

  const monthing = (e) => {
    setMonther(e);
    setM(false);
  }

  const yeas = (e) => {
    setYearer(e);
    setY(false);
  }

  const [tonnage, setTonnage] = React.useState();
  const [values, setValues] = React.useState();
  const [rejim, setRejim] = React.useState();
  const [km, setKm] = React.useState();
  const [price, setPrice] = React.useState();





  const fetser = () => { 
    fetch('https:/trackcom.ru/api/news.php')
    .then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setData(json)
      } else {
        setData(null);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const transer = () => { 
    fetch('https:/trackcom.ru/api/trans/takeTrans.php', {
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
        setTrans(json);
        console.log(json);
      } else {
        Alert.alert('Ошибка получения данных');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };


  const add = (ids) => {
    fetch('https:/trackcom.ru/api/trans/addTrans.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: ids,
            otkuda: okt,
            dop: dp,
            kuda: kud,
            charac: zapchasti,
            auto: aut,
            tonn: tonnage,
            obem: values,
            rejim: rejim,
            adr: adrer,
            bopel: bopel,
            konik: konnik,
            remen: remen,
            price: price,
            km: km,
            day: dayer,
            month: monther,
            time: 0
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json == 1) {
        alert('Успешно добавлено');
      } else {
        alert('Ошибка');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    fetser();
    transer();
  }, []);


  return (
    <View style={styles.container}>

        {modal == true ? 
          <View style={{height: windowHeight, width: windowWidth, backgroundColor: 'rgba(0, 0, 0, 0.58)', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute'}}>
            <ScrollView style={{backgroundColor: '#fff', padding: 1.5*vw, width: windowWidth/2, marginTop: 100, marginBottom: 100, borderRadius: 15}}>
              <View>
                <Text style={{color: '#000', fontSize: 1.2*vw, fontWeight: '700'}}>Добавление перевозки</Text>
              </View>
              <View style={{marginTop: 30}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Откуда</Text>
                <TextInput
                  onChangeText={setOtkuda}
                  value={okt}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Куда</Text>
                <TextInput
                  onChangeText={setKuda}
                  value={kud}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Через какой город?</Text>
                <TextInput
                  onChangeText={setDop}
                  value={dp}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Характер груза</Text>
                <TextInput
                  onChangeText={setZap}
                  value={zapchasti}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Характер авто</Text>
                <TextInput
                  onChangeText={setAuto}
                  value={aut}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Тоннаж</Text>
                <TextInput
                  onChangeText={setTonnage}
                  value={tonnage}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Объем</Text>
                <TextInput
                  onChangeText={setValues}
                  value={values}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Режим</Text>
                <TextInput
                  onChangeText={setRejim}
                  value={rejim}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Киллометраж</Text>
                <TextInput
                  onChangeText={setKm}
                  value={km}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Стоимость перевозки</Text>
                <TextInput
                  onChangeText={setPrice}
                  value={price}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Наличие АДР (Да/Нет)</Text>
                <TextInput
                  onChangeText={setAdr}
                  value={adrer}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Наличие Бопелштоков (Да/Нет)</Text>
                <TextInput
                  onChangeText={setBopel}
                  value={bopel}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw}}>Наличие конников (Да/Нет)</Text>
                <TextInput
                  onChangeText={setKonnik}
                  value={konnik}
                  style={{borderRadius: 10, backgroundColor: '#f9f9f9', color: '#000', marginTop: 15, fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Введите значение"
                  placeholderTextColor="gray"
                />
              </View>
              <Text style={{color: '#000', opacity: 0.6, fontSize: 0.9*vw, marginTop: 20}}>Выберите дату</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
                <TouchableOpacity onPress={() => setD(true)} style={{marginTop: 10, width: 200, backgroundColor: '#f9f9f9', padding: 20, borderRadius: 10}}>
                  <Text style={{color: '#000'}}>{dayer}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setM(true)} style={{marginTop: 10, width: 200, marginLeft: 10, backgroundColor: '#f9f9f9', padding: 20, borderRadius: 10}}>
                  <Text style={{color: '#000'}}>{monther}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setY(true)} style={{marginTop: 10, width: 200, marginLeft: 10, backgroundColor: '#f9f9f9', padding: 20, borderRadius: 10}}>
                  <Text style={{color: '#000'}}>{yearer}</Text>
                </TouchableOpacity>
              </View>
              {d == true ?
                <View>
                  {day != null ?
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 20, marginLeft: -9, flexDirection: 'row'}}>
                        {day.map((index)=> {
                          return(
                            <TouchableOpacity onPress={() => daying(index)} style={{width: 50, height: 50, marginLeft: 15, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: '#000'}}>{index}</Text>
                            </TouchableOpacity>
                          )
                        })}
                    </ScrollView>
                  : (
                    <View></View>
                  )}
                </View>
              :(<View></View>)}
              {m == true ?
                <View>
                  {month != null ?
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 20, marginLeft: -9, flexDirection: 'row'}}>
                        {month.map((index)=> {
                          return(
                            <TouchableOpacity onPress={() => monthing(index)} style={{width: 100, height: 50, marginLeft: 15, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: '#000'}}>{index}</Text>
                            </TouchableOpacity>
                          )
                        })}
                    </ScrollView>
                  : (
                    <View></View>
                  )}
                </View>
              :(<View></View>)}
              {y == true ?
                <View>
                  {year != null ?
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 20, marginLeft: -9, flexDirection: 'row'}}>
                        {year.map((index)=> {
                          return(
                            <TouchableOpacity onPress={() => yeas(index)} style={{width: 100, height: 50, marginLeft: 15, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: '#000'}}>{index}</Text>
                            </TouchableOpacity>
                          )
                        })}
                    </ScrollView>
                  : (
                    <View></View>
                  )}
                </View>
              :(<View></View>)}
              <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => closer()} style={{ paddingTop: 1.1*vw, paddingBottom: 1.1*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#1e1e1e' }}>
                  <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Добавить перевозку</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => {setModal(false); setScroller('scroll')}} style={{ paddingTop: 1.1*vw, paddingBottom: 1.1*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#f9f9f9' }}>
                  <Text style={{color: '#000', fontSize: 0.9*vw, textAlign: 'center'}}>Отмена</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        :(
          <View></View>
        )}

        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 70, backgroundColor: '#fff', width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                    <View style={{flexDirection: 'row'}}>
                    <Logo />
                    <TouchableOpacity onPress={() => navigation.navigate('Tech')} style={{marginLeft: 50}}>
                        <Text style={{color: '#000', fontSize: 1*vw}}>Служба поддержки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Politic')} style={{marginLeft: 50}}>
                        <Text style={{color: '#000', fontSize: 1*vw}}>Политика конфиденциальности</Text>
                    </TouchableOpacity>
                    </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Prof')} style={{ flexDirection: 'row', backgroundColor: '#1E1E1E', justifyContent: 'center', padding: 12, width: 180, borderRadius: 12, alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 1*vw}}>Профиль</Text>
                    <View style={{marginLeft: 20}}>
                        <Settings />
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                    <Text style={{marginTop: 60, fontSize: 2.7*vw, fontWeight: '800'}}>Мои перевозки</Text>
                </View>
                <View style={{marginTop: 40}}>
                    <Text style={{color: '#000', opacity: 0.5, fontSize: 0.7*vw}}>Ниже показана информация о вами добавленных перевозках</Text>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: '#f0f0f0', marginTop: 40 }}></View>
                <TouchableOpacity onPress={() => modaler()} style={{borderRadius: 10, marginTop: 40, width: 14*vw, backgroundColor: '#000', padding: 1*vw}}>
                  <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Добавить перевозку</Text>
                </TouchableOpacity>
                {trans != null ?
                  <View>

                    {trans.map((index)=> {
                      return(
                        <View style={{marginTop: 50}}>
                          <View style={{padding: 30, borderRadius: 10, backgroundColor: '#f9f9f9', flexDirection: 'row', justifyContent: 'space-between'}}>
                              <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                  <Text style={{color: '#000', fontSize: 1.1*vw, fontWeight: '600'}}>{index.place_one}</Text>
                                  <View style={{marginLeft: 20}}>
                                    <Swap />
                                  </View>
                                  <Text style={{color: '#000', fontSize: 1.1*vw, fontWeight: '600', marginLeft: 20}}>{index.place_two}</Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                  <Text style={{color: '#000', opacity: 0.6, fontSize: 0.8*vw}}>{index.auto}</Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                  <Text style={{color: '#000', opacity: 0.6, fontSize: 0.8*vw}}>Режим: {index.mode}</Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                  <Text style={{color: '#000', fontSize: 1*vw}}>{index.price} руб</Text>
                                </View>
                                {index.status == '0' ?
                                  <View style={{marginTop: 20}}>
                                    <Text style={{color: '#ff0000', fontSize: 1*vw}}>На рассмотрении</Text>
                                  </View>
                                : (
                                  <View></View>
                                )}
                              </View>
                              <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
                                <Text style={{color: '#000', opacity: 0.6, fontSize: 0.8*vw}}>{index.km} km</Text>
                                <View>
                                  <TouchableOpacity onPress={() => navigation.navigate('Opener', {id: index.id, place_one: index.place_one, place_two: index.place_two, character: index.character, auto: index.auto, tonnage: index.tonnage, volume: index.volume, adr: index.adr, mode: index.mode, bopel: index.bopel, konnik: index.konnik, belt: index.belt, price: index.price, km: index.km, day: index.day, month: index.month, time: index.time, soder: index.soder, kurator: index.kurator, talker: index.talker})} style={{ paddingTop: 0.8*vw, paddingBottom: 0.8*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 7, backgroundColor: '#000' }}>
                                    <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Подробнее</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                          </View>
                        </View>
                      )
                    })}

                  </View>
                : (
                  <View>
                    <Text style={{marginTop: 30, color: '#fff', fontWeight: '800', fontSize: 20}}>Нет записей</Text>
                  </View>
                )}
                <View style={{marginTop: 60}}>
                  <Text style={{color: '#000', fontSize: 2*vw, fontWeight: '800'}}>Рекомендации (news)</Text>
                </View>
                {data != null ?
                  <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap'}}>

                    {data.map((index)=> {
                      return(
                        <View style={{ marginTop: 50, width: '32%'}}>
                            <Image source={{ uri: index.image }} style={{width: '100%', height: 40*vh, borderRadius: 10, zIndex: 0}} />
                            <ImageBackground source={require('../../assets/temno.png')} imageStyle={{borderRadius: 10, zIndex: 1, height: 30*vh, width: '100%'}} style={{ marginTop: 10*vh, justifyContent: 'flex-end', height: 30*vh, paddingBottom: 3*vw, position: 'absolute', zIndex: 1, paddingLeft: 20 }}>
                              <Text style={{ color: '#fff', fontWeight: '800', fontSize: 1.5*vw, zIndex: 3}}>{index.title}</Text>
                              <Text style={{marginTop: 2*vh, color: '#fff', fontWeight: '500', fontSize: 0.8*vw, lineHeight: 1.3*vw, zIndex: 3, width: '90%'}}>{index.text}</Text>
                            </ImageBackground>
                        </View>
                      )
                    })}

                  </View>
                : (
                  <View>
                    <Text style={{marginTop: 30, color: '#fff', fontWeight: '800', fontSize: 20}}>Нет записей</Text>
                  </View>
                )}
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
