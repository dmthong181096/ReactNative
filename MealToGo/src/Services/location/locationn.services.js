import camelize from "camelize";
import { locations } from "./location.mock";

export function locationRequest(searchTerm){
    return new Promise( (resolve, reject) => {
        const locationMock = locations[searchTerm]
        if (!locationMock) {
            reject("Not Found")
        }
        resolve(locationMock)
    })
}
export const locationTransform =(data)=> {
    const formattedRespone = camelize(data)
    const {geometry} = formattedRespone.results[0]
    console.log(geometry);
    const {lng, lat} = geometry.location
    return {lng,lat}
}
