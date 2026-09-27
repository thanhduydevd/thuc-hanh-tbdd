import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export type TabKey = 'home' | 'categories' | 'cart' | 'account';

const tabs: { key: TabKey; icon: string; label: string }[] = [
  { key: 'home', icon: '⌂', label: 'Trang chủ' },
  { key: 'categories', icon: '▦', label: 'Danh mục' },
  { key: 'cart', icon: '🛒', label: 'Giỏ hàng' },
  { key: 'account', icon: '♙', label: 'Tài khoản' },
];

export function BottomTabBar({ activeTab, cartCount, onChange }: { activeTab: TabKey; cartCount: number; onChange: (tab: TabKey) => void }) {
  return (
    <View style={styles.bar}>
      {tabs.map((tab) => {
        const active = activeTab === tab.key;
        return (
          <Pressable key={tab.key} style={styles.tab} onPress={() => onChange(tab.key)}>
            <View>
              <Text style={[styles.icon, active && styles.activeText]}>{tab.icon}</Text>
              {tab.key === 'cart' && cartCount > 0 && <View style={styles.badge}><Text style={styles.badgeText}>{cartCount}</Text></View>}
            </View>
            <Text style={[styles.label, active && styles.activeText]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { height: 68, flexDirection: 'row', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingBottom: 4 },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 2 },
  icon: { fontSize: 21, textAlign: 'center', color: '#64748B' },
  label: { fontSize: 11, fontWeight: '600', color: '#64748B' },
  activeText: { color: '#4338CA', fontWeight: '800' },
  badge: { position: 'absolute', top: -5, right: -12, minWidth: 17, height: 17, borderRadius: 9, backgroundColor: '#DC2626', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 3 },
  badgeText: { color: '#FFFFFF', fontSize: 9, fontWeight: '800' },
});
