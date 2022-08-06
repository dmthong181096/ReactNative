import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./locationn.services";

export const LocationContext = createContext();
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

function onSearch (searchKeyword){
  
  searchKeyword = searchKeyword.toLowerCase()
  console.log(searchKeyword);
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((data) => {
        setIsLoading(false);
        setLocation(data);
        console.log(data)
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }
 
  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch.bind(this),
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
