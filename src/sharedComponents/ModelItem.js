import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const ModelItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          source={{uri: props.image}}
          style={{width: 150, height: 100, borderRadius: 15}}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 15
  },
});

export default ModelItem;
