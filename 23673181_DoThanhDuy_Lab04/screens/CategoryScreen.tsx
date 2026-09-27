import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BOOKS, CATEGORIES } from '../data';
import { CategoryChips } from '../components/CategoryChips';
import { BookGrid } from '../components/BookGrid';

export function CategoryScreen({ onPressBook }: { onPressBook: (id: number) => void }) {
  const [selected, setSelected] = useState('Tất cả');
  const categories = ['Tất cả', ...CATEGORIES];
  const filtered = selected === 'Tất cả' ? BOOKS : BOOKS.filter((_, index) => CATEGORIES[index % CATEGORIES.length] === selected);
  return (
    <View style={styles.screen}>
      <View style={styles.header}><Text style={styles.title}>Danh mục sách</Text><Text style={styles.sub}>Chọn danh mục để xem sách</Text></View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.chips}>
          {categories.map((name) => <Text key={name} onPress={() => setSelected(name)} style={[styles.chip, selected === name && styles.selectedChip, selected === name && styles.selectedText]}>{name}</Text>)}
        </View>
        <Text style={styles.result}>{selected} · {filtered.length} sách</Text>
        <BookGrid books={filtered} onPressBook={onPressBook} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8FAFC' }, header: { padding: 16, backgroundColor: '#1E1B4B' }, title: { color: '#FFF', fontSize: 20, fontWeight: '800' }, sub: { color: '#DDE1FF', marginTop: 4, fontSize: 13 }, content: { padding: 16, paddingBottom: 24 }, chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 18, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1', color: '#475569', overflow: 'hidden' }, selectedChip: { backgroundColor: '#4338CA', borderColor: '#4338CA' }, selectedText: { color: '#FFFFFF', fontWeight: '700' }, result: { marginTop: 20, marginBottom: 10, fontSize: 15, fontWeight: '800', color: '#111827' },
});
