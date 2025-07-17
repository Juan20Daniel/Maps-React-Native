
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const LoadingScreen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={30} color='black' />
        </View>
    );
}
