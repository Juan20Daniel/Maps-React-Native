import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const MapsScreen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 38.78825,
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
 },
 map: {
   flex:1
 },
});