import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CartItem } from '../data';

export function CartScreen({ cart, onChangeQuantity, onRemove, onCheckout }: { cart: CartItem[]; onChangeQuantity: (id: number, delta: number) => void; onRemove: (id: number) => void; onCheckout: () => void }) {
  const total = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  return (
    <View style={styles.screen}>
      <View style={styles.header}><Text style={styles.title}>Giỏ hàng</Text><Text style={styles.sub}>{cart.reduce((s, i) => s + i.quantity, 0)} sản phẩm</Text></View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {cart.length === 0 ? <View style={styles.empty}><Text style={styles.emptyIcon}>🛒</Text><Text style={styles.emptyTitle}>Giỏ hàng đang trống</Text><Text style={styles.emptyText}>Hãy chọn một cuốn sách từ Trang chủ hoặc Danh mục.</Text></View> : cart.map((item) => (
          <View key={item.book.id} style={styles.row}>
            <Image source={{ uri: item.book.cover }} style={styles.cover} />
            <View style={styles.info}><Text style={styles.name} numberOfLines={2}>{item.book.title}</Text><Text style={styles.author}>{item.book.author}</Text><Text style={styles.price}>{item.book.price.toLocaleString()} đ</Text></View>
            <View style={styles.actions}><View style={styles.quantity}><Pressable style={styles.qButton} onPress={() => onChangeQuantity(item.book.id, -1)}><Text>−</Text></Pressable><Text style={styles.qty}>{item.quantity}</Text><Pressable style={styles.qButton} onPress={() => onChangeQuantity(item.book.id, 1)}><Text>+</Text></Pressable></View><Pressable onPress={() => onRemove(item.book.id)}><Text style={styles.remove}>Xóa</Text></Pressable></View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.checkout}><View><Text style={styles.totalLabel}>Tổng tiền</Text><Text style={styles.total}>{total.toLocaleString()} đ</Text></View><Pressable style={[styles.pay, cart.length === 0 && styles.disabled]} onPress={onCheckout}><Text style={styles.payText}>Thanh toán</Text></Pressable></View>
    </View>
  );
}
const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: '#F8FAFC' }, header: { padding: 16, backgroundColor: '#1E1B4B', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, title: { color: '#FFF', fontSize: 20, fontWeight: '800' }, sub: { color: '#DDE1FF', fontSize: 13 }, scroll: { flex: 1 }, content: { padding: 16, paddingBottom: 18 }, row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 10, borderRadius: 12, marginBottom: 10 }, cover: { width: 58, height: 78, borderRadius: 7, backgroundColor: '#EEF2F7' }, info: { flex: 1, paddingHorizontal: 10 }, name: { fontWeight: '800', color: '#111827', fontSize: 13 }, author: { marginTop: 3, color: '#64748B', fontSize: 11 }, price: { marginTop: 6, color: '#4338CA', fontWeight: '800' }, actions: { alignItems: 'flex-end', gap: 8 }, quantity: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 8 }, qButton: { width: 28, height: 28, alignItems: 'center', justifyContent: 'center' }, qty: { width: 24, textAlign: 'center', fontWeight: '700' }, remove: { color: '#DC2626', fontSize: 11, fontWeight: '700' }, checkout: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 14, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#E5E7EB' }, totalLabel: { color: '#64748B', fontSize: 12 }, total: { marginTop: 2, color: '#111827', fontSize: 19, fontWeight: '900' }, pay: { backgroundColor: '#4338CA', paddingHorizontal: 24, paddingVertical: 13, borderRadius: 10 }, disabled: { opacity: 0.45 }, payText: { color: '#FFF', fontWeight: '800' }, empty: { alignItems: 'center', paddingVertical: 80, paddingHorizontal: 30 }, emptyIcon: { fontSize: 48 }, emptyTitle: { marginTop: 12, fontSize: 18, fontWeight: '800' }, emptyText: { marginTop: 6, color: '#64748B', textAlign: 'center', lineHeight: 20 },
});
