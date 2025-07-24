import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/styles';
import { usePermissionStore } from '../../stores/permissions/usePermissionStore';

export const PermissionsScreen = () => {
    const { locationStatus, requestLocationPermission } = usePermissionStore();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Habilitar ubicación</Text>

            <Pressable
                style={globalStyles.btnPrimary}
                onPress={() => requestLocationPermission()}
            >
                <Text style={{color:'white'}}>Habilitar locaclización</Text>
            </Pressable>

            <Text>Estado actual: {locationStatus}</Text>
        </View>
    );
}
