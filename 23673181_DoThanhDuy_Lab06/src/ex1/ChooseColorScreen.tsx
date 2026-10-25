import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SelectPhoneParamList } from './SelectPhoneApp';
import { ColorKey, Phone } from '../types';
import { COLOR_ORDER, PHONE_COLORS } from '../data/phones';
import { colors, formatPrice } from '../theme';

type Props = NativeStackScreenProps<SelectPhoneParamList, 'ChooseColor'> & { phone: Phone };

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  const [picked, setPicked] = useState<ColorKey | undefined>(route.params?.color);
  const [line1, line2] = phone.name.split(" - ");
  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.3, flexDirection: 'row', backgroundColor: '#fff', padding: 16 }}>
        <Image source={PHONE_COLORS[picked ?? phone.defaultColor].image} style={{ width: 100, height: 120 }} resizeMode="contain" />
        <View style={{ flex: 1, marginLeft: 16 }}>
          <Text style={{ fontSize: 14 }}>{line1}</Text>
          <Text style={{ fontSize: 14 }}>{line2}</Text>
          
          {/* TODO 3 */}
          {picked && (
            <>
              <Text style={{ marginTop: 4 }}>Màu: <Text style={{ fontWeight: 'bold' }}>{PHONE_COLORS[picked].label}</Text></Text>
              <Text>Cung cấp bởi <Text style={{ fontWeight: 'bold' }}>{phone.supplier}</Text></Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 4 }}>{formatPrice(phone.price)}</Text>
            </>
          )}
        </View>
      </View>

      <View style={{ flex: 0.7, backgroundColor: colors.grey, padding: 16 }}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Chọn một màu bên dưới:</Text>
        <View style={{ alignItems: 'center', gap: 12, flex: 1 }}>
          {COLOR_ORDER.map((key) => (
            <Pressable 
              key={key} 
              onPress={() => setPicked(key)}
              style={[{ width: 80, height: 80, backgroundColor: PHONE_COLORS[key].hex }, picked === key && { borderWidth: 2, borderColor: 'blue' }]} 
            />
          ))}
        </View>
        
        {/* TODO 4 */}
        <Pressable 
          style={{ backgroundColor: colors.blue, borderRadius: 4, padding: 12, marginTop: 'auto' }}
          onPress={() => navigation.navigate("Product", { color: picked }, { merge: true })}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>XONG</Text>
        </Pressable>
      </View>
    </View>
  );
}