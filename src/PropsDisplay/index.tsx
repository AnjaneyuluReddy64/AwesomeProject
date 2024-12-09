import {View, Text, FlatList} from 'react-native';
import React from 'react';

const PropsDisplay = (props: any) => {
  const {fruits} = props;

  const renderItem = ({item}: {item: any}) => (
    <View
      style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#555'}}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList data={fruits} renderItem={renderItem} />
    </View>
  );
};

export default PropsDisplay;
