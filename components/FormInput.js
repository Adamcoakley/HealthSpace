import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
// mobile window height and width from Dimensions
import {windowHeight, windowWidth} from '../utils/Dimensions';
// icon
import { Feather } from '@expo/vector-icons'; 

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Feather name={ iconType } size={18} color="#000" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,
    width: '80%',
    height: windowHeight / 18,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 14,
    fontFamily: 'Verdana',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});