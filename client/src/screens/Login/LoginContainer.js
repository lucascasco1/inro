import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, SafeAreaView } from "react-native";
import LoginView from './LoginView';
import { Background } from '../../components';
import { loginUserFetch, profileAuthFetch } from '../../controllers/user';
import { storeData } from '../../controllers/storage';
import { useDispatch } from 'react-redux';
import styles from './styles';


export default function LoginContainer({ navigation, route }) {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const { handleIsLogin } = route.params;
  console.log(route)
  const handleFinalSubmit = inputs => {
    let token;
    loginUserFetch(inputs)
    .then(responseLogin =>  {
      token = responseLogin.token;
      return profileAuthFetch(responseLogin.token);
    })
    .then(responseUser => {
      if(responseUser.user.role == "client"){
        storeData(token);
        dispatch({type: "ADD_SESSION", payload: responseUser});
        console.log(handleIsLogin)
        handleIsLogin(true);
      }
      
    })
    .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <LoginView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};
