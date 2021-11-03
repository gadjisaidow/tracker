import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, ImageBackground, FlatList, Image, ScrollView, TextInput } from 'react-native';

//icons
import Logo from '../assets/Icons/Logo';
import Swap from '../assets/Icons/Swap';
import Settings from '../assets/Icons/Settings';
import LogoLight from '../assets/Icons/LogoLight';
import Galka from '../assets/Icons/Galka';
import GalkaOut from '../assets/Icons/GalkaOut';


//variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

export default function Content({ navigation }) {

  // ==================================================================
  const [scroller, setScroller] = React.useState('scroll');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e1e1e',
      overflow: scroller
    },
  });
  // ==================================================================
  const [otkuda, setOtkuda] = React.useState('Откуда');
  const [kuda, setKuda] = React.useState('Куда');
  const [tonnage, setTonnage] = React.useState('');
  const [obem, setObem] = React.useState('');
  const [character, setCharer] = React.useState('Характер авто');
  const [dayer, setDayer] = React.useState('1');
  const [monther, setMonther] = React.useState('Янваарь');
  const [yearer, setYearer] = React.useState('2021');
  const [dats, setDats] = React.useState(dayer + ' ' + monther + ' ' + yearer);
  var cities = [
    {title: 'Москва', id: 1},
    {title: 'Махачкала', id: 2},
    {title: 'Краснодар', id: 3}
  ];
  const [datas, setDatas] = React.useState(cities);
  const day = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
  const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const year = ["2021", "2022", "2023", "2024"];
  // ======================[MODAL MENU 'OTKUDA']========================
  const [textOne, onChangeTextOne] = React.useState();

  const searchData = (text) => {
    const newData = cities.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
    setDatas(newData);
    onChangeTextOne(text);
  }
  const [openedOne, setOpenedOne] = React.useState(false);
  const [takeOne, setTakeOne] = React.useState('');
  const linker = (id, title) => {
    setTakeOne(id);
    setOtkuda(title);
  }
  const opener = () => {
    setOpenedOne(true);
    onChangeTextOne(null);
    setDatas(cities);
    setScroller('hidden');
  }
  const closer = () => {
    setOpenedOne(false);
    setScroller('scroll');
  }
  // ==================================================================

  // ======================[MODAL MENU 'KUDA']========================
  const [textTwo, onChangeTextTwo] = React.useState();

  const searchDataTwo = (text) => {
    const newData = cities.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
    setDatas(newData);
    onChangeTextTwo(text);
  }
  const [openedTwo, setOpenedTwo] = React.useState(false);
  const [takeTwo, setTakeTwo] = React.useState('');
  const linkerTwo = (id, title) => {
    setTakeTwo(id);
    setKuda(title);
  }
  const openerTwo = () => {
    setOpenedTwo(true);
    onChangeTextTwo(null);
    setDatas(cities);
    setScroller('hidden');
  }
  const closerTwo = () => {
    setOpenedTwo(false);
    setScroller('scroll');
  }
  // ==================================================================


  // ======================[MODAL MENU 'Charakter']========================

  const [openedThree, setOpenedThree] = React.useState(false);
  const [variantes, setVar] = React.useState('');
  var char = [
    {title: 'Рефрежиратор', id: 1},
    {title: 'Чудовище', id: 2},
  ];

  const takvar = (e) => {
      setVar(e);
      setCharer(e);
  }
  const openerThree = () => {
    setOpenedThree(true);
    setScroller('hidden');
  }
  const closerThree = () => {
    setOpenedThree(false);
    setScroller('scroll');
  }
  // ==================================================================

  // ======================[MODAL MENU 'CALENDAR']========================

  const [openedFour, setOpenedFour] = React.useState(false);
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

  const openerFour = () => {
    setOpenedFour(true);
    setScroller('hidden');
  }
  const closerFour = () => {
    setOpenedFour(false);
    setDats(dayer + ' ' + monther + ' ' + yearer);
    setScroller('scroll');
  }
  // ==================================================================


  // Получение данных
  const [data, setData] = React.useState();
  const [dataTwo, setDataTwo] = React.useState();
  // =========================[NEWS]===================================
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
  // ==========================[TransData]=============================


  const fetc = () => { 
    fetch('https:/trackcom.ru/api/transer.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            otkuda: otkuda,
            kuda: kuda,
            tonnage: tonnage,
            char: character,
            month: monther,
            day: dayer
        })
    }).then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setDataTwo(json);
        console.log(json);
      } else {
        setDataTwo(null);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };



  const transer = () => { 
    fetch('https:/trackcom.ru/api/trans/trans.php')
    .then((response) => response.json())
    .then((json) => {
      if (json != 0) {
        setDataTwo(json)
      } else {
        setDataTwo(null);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };
  // ==================================================================
  useEffect(() => {
    fetser();
    transer();
  }, []);


  return (
    <ScrollView style={styles.container}>

      {/*  ГОРОД  */}
      {openedOne == true ? 
        <View style={{height: windowHeight, width: windowWidth, backgroundColor: 'rgba(0, 0, 0, 0.58)', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute'}}>
          <View style={{backgroundColor: '#232323', padding: 1*vw, width: windowWidth/3, borderRadius: 15}}>
              <View>
                <TextInput
                  onChangeText={(text) => searchData(text)}
                  value={textOne}
                  style={{borderRadius: 10, backgroundColor: '#2b2b2b', color: '#fff', fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Место загрузки"
                  placeholderTextColor="gray"
                />
              </View>
              <FlatList
                data={datas}
                keyExtractor={item => item.id}
                style={{marginTop: 20}}
                renderItem={({ item }) => (
                  <View>
                    {takeOne == item.id ?
                      <TouchableOpacity onPress={() => linker(item.id, item.title)} style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{color: '#fff'}}>{item.title}</Text>
                          <View>
                            <GalkaOut />
                          </View>
                      </TouchableOpacity>
                    : (
                      <TouchableOpacity onPress={() => linker(item.id, item.title)} style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{color: '#fff'}}>{item.title}</Text>
                          <View>
                              <Galka />
                          </View>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              />
              <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => closer()} style={{ paddingTop: 1.1*vw, paddingBottom: 1.1*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#0d84fb' }}>
                  <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Готово</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      : (
        <View></View>
      )}

      {openedTwo == true ? 
        <View style={{height: windowHeight, width: windowWidth, backgroundColor: 'rgba(0, 0, 0, 0.58)', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute'}}>
          <View style={{backgroundColor: '#232323', padding: 1*vw, width: windowWidth/3, borderRadius: 15}}>
              <View>
                <TextInput
                  onChangeText={(text) => searchData(text)}
                  value={textTwo}
                  style={{borderRadius: 10, backgroundColor: '#2b2b2b', color: '#fff', fontSize: 0.9*vw, padding: 1*vw}}
                  placeholder="Место разгрузки"
                  placeholderTextColor="gray"
                />
              </View>
              <FlatList
                data={datas}
                keyExtractor={item => item.id}
                style={{marginTop: 20}}
                renderItem={({ item }) => (
                  <View>
                    {takeTwo == item.id ?
                      <TouchableOpacity onPress={() => linkerTwo(item.id, item.title)} style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{color: '#fff'}}>{item.title}</Text>
                          <View>
                            <GalkaOut />
                          </View>
                      </TouchableOpacity>
                    : (
                      <TouchableOpacity onPress={() => linkerTwo(item.id, item.title)} style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{color: '#fff'}}>{item.title}</Text>
                          <View>
                              <Galka />
                          </View>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              />
              <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => closerTwo()} style={{ paddingTop: 1.1*vw, paddingBottom: 1.1*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#0d84fb' }}>
                  <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Готово</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      : (
        <View></View>
      )}

      {openedThree == true ? 
        <View style={{height: windowHeight, width: windowWidth, backgroundColor: 'rgba(0, 0, 0, 0.58)', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute'}}>
          <View style={{backgroundColor: '#232323', padding: 1*vw, width: windowWidth/3, borderRadius: 15}}>
            <FlatList
                data={char}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <View>
                    {variantes == item.title ?
                      <TouchableOpacity onPress={() => takvar(item.title)} style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{color: '#fff'}}>{item.title}</Text>
                          <View>
                            <GalkaOut />
                          </View>
                      </TouchableOpacity>
                    : (
                      <TouchableOpacity onPress={() => takvar(item.title)} style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{color: '#fff'}}>{item.title}</Text>
                          <View>
                              <Galka />
                          </View>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              />
              <View style={{marginTop: 20}}>  
                <TouchableOpacity onPress={() => closerThree()} style={{ paddingTop: 1.1*vw, paddingBottom: 1.1*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#0d84fb' }}>
                  <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Готово</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      : (
        <View></View>
      )}

      {openedFour == true ? 
        <View style={{height: windowHeight, width: windowWidth, backgroundColor: 'rgba(0, 0, 0, 0.58)', alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute'}}>
          <View style={{backgroundColor: '#232323', padding: 1*vw, width: windowWidth/3, borderRadius: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => setD(true)} style={{marginTop: 10, width: 165, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10}}>
                  <Text style={{color: '#fff'}}>{dayer}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setM(true)} style={{marginTop: 10, width: 165, marginLeft: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10}}>
                  <Text style={{color: '#fff'}}>{monther}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setY(true)} style={{marginTop: 10, width: 165, marginLeft: 10, backgroundColor: '#2b2b2b', padding: 20, borderRadius: 10}}>
                  <Text style={{color: '#fff'}}>{yearer}</Text>
                </TouchableOpacity>
              </View>
              {d == true ?
                <View>
                  {day != null ?
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 20, marginLeft: -9, flexDirection: 'row'}}>
                        {day.map((index)=> {
                          return(
                            <TouchableOpacity onPress={() => daying(index)} style={{width: 50, height: 50, marginLeft: 15, backgroundColor: '#2b2b2b', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: '#fff'}}>{index}</Text>
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
                            <TouchableOpacity onPress={() => monthing(index)} style={{width: 100, height: 50, marginLeft: 15, backgroundColor: '#2b2b2b', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: '#fff'}}>{index}</Text>
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
                            <TouchableOpacity onPress={() => yeas(index)} style={{width: 100, height: 50, marginLeft: 15, backgroundColor: '#2b2b2b', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: '#fff'}}>{index}</Text>
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
                <TouchableOpacity onPress={() => closerFour()} style={{ paddingTop: 1.1*vw, paddingBottom: 1.1*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#0d84fb' }}>
                  <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Готово</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      : (
        <View></View>
      )}


        <View style={{ flexDirection: 'row', width: '100%', zIndex: 0 }}>
            <View style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 70, width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                    <View style={{flexDirection: 'row'}}>
                    <LogoLight />
                    <TouchableOpacity onPress={() => navigation.navigate('Tech')} style={{marginLeft: 50}}>
                        <Text style={{color: '#fff', fontSize: 1*vw}}>Служба поддержки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Politic')} style={{marginLeft: 50}}>
                        <Text style={{color: '#fff', fontSize: 1*vw}}>Политика конфиденциальности</Text>
                    </TouchableOpacity>
                    </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ flexDirection: 'row', padding: 14, justifyContent: 'center', width: 180, borderRadius: 12, backgroundColor: '#1e1e1e', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 1*vw}}>Профиль</Text>
                    <View style={{marginLeft: 20}}>
                        <Settings />
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                    <Text style={{marginTop: 60, fontSize: 2.7*vw, fontWeight: '800', color: '#fff'}}>Поиск перевозок</Text>
                </View>
                <View style={{marginTop: 40}}>
                    <Text style={{color: '#fff', opacity: 0.5, fontSize: 0.7*vw}}>Для выдачи информации о перевозках требуется указать маршрут и характер авто</Text>
                </View>
                <View style={{marginTop: 30, width: '92%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View>
                      {otkuda != 'Откуда' && otkuda != '' ?
                        <TouchableOpacity onPress={() => opener()} style={{borderRadius: 10, width: 14*vw, backgroundColor: '#2b2b2b', padding: 1*vw}}>
                          <Text style={{color: '#fff', fontSize: 0.9*vw}}>{otkuda}</Text>
                        </TouchableOpacity>
                      : (
                        <TouchableOpacity onPress={() => opener()} style={{borderRadius: 10, width: 14*vw, backgroundColor: '#2b2b2b', padding: 1*vw}}>
                          <Text style={{color: '#fff', opacity: 0.5, fontSize: 0.9*vw}}>{otkuda}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <View>
                      <Swap />
                    </View>
                    <View>
                      {kuda != 'Куда' ?
                        <TouchableOpacity onPress={() => openerTwo()} style={{borderRadius: 10, width: 14*vw, backgroundColor: '#2b2b2b', padding: 1*vw}}>
                          <Text style={{color: '#fff', fontSize: 0.9*vw}}>{kuda}</Text>
                        </TouchableOpacity>
                      : (
                        <TouchableOpacity onPress={() => openerTwo()} style={{borderRadius: 10, width: 14*vw, backgroundColor: '#2b2b2b', padding: 1*vw}}>
                          <Text style={{color: '#fff', opacity: 0.5, fontSize: 0.9*vw}}>{kuda}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <View>
                        <TextInput
                            onChangeText={setTonnage}
                            value={tonnage}
                            style={{borderRadius: 10, backgroundColor: '#2b2b2b', color: '#fff', fontSize: 0.9*vw, padding: 1*vw}}
                            placeholder="Тоннаж"
                            placeholderTextColor="gray"
                        />
                        {tonnage == '' ?
                          <View></View>
                        : (
                          <Text style={{position: 'absolute', marginLeft: 8*vw, marginTop: 0.9*vw, color: '#fff', fontSize: 0.9*vw}}>тонн</Text>
                        )}
                    </View>
                    <View>
                        <TextInput
                            onChangeText={setObem}
                            value={obem}
                            style={{borderRadius: 10, backgroundColor: '#2b2b2b', color: '#fff', fontSize: 0.9*vw, padding: 1*vw}}
                            placeholder="Объем"
                            placeholderTextColor="gray"
                        />
                        {obem == '' ?
                          <View></View>
                        : (
                          <Text style={{position: 'absolute', marginLeft: 8*vw, marginTop: 0.9*vw, color: '#fff', fontSize: 0.9*vw}}>м3</Text>
                        )}
                    </View>
                      {character != 'Характер авто' ?
                        <TouchableOpacity onPress={() => openerThree()} style={{borderRadius: 10, width: 14*vw, backgroundColor: '#2b2b2b', padding: 1*vw}}>
                          <Text style={{color: '#fff', fontSize: 0.9*vw}}>{character}</Text>
                        </TouchableOpacity>
                      : (
                        <TouchableOpacity onPress={() => openerThree()} style={{borderRadius: 10, width: 14*vw, backgroundColor: '#2b2b2b', padding: 1*vw}}>
                          <Text style={{color: '#fff', opacity: 0.5, fontSize: 0.9*vw}}>{character}</Text>
                        </TouchableOpacity>
                      )}
                    <View>
                      <TouchableOpacity onPress={() => fetc()} style={{ padding: 1*vw, borderRadius: 10, backgroundColor: '#0d84fb', width: '240%'}}>
                        <Text style={{color: '#fff', fontSize: 0.9*vw, textAlign: 'center'}}>Найти</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={{color: '#fff', fontSize: 0.9*vw}}>Укажите дату</Text>
                  <TouchableOpacity onPress={() => openerFour()} style={{borderRadius: 10, marginTop: 20, width: 14*vw, backgroundColor: '#2b2b2b', padding: 1*vw}}>
                    <Text style={{color: '#fff', fontSize: 0.9*vw}}>{dats}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 2, backgroundColor: '#232323', marginTop: 40 }}></View>
                <View style={{marginTop: 60}}>
                  <Text style={{color: '#fff', opacity: 0.6, fontSize: 0.9*vw}}>Найденные грузоперевозки (trans)</Text>
                </View>
                {dataTwo != null ?
                <View style={{marginTop: 20}}>
                  {dataTwo.map((index)=> {
                      return(
                        <View style={{padding: 30, marginTop: 30, borderRadius: 15, backgroundColor: '#232323', flexDirection: 'row', justifyContent: 'space-between'}}>
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
                                <TouchableOpacity onPress={() => navigation.navigate('OpenPer', {id: index.id, talker: index.talker, place_one: index.place_one, place_two: index.place_two, character: index.character, auto: index.auto, tonnage: index.tonnage, volume: index.volume, adr: index.adr, mode: index.mode, bopel: index.bopel, konnik: index.konnik, belt: index.belt, price: index.price, km: index.km, day: index.day, month: index.month, time: index.time, soder: index.soder, kurator: index.kurator})} style={{ paddingTop: 0.8*vw, paddingBottom: 0.8*vw, paddingRight: 3*vw, paddingLeft: 3*vw, borderRadius: 10, backgroundColor: '#0d84fb' }}>
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
                    <Text style={{marginTop: 30, color: '#fff', fontWeight: '800', fontSize: 20}}>Нет записей</Text>
                  </View>
                )}
                <View style={{marginTop: 60}}>
                  <Text style={{color: '#fff', fontSize: 2*vw, fontWeight: '800'}}>Информация (news)</Text>
                </View>
                {data != null ?
                  <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap'}}>

                    {data.map((index)=> {
                      return(
                        <View style={{ marginTop: 50, width: '32%'}}>
                            <Image source={{ uri: index.image }} style={{width: '100%', height: 40*vh, borderRadius: 10, zIndex: 0}} />
                            <ImageBackground source={require('../assets/temno.png')} imageStyle={{borderRadius: 10, zIndex: 1, height: 30*vh, width: '100%'}} style={{ marginTop: 10*vh, justifyContent: 'flex-end', height: 30*vh, paddingBottom: 3*vw, position: 'absolute', zIndex: 1, paddingLeft: 20 }}>
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
        <View style={{bottom: 0, zIndex: 0, marginTop: 80, marginLeft: 100, marginRight: 100, paddingTop: 40, paddingBottom: 40, borderTopWidth: 2, borderTopColor: '#232323'}}>
          <View>
            <LogoLight />
            <Text style={{marginTop: 30, color: '#fff', fontSize: 0.8*vw}}>Все права защищены © 2021</Text>
          </View>
        </View>
    </ScrollView>
  );
}