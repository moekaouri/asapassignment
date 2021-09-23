import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';

// Shared components
import Input from '../../sharedComponents/Input';

// actions
import {changeDetailsData, loadDetailsData, updateData} from './actions';

const ModelDetailsView = props => {
  // get the reducers
  const {
    loading,
    data,
    id,
    title,
    image,
    model,
    modelName,
    modelType,
    cost,
    category,
    description,
    comment,
    notes,
  } = useSelector(({modelDetailsReducer}) => modelDetailsReducer);

  const [imageInfoToggle, setImageInfoToggle] = useState(false);
  const [notesToggle, setNotesToggle] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    props.loadDetailsData(props.route.params.id);

    navigation.addListener('focus', () => {
      props.loadDetailsData(props.route.params.id);
    });
  }, []);

  // Add a button to the right of the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate('Edit', {
              id: props.route.params.id,
            })
          }>
          <Image
            source={require('../../assets/editpen.png')}
            style={styles.editImage}
          />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const addNote = (comment) => {

    let data = {
      "name": "Mohamad Kaoury",
      "date": "23-07-2021",
      "comment": comment
    }

    notes.push(data)

    props.changeDetailsData({comment: ''})

    props.updateData(props.route.params.id,title, image, model, modelName, modelType,cost, category, description, notes);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#EAEAEA',
          borderRadius: 30,
          paddingHorizontal: 15,
          paddingTop: 20,
          paddingBottom: 50
        }}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: image}}
              style={{width: 250, height: 170, borderRadius: 15}}
            />
          </View>
          <View style={{marginVertical: 25, width: '100%'}}>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}} />
          </View>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => setImageInfoToggle(!imageInfoToggle)}>
            <Text style={styles.imageTitle}>Image Info</Text>
            <Image
              source={!imageInfoToggle ? require('../../assets/arrowDown.png') : require('../../assets/arrowUp.png')}
              style={{width: !imageInfoToggle ? 12 : 20, height: !imageInfoToggle ? 12 : 20}}
            />
          </TouchableOpacity>
          {!imageInfoToggle ? (
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.infoDataTitle}>Model</Text>
                <Text style={styles.infoDataTitle}>Model Name</Text>
                <Text style={styles.infoDataTitle}>Model Type</Text>
                <Text style={styles.infoDataTitle}>Cost</Text>
                <Text style={styles.infoDataTitle}>Category</Text>
                <Text style={styles.infoDataTitle}>Additional Description</Text>
              </View>
              <View>
                <Text style={styles.infoData}>{model}</Text>
                <Text style={styles.infoData}>{modelName}</Text>
                <Text style={styles.infoData}>{modelType}</Text>
                <Text style={styles.infoData}>{cost}</Text>
                <Text style={styles.infoData}>{category}</Text>
                <Text style={styles.infoData}>{description}</Text>
              </View>
            </View>
          ) : null}
          <View style={{marginVertical: 25, width: '100%'}}>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}} />
          </View>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => setNotesToggle(!notesToggle)}>
            <Text style={styles.imageTitle}>Notes</Text>
            <Image
              source={!notesToggle ? require('../../assets/arrowDown.png') : require('../../assets/arrowUp.png')}
              style={{width: !notesToggle ? 12 : 20, height: !notesToggle ? 12 : 20}}
            />
          </TouchableOpacity>
          {!notesToggle ? (
            <View>
              <View style={styles.inputContainer}>
                <TouchableOpacity onPress={() => addNote(comment)}>
                  <View style={styles.save}>
                    <Image
                    source={require('../../assets/save.png')}
                    style={{width: 20, height: 20}}
                    />
                    <Text style={styles.saveText}>Save</Text>
                   </View>
                </TouchableOpacity>
                <Input
                  onChangeText={text => props.changeDetailsData({comment: text})}
                  value={comment}
                  placeholder="Add a Note..."
                  autoCorrect={false}
                  autoCapitalize={false}
                  itemContainer={{backgroundColor : 'white', borderRadius:30}}
                  inputStyle= {styles.inputStyle}
                />
              </View>
              <View style={{paddingTop: 10, paddingBottom: 10}}>
                <Text style={{color:'#4E4E4E'}}  >History Notes</Text>
              </View>
              <View style={styles.notesContainer}>
                {notes.map((item, idx) => (
                  <View key={idx} style={{paddingBottom: 15}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
  },
  imageContainer: {
    alignSelf: 'center',
  },
  imageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageTitle: {
    color: '#4E4E4E',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  infoDataTitle: {
    paddingBottom: 10,
    color: '#4E4E4E',
  },
  infoData: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingBottom: 10,
  },
  notesContainer: {
    borderRadius: 15,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 20,
    marginBottom:80
  },
  name: {
    fontWeight: 'bold',
    color: '#4E4E4E',
    fontSize: 12,
  },
  date: {
    fontSize: 8,
    fontStyle: 'italic',
    color: '#4E4E4E',
  },
  comment: {
    color: '#4E4E4E',
    fontSize: 10,
  },
  editButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#4E4E4E',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#4E4E4E',
  },
  editText: {
    color: '#4E4E4E',
    fontSize: 9,
    marginTop: 3,
    marginLeft: 2,
  },
  editImage: {
    width: 12,
    height: 12,
    margin: 2,
  },
  inputContainer: {
    paddingVertical: 15
  },
  save:{
    flexDirection:'row',
    color: '#4E4E4E',
    alignSelf:'flex-end',
    paddingRight:20
  },
  saveText:{
    color: '#4E4E4E',
    fontSize: 12,
    marginTop: 3,
    marginLeft: 2,
  },
  inputStyle:{
    height:30
  }
});

export default connect(null, {
  changeDetailsData,
  loadDetailsData,
  updateData
})(ModelDetailsView);
