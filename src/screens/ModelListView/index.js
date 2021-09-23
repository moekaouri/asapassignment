import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';

// Shared Components
import ModelItem from '../../sharedComponents/ModelItem';
import Input from '../../sharedComponents/Input';

// actions
import {changeData, loadData, searchData} from './actions';

const ModelListView = props => {
  // get the reducers
  const {loading, data, searchText} = useSelector(({modelReducer}) => modelReducer);

  useEffect(() => {
    props.loadData();
  }, []);

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View>
        <ModelItem
          image={item.image}
          title={item.title}
          onPress={() => navigation.navigate('Model Details', {
              id: item.id
          })}
        />
      </View>
    );
  };


  const renderEmpty = () => {
    return (
      <View>
        <Text>No Data</Text>
      </View>
    );
  };

  const renderSeperator = () => {
    return (
      <View style={{marginVertical: 25, width: '100%', paddingLeft: 15}}>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}} />
      </View>
    );
  };

  const renderLoader = () => {
    if (!loading) return null;
    return (
      <View style={{padding: 30}}>
        <ActivityIndicator size="small" color="grey" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <Input
            itemContainer={{backgroundColor : '#e8e8e8', borderRadius:30}}
            placeholderStyle={{fontStyle: 'italic'}}
            onChangeText={text => props.searchData(text)}
            //value={searchText}
            placeholder="Type to Search..."
            autoCorrect={false}
            autoCapitalize={false}
            rightIcon={require('../../assets/searchicon.png')}
          />
        </View>
      <FlatList
        data={data}
        ListFooterComponent={renderLoader}
        contentContainerStyle={{flexGrow: 1}}
        ItemSeparatorComponent={renderSeperator}
        ListEmptyComponent={renderEmpty}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 30,
    paddingBottom: 20,
   
    
  }
});

export default connect(null, {
  changeData,
  loadData,
  searchData
})(ModelListView);
