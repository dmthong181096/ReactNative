import camelize from "camelize";
import {mocks, mockImages} from "./mock"
export const restauratRequests = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found Restarant");
    }
    resolve(mock);
  });
};
export const restaurantTransForm = ({ results = [] })=> {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = ["https://picsum.photos/700"];
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
      rating: restaurant.rating
    };
  });
  return camelize(mappedResults);
}
