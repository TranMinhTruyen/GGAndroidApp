import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Spinner} from 'native-base';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  });

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../utils/image/GGexamplelogo.jpg')}
        resizeMode={'stretch'}
      />
      <Spinner size="lg" color={'#ff0000'} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: '50%',
    width: '90%',
  },
});
export default Splash;
