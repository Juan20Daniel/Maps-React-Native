import { useEffect, useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../../../infrastructure/interfaces/locations';
import { FAB } from '../ui/FAB';
import { useLocationStorage } from '../../stores/locations/useLocationStorage';

interface Props {
    showUserLocation?: boolean;
    initialLocation: Location;
}

export const Maps = ({ showUserLocation=false, initialLocation }:Props) => {
    const [ userLocation, setUserLocation ] = useState(false);
    const { getLocation, lastKnownLocation } = useLocationStorage();
    const cameraLocation = useRef<Location>(initialLocation);
    const mapRef = useRef<MapView|null>(null);
    useEffect(() => {
        const activeUserLocation = setTimeout(() => {
            setUserLocation(showUserLocation);
        },100);
        
        return () => {
            clearTimeout(activeUserLocation);
        }
    },[]);

    const moveCameraToLocation = (location: Location) => {
        if(!mapRef.current) return;
        mapRef.current.animateCamera({
            center: location,
        })
    }

    const moveToCurrentLocation = async () => {
        const locaiton = await getLocation();
        if(!locaiton) return;
        moveCameraToLocation(locaiton);
    }
    
    return (
        <>
            <MapView
                ref={mapRef}
                showsUserLocation={userLocation}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsMyLocationButton={false}
                region={{
                    latitude: cameraLocation.current.latitude,
                    longitude: cameraLocation.current.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
            <FAB 
                iconName='compass-outline'
                onPress={moveToCurrentLocation}
                customStyle={{
                    bottom: 70,
                    right: 20
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex:1
    }
});