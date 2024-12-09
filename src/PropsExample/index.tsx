import {View, Text} from 'react-native';
import React from 'react';
import PropsDisplay from './PropsChaild';

const fruits = [
  {id: '1', name: 'Apple'},
  {id: '2', name: 'Banana'},
  {id: '3', name: 'Orange'},
  {id: '4', name: 'Mango'},
  {id: '5', name: 'Grapes'},
  {id: '6', name: 'Pineapple'},
  {id: '7', name: 'Strawberry'},
  {id: '8', name: 'Blueberry'},
  {id: '9', name: 'Kiwi'},
  {id: '10', name: 'Papaya'},
];

const PropsExample = () => {
  return (
    <View>
      <Text>List of Fruits</Text>
      <PropsDisplay fruits={fruits} />
    </View>
  );
};

export default PropsExample;
