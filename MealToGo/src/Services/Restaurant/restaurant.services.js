import {mocks} from "../Restaurant/mock"


const camelize = require('camelize');
export const restauratRequests = (
    location = "51.219448,4.402464"
) => {
    return new Promise ((resolve, reject)=> {
        const  mock = mocks[location];
        if (!mock) {
            reject("Not found")
        }
        resolve(mock)
    })
}
restauratRequests().then(restaurantTransForm.bind())
.then( (transformedRespone)=>{console.log(transformedRespone)})
.catch((err)=> {
    console.log(err)
});
export function restaurantTransForm({results = []}) {
    const mappedResults = results.map( (restaurant) => {
        restaurant.photos = ["https://picsum.photos/700"]
        return {
            ...restaurant ,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    }) 
    // console.log((mappedResults))
    return camelize(mappedResults)
    
} 