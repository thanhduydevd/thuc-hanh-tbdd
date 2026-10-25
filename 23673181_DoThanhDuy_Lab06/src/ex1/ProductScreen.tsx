import React from 'react';
import { View, Text, Image, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SelectPhoneParamList } from './SelectPhoneApp';
import { Phone } from '../types';
import { PHONE_COLORS } from '../data/phones';
import { colors, formatPrice } from '../theme';
import { Stars } from '../components/Stars';

type Props = NativeStackScreenProps<SelectPhoneParamList, 'Product'> & { phone: Phone };

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;
  const shown = picked ?? phone.defaultColor;
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={PHONE_COLORS[shown].image} style={{ width: '100%', height: 300 }} resizeMode="contain" />
      </View>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{phone.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
          <Stars value={phone.rating} />
          <Text style={{ marginLeft: 8 }}>(Xem {phone.reviewCount} đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{formatPrice(phone.price)}</Text>
          <Text style={{ textDecorationLine: 'line-through', color: 'gray' }}>{formatPrice(phone.oldPrice)}</Text>
        </View>
        
        {/* ĐÂY LÀ ĐOẠN TODO 1 */}
        <Pressable 
          style={{ borderWidth: 1, borderColor: '#C4C4C4', borderRadius: 6, padding: 10, marginTop: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} 
          onPress={() => navigation.navigate("ChooseColor", { color: picked })}
        >
          <Text style={{ fontSize: 15 }}>{picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}</Text>
          <Text style={{ position: "absolute", right: 12, fontSize: 16 }}>{">"}</Text>
        </Pressable>
      </View>

      {/* ĐÂY LÀ ĐOẠN TODO 2 */}
      <Pressable style={{ backgroundColor: colors.red, borderRadius: 6, padding: 14, marginTop: 'auto', marginBottom: 16 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>CHỌN MUA</Text>
      </Pressable>
    </SafeAreaView>
  );
}