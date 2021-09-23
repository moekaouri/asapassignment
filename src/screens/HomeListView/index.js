import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';

// actions
import {changeData, loadData} from './actions';

// Shared Components
import HomeItem from '../../sharedComponents/homeItem';

const Home = props => {
  useEffect(() => {
    props.loadData();
  }, []);

  // get the reducers
  const {loading, data} = useSelector(({homeReducer}) => homeReducer);

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <HomeItem
        image={item.image}
        title={item.title}
        onPress={() => navigate(item.id)}
      />
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
    return <View style={{height: 15, width: '100%'}} />;
  };

  const renderLoader = () => {
    if (!loading) return null;
    return (
      <View style={{padding: 30}}>
        <ActivityIndicator size="small" color="grey" />
      </View>
    );
  };

  const navigate = id => {
    if (id == 1) {
      navigation.navigate('Model');
    } else if (id == 2) {
      navigation.navigate('Model');
    } else {
      navigation.navigate('Model');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListFooterComponent={renderLoader}
        contentContainerStyle={{flexGrow: 1}}
        ItemSeparatorComponent={renderSeperator}
        ListEmptyComponent={renderEmpty}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 40,
  },
});

export default connect(null, {
  changeData,
  loadData,
})(Home);
