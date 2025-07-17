import { createStackNavigator } from "@react-navigation/stack"; 
import { MapsScreen } from "../screens/maps/MapsScreen";
import { LoadingScreen } from "../screens/loading/LoadingScreen";
import { PermissionsScreen } from "../screens/permissions/PermissionsScreen";

export type RootStackParamList = {
    Maps: undefined;
    Loading:undefined;
    Permissions: undefined;   
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Loading'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name='Loading' component={LoadingScreen} />
            <Stack.Screen name='Maps' component={MapsScreen} />
            <Stack.Screen name='Permissions' component={PermissionsScreen} />
        </Stack.Navigator>
    )
}