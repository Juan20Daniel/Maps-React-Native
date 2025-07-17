import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


export const MapsScreen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
   flex:1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
    flex:1,
 },
});