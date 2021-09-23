import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const HomeItem = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.contentContainer}>
        <Image source={{uri: props.image}} style={{width: 18, height: 18}} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.icon}>
        <Image
          source={require('../assets/rightArrow.png')}
          style={{width: 15, height: 15}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAEAEA',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
      paddingLeft: 15,
      fontSize: 20
  }
});

export default HomeItem;
