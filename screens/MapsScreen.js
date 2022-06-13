
import { StyleSheet, Text, View } from 'react-native';
import tailWind from 'tailwind-react-native-classnames';
import HomeScreen from './HomeScreen';
import MapView,{ Marker } from 'react-native-maps';
import React, { useEffect, useRef, useState } from "react";

const MapsScreen = ({ route, navigation }) => {

  const [lat, setLat] =
    useState(route.params.item.itemLocation.lat);
  const [lng, setLng] =
    useState(route.params.item.itemLocation.lng);
  const [name, setName] =
    useState(route.params.item.itemName);  
  const [description, setDescription] =
    useState(route.params.item.itemDescription);


  console.log(lng)
  console.log(lat)
  
  return (
  <View>
    <View style={tailWind`h-1/2`}>
            <MapView style = {styles.mapStyle}
              initialRegion={{
              latitude: parseFloat(lat),
              longitude: parseFloat(lng),
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
             }}>
              <Marker 
                 coordinate={{
                  latitude: parseFloat(lat),
                  longitude: parseFloat(lng),
                 }}
                 title="Seller location"
                 description={description}
              />
            </MapView>      
    </View>
    <View style={tailWind`h-1/2`}>
       <Text style={styles.textfont}>{name}</Text>
       <Text style={styles.textfont}>{description}</Text>            
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textfont: {
    fontSize: 20,
  },
  mapStyle: {
    flex: 3,
  },

});

export default MapsScreen;
