import {
  useState,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Header } from './components/Header';

import { CategoryChips } from './components/CategoryChips';

import { BookGrid } from './components/BookGrid';

import { FloatingCartButton } from './components/FloatingCartButton';

import { BOOKS } from './data';

export default function App() {

  const [
    cartCount,
    setCartCount,
  ] = useState(0);

  return (
    <View style={styles.screen}>

      {/* 1. Header cố định */}
      <Header />


      {/* 2. Nội dung có thể cuộn */}
      <ScrollView
        contentContainerStyle={styles.content}
      >

        <Text style={styles.title}>
          Danh mục
        </Text>

        <CategoryChips />


        <Text style={styles.title}>
          Sách nổi bật
        </Text>

        <BookGrid
          books={BOOKS}
          onPressBook={(id) => {
            console.log("Đã bấm vào sách có id:", id);
          }}
        />

      </ScrollView>


      {/* 3. Floating Cart nằm ngoài ScrollView */}
      <FloatingCartButton
        count={cartCount}
        onPress={() =>
          setCartCount(
            cartCount + 1
          )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: '#F8FAFC',

    position: 'relative',
  },

  content: {
    padding: 16,

    // Quan trọng:
    // tránh nút giỏ che sách cuối
    paddingBottom: 100,
  },

  title: {
    fontSize: 21,

    fontWeight: 'bold',

    color: '#1E293B',

    marginTop: 10,

    marginBottom: 12,
  },
});