import React from 'react';
import { FlatList, Text, Pressable, View } from 'react-native';
import { TabProps } from './types';
import { PHONES } from '../data/phones';
import { formatPrice } from '../theme';

export function ProductsTab({ navigation }: TabProps<"Products">) {
  return (
    <FlatList
      data={PHONES}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, gap: 10 }}
      renderItem={({ item }) => (
        <Pressable
          style={{ padding: 16, backgroundColor: '#fff', borderRadius: 8, elevation: 2 }}
          onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ color: 'red', marginTop: 4 }}>{formatPrice(item.price)}</Text>
        </Pressable>
      )}
    />
  );
}