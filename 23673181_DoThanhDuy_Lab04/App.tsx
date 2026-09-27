// GIỜ 5 — TỔNG HỢP HOÀN THIỆN
// Giữ nguyên toàn bộ layout/chức năng của Giờ 1 -> Giờ 4 và bổ sung:
// Bottom Tab, Danh mục, Giỏ hàng, Tài khoản, thêm/xóa/tăng/giảm sản phẩm,
// tính tổng tiền và mô phỏng thanh toán. Không dùng Navigation/API theo đề.
import React, { useMemo, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BOOKS, CartItem } from './data';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CategoryScreen } from './screens/CategoryScreen';
import { CartScreen } from './screens/CartScreen';
import { AccountScreen } from './screens/AccountScreen';
import { BottomTabBar, TabKey } from './components/BottomTabBar';

export default function App() {
  const [tab, setTab] = useState<TabKey>('home');
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const addToCart = (bookId: number) => {
    const book = BOOKS.find((b) => b.id === bookId);
    if (!book) return;
    setCart((current) => {
      const found = current.find((item) => item.book.id === bookId);
      if (found) {
        return current.map((item) => item.book.id === bookId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { book, quantity: 1 }];
    });
  };

  const changeQuantity = (bookId: number, delta: number) => {
    setCart((current) => current
      .map((item) => item.book.id === bookId ? { ...item, quantity: item.quantity + delta } : item)
      .filter((item) => item.quantity > 0));
  };

  const removeFromCart = (bookId: number) => {
    setCart((current) => current.filter((item) => item.book.id !== bookId));
  };

  const openBook = (id: number) => setSelectedBookId(id);
  const backFromDetail = () => setSelectedBookId(null);
  const openCart = () => { setSelectedBookId(null); setTab('cart'); };

  const finishCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Giỏ hàng trống', 'Vui lòng thêm sách trước khi thanh toán.');
      return;
    }
    Alert.alert('Thanh toán thành công', 'Đơn hàng demo đã được tạo.');
    setCart([]);
    setTab('home');
  };

  const renderContent = () => {
    // Giữ nguyên màn hình Chi tiết của Giờ 4; nó được mở từ Home/Danh mục.
    if (selectedBook) {
      return (
        <BookDetailScreen
          book={selectedBook}
          onBack={backFromDetail}
          onAddToCart={() => addToCart(selectedBook.id)}
          onBuyNow={() => { addToCart(selectedBook.id); setSelectedBookId(null); setTab('cart'); }}
        />
      );
    }

    switch (tab) {
      case 'categories':
        return <CategoryScreen onPressBook={openBook} />;
      case 'cart':
        return <CartScreen cart={cart} onChangeQuantity={changeQuantity} onRemove={removeFromCart} onCheckout={finishCheckout} />;
      case 'account':
        return <AccountScreen />;
      case 'home':
      default:
        return <HomeScreen cartCount={cartCount} onPressBook={openBook} onPressCart={openCart} />;
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>{renderContent()}</View>
      {!selectedBook && <BottomTabBar activeTab={tab} cartCount={cartCount} onChange={setTab} />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F8FAFC' },
  body: { flex: 1 },
});
