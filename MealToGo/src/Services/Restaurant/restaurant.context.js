import React, {
  useState,
  useContext,
  useMemo,
  createContext,
  useEffect,
} from "react";

import { restauratRequests,restaurantTransForm } from "./restaurant.service";

import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurant] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurant([]);

    setTimeout(() => {
      restauratRequests(loc)
        .then(restaurantTransForm)
        .then((results) => {
          setIsLoading(false);
          setRestaurant(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 0);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
