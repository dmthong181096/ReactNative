import React, { useContext, useEffect, useState } from "react";
import { View, Text, SafeAreaVie } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../Services/location/location.context";
import { Search } from "../Components/search/search.component";
import {RestaurantContext} from "../../../Services/Restaurant/restaurant.context"
import { MapCallOut } from "../Components/search/map-callout.component";
const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = ( {navigation}) => {
  const {location} = useContext(LocationContext)
  const { restaurants = []} = useContext(RestaurantContext)
  const [latDelta, setLatDelta] = useState(0)
  const {viewport,lng,lat} = location
  console.log(viewport)
  useEffect( ()=>{
    const northeastLat = viewport.northeast.lat
    const southwestLng = viewport.southwest.lat
    setLatDelta(northeastLat - southwestLng)
    console.log("Lat---",latDelta)
  },[location,viewport])
  return (
    <>
   <Search></Search>
    <Map
    region={{
      latitude: lat,
      longitude: lng,
      latitudeDelta: latDelta,
      longitudeDelta: 0.02,       
    }}
    >
      {restaurants.map( (restaurant)=> {
        return <MapView.Marker
        key={restaurant.name}
        title = {restaurant.name}
        coordinate ={{
          latitude: restaurant.geometry.location.lat,
          longitude: restaurant.geometry.location.lng,
        }}
        >
          <MapView.Callout onPress={ ()=>navigation.navigate("RestaurantsDetail",{restaurantInfo: restaurant})} >
              <MapCallOut restaurant={restaurant}></MapCallOut>
          </MapView.Callout>


        </MapView.Marker>
      
      })}

    </Map>
    </>
    
  );
};
