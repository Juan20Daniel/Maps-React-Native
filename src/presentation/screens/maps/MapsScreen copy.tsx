import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useRef, useState } from 'react';

export const MapsScreen = () => {
  const [ isFocus, setIsFocuse ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');
  const inputRef = useRef<TextInput>(null);
  const clearInput = () => {
    setInputValue('');
    inputRef.current?.blur();
    setIsFocuse(false);
  }
  const handleFocuse = () => {
    if(isFocus) {
      inputRef.current?.blur();
      if(inputValue === '') {
        setIsFocuse(false);
      }
    }
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={handleFocuse}>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <View style={{...styles.boxInput, borderColor: isFocus ? 'blue' : 'white' }}>
            <View style={styles.input}>
              <Text style={{
                ...styles.placeholder, 
                transform:[{translateY:isFocus ? -25 : 0}],
                fontSize: isFocus ? 14 : 17
              }}>
                Ingresa tu correo electrónico
              </Text>
              <TextInput
                value={inputValue}
                onChangeText={setInputValue}
                ref={inputRef}
                onFocus={() => setIsFocuse(true)}
                style={{
                  ...styles.inputText,
                  transform:[{translateY:isFocus ? 10 : 0}]
                }}
              />
            </View>
            <View style={styles.boxBtnClear}>
              {inputValue !== '' && 
                <Pressable style={styles.btnClear} onPress={clearInput}>
                  <Text style={styles.textBtnClear}>X</Text>
                </Pressable>
              }
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 container: {
   flex:1,
 },
 map: {
   flex:1
 },
  containerInput: {
    position: 'absolute',
    top: 60,
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    zIndex: 1,
    justifyContent: 'center'
  },
  boxInput: {
    width: '100%',
    height: 80,
    paddingLeft: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
  },
  input: {
    position: 'relative',
    justifyContent: 'center',
    flex: 1,
  },
  placeholder: {
    marginLeft: 5
  },
  inputText: {
    position: 'absolute',
    width: '100%',
    fontSize: 20,
  },
  boxBtnClear: {
    width: 40,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  btnClear: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.84)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  textBtnClear: {
    color: 'white'
  }
});