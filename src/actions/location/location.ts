import Geolocation from '@react-native-community/geolocation';
import { Location } from '../../infrastructure/interfaces/locations';

export const getCurrentLocatin = async ():Promise<Location> => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(info => {
            resolve({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude
            })
        },(error) => {
            console.log(error);
            reject(error);
        },{
            enableHighAccuracy: true
        });
    })
}