import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export function AccountScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.profile}><View style={styles.avatar}><Text style={styles.avatarText}>H</Text></View><View><Text style={styles.name}>Khách hàng BookStore</Text><Text style={styles.email}>customer@bookstore.local</Text></View></View>
      {['📦  Đơn hàng của tôi', '❤️  Sách yêu thích', '📍  Địa chỉ nhận hàng', '⚙️  Cài đặt tài khoản'].map((item) => <Pressable key={item} style={styles.menu}><Text style={styles.menuText}>{item}</Text><Text>›</Text></Pressable>)}
    </ScrollView>
  );
}
const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: '#F8FAFC' }, content: { padding: 16 }, profile: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E1B4B', borderRadius: 16, padding: 18 }, avatar: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#818CF8', alignItems: 'center', justifyContent: 'center', marginRight: 14 }, avatarText: { color: '#FFF', fontSize: 24, fontWeight: '900' }, name: { color: '#FFF', fontSize: 17, fontWeight: '800' }, email: { color: '#DDE1FF', marginTop: 4 }, menu: { marginTop: 10, backgroundColor: '#FFF', padding: 17, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, menuText: { color: '#1F2937', fontWeight: '600' },
});
