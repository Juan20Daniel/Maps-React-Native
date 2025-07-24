import { check, openSettings, PERMISSIONS, request, PermissionStatus as RNPermissionStatus } from "react-native-permissions"
import { PermissionStatus } from "../../infrastructure/interfaces/permissions";
import { Platform } from "react-native";

export const requestLocationPermission = async (): Promise<PermissionStatus> => {

    let status: RNPermissionStatus = 'unavailable';

    if(Platform.OS === 'ios') return 'denied';
    else if(Platform.OS === 'android') {
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
        throw new Error("Plataforma no soportada");
    }

    if(status === 'blocked') {
        await openSettings();
        return await checkLocationPermission();
    }

    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> =  {
        granted:'granted',
        denied:'denied',
        blocked:'blocked',
        limited:'limited',
        unavailable:'unavailable',
    }

    return permissionMapper[status]??'unavailable';
}

export const checkLocationPermission = async ():Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable';

    if(Platform.OS === 'ios') return 'denied';
    else if(Platform.OS === 'android') {
        status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
        throw new Error("Plataforma no soportada");
    }

    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> =  {
        granted:'granted',
        denied:'denied',
        blocked:'blocked',
        limited:'limited',
        unavailable:'unavailable',
    }
    return permissionMapper[status]??'unavailable';

}