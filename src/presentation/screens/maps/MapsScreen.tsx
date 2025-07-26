import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Maps } from '../../components/maps/Maps';
import { useLocationStorage } from '../../stores/locations/useLocationStorage';
import { LoadingScreen } from '../loading/LoadingScreen';

export const MapsScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStorage();

  useEffect(() => {
    if(lastKnownLocation === null) {
      getLocation();
    }
  },[]);

  if(lastKnownLocation === null) {
    return <LoadingScreen />
  }

  return (
    <View style={styles.container}>
      <Maps 
        showUserLocation={true}
        initialLocation={lastKnownLocation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});