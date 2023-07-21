import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D2E',
  },
  image: {
    width: 250,
    height: 240,
    margin: '5%',
  },
  textInput: {
    width: '90%',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    color: '#fff',
    margin: 10,
    paddingHorizontal: 8,
  },
  button: {
    width: '80%',
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
  },
  contentInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textButton: {
    fontWeight: 'bold',
    color: '#922222',
  },
});

export default styles;
