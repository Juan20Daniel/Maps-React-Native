import { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';
import { usePermissionStore } from '../stores/permissions/usePermissionStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/StackNavigator';

export const PermissionsChecker = ({children}:PropsWithChildren) => {
    const { locationStatus, checkLocationPermission } = usePermissionStore();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        if(locationStatus === 'granted') return navigation.reset({
            routes:[{name:'Maps'}]
        })
        if(locationStatus !== 'undetermined') return navigation.reset({
            routes:[{name:'Permissions'}]
        })
        
    },[locationStatus]);
    useEffect(() => {
        checkLocationPermission();
    },[]);
    useEffect(() => {
        const subcription = AppState.addEventListener('change', (nextAppState) => {
            if(nextAppState === 'active') {
                checkLocationPermission();
            }
        });
        
        return () => {
            subcription.remove();
        }
    },[]);
    return (
        <>
            {children}
        </>
    );
}
