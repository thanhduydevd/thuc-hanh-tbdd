import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { RootProps } from './types';
import { PHONES, PHONE_COLORS } from '../data/phones';
import { useFavorites } from './FavoritesContext';
import { colors, formatPrice } from '../theme';
import { Stars } from '../components/Stars';

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  const { id } = route.params;
  const phone = PHONES.find(p => p.id === id);
  const { has, toggle } = useFavorites();

  if (!phone) return <Text style={{ padding: 16 }}>Không tìm thấy sản phẩm #{id}</Text>;

  const isFav = has(phone.id);
  const imageSource = PHONE_COLORS[phone.defaultColor as keyof typeof PHONE_COLORS]?.image ?? PHONE_COLORS['blue'].image;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Image source={imageSource} style={{ width: '100%', height: 250 }} resizeMode="contain" />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>{phone.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <Stars value={phone.rating} />
      </View>
      <Text style={{ fontSize: 22, color: colors.red, fontWeight: 'bold' }}>{formatPrice(phone.price)}</Text>
      <Text style={{ marginTop: 8, fontSize: 16 }}>Cung cấp bởi: <Text style={{ fontWeight: 'bold' }}>{phone.supplier}</Text></Text>

      <Pressable
        style={{ marginTop: 20, padding: 14, backgroundColor: isFav ? colors.line : '#ffeaeb', borderRadius: 8 }}
        onPress={() => toggle(phone.id)}
      >
        <Text style={{ color: isFav ? 'black' : colors.red, fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>
          {isFav ? "♥ Đã lưu" : "♡ Lưu vào yêu thích"}
        </Text>
      </Pressable>
    </View>
  );
}