import React from 'react';
import {Text,TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HeaderLeftButton = props => {
  const navigtion = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigtion.goBack()}>
      <Image
        source={require('../assets/backArrow.png')}
        style={{width: 30, height: 30}}
      />
      <Text style={styles.text}>
            Back
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 7,
        marginTop:-3,
        marginLeft:6
    }
});

export default HeaderLeftButton;
