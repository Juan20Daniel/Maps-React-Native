import React from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Ioicons } from './Ioicons';
interface Props {
    iconName: string;
    customStyle?: StyleProp<ViewStyle>
    onPress: () => void;
}

export const FAB = ({iconName, customStyle, onPress}:Props) => {
    return (
        <Pressable onPress={onPress}
            style={({pressed}) => ([
                styles.btn, 
                customStyle,
                {opacity: pressed ? 0.5 : 1}
            ])}
        >
            <Ioicons 
                name={iconName} 
                size={30} 
                color='white'
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        zIndex: 1,
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.27,
            height: 4.5
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5
    }
})