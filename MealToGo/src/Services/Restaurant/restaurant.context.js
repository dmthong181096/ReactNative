import React, {
  useState,
  useContext,
  useMemo,
  createContext,
  useEffect,
  Children,
} from "react";
import { restauratRequests, restaurantTransForm } from "./restaurant.services";

export const RestaurantContext = createContext();
export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restauratRequests()
        .then(restaurantTransForm)
        .then((results) => {
          setIsLoading(false);
          setRestaurant(results);
        })
        .catch((err) => {
          setIsLoading(false)
          setError(err);
        });
    }, 3000);
  };
  
  useEffect(() => {
    retriveRestaurants();
  }, []);
  return (
    <RestaurantContext.Provider
      value={{ restaurants,
        isLoading,
        error
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
