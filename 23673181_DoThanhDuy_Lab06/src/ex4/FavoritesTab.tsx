import React from 'react';
import { FlatList, Text, Pressable } from 'react-native';
import { TabProps } from './types';
import { PHONES } from '../data/phones';
import { useFavorites } from './FavoritesContext';
import { formatPrice } from '../theme';

export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
  const { ids } = useFavorites();
  const favPhones = PHONES.filter(p => ids.includes(p.id));

  if (favPhones.length === 0) {
    return <Text style={{ padding: 16, textAlign: 'center' }}>Chưa có sản phẩm nào được lưu.</Text>;
  }

  return (
    <FlatList
      data={favPhones}
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