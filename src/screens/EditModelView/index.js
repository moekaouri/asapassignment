import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';

// actions
import {changeData, loadData, updateData} from './actions';

// Shared Components
import Input from '../../sharedComponents/Input';

const EditModelView = props => {
  useEffect(() => {
    props.loadData(props.route.params.id);
  }, []);

  const navigation = useNavigation();

  // get the reducers
  const {
    loading,
    data,
    title,
    image,
    model,
    modelName,
    modelType,
    cost,
    category,
    description,
    notes,
  } = useSelector(({editReducer}) => editReducer);

  const onUpdate = async () => {
    props.updateData(
      props.route.params.id,
      title,
      image,
      model,
      modelName,
      modelType,
      cost,
      category,
      description,
      notes,
    );
    navigation.pop();
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Model</Text>
          <Input
            onChangeText={text => props.changeData({model: text})}
            value={model}
            placeholder="Model"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Model Name</Text>
          <Input
            onChangeText={text => props.changeData({modelName: text})}
            value={modelName}
            placeholder="Model Name"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Model Type</Text>
          <Input
            onChangeText={text => props.changeData({modelType: text})}
            value={modelType}
            placeholder="Model Type"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Cost</Text>
          <Input
            onChangeText={text => props.changeData({cost: text})}
            value={cost}
            placeholder="Cost"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Category</Text>
          <Input
            onChangeText={text => props.changeData({category: text})}
            value={category}
            placeholder="Category"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Additional Description</Text>
          <Input
            onChangeText={text => props.changeData({description: text})}
            value={description}
            placeholder="Additional Description"
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={onUpdate}>
          {!loading ? (
            <Text style={{color: '#4E4E4E', fontWeight: 'bold'}}>Update</Text>
          ) : (
            <ActivityIndicator size="small" color="grey" />
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  inputContainer: {
    paddingBottom: 15,
  },
  inputTitle: {
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#4E4E4E',
  },
  buttonContainer: {
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
    width: '50%',
    alignSelf: 'center',
  },
});

export default connect(null, {
  changeData,
  loadData,
  updateData
})(EditModelView);
