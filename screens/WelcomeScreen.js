import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import React, { useEffect, useRef, useState } from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MapView,{ Marker } from 'react-native-maps';
import {initHW4AppDB, setupItemDataListener, storeItemData} from "../helpers/fb-termproject";

import { Feather } from "@expo/vector-icons";



const WelcomeScreen = ({ route, navigation }) => {


  const [imageUrl, setImageUrl] = useState("https://thumbs.dreamstime.com/z/s-deal-people-buyer-seller-handshake-23999195.jpg");


  useEffect(() => {
    try {
      initHW4AppDB();
    } catch (err) {
      console.log(err);
    }
    itemsDataList = setupItemDataListener();
  }, []);
    
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Home", {})
          }
        >
          <Feather
            style={{ marginRight: 10 }}
            name="home"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      ),
    });
  });

    return (
        <Card>
          <Card.Title>Buyer and Seller App</Card.Title>
          <Card.Image source={{uri: imageUrl}} />
          <Card.Divider/>
        </Card>
    )
};

const styles = StyleSheet.create({
  mapStyle: {
    flex: 3,
  },
});

export default WelcomeScreen;
