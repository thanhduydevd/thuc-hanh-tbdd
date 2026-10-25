import React, { useState, createContext, useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../theme';

// 1. Tạo Context để lưu trạng thái dùng chung
type SettingsContextType = {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  notify: boolean;
  setNotify: (val: boolean) => void;
};
const SettingsContext = createContext<SettingsContextType | null>(null);
const useSettings = () => useContext(SettingsContext)!;

type DrawerParamList = { Home: undefined; Profile: undefined; Settings: undefined };
const Drawer = createDrawerNavigator<DrawerParamList>();

// 2. Màn hình Home (Đọc isDark để đổi màu)
function HomeScreen() {
  const { isDark } = useSettings();
  const bg = isDark ? '#121212' : '#fff';
  const textCol = isDark ? '#fff' : '#000';

  return (
    <View style={[s.center, { backgroundColor: bg }]}>
      <Text style={[s.big, { color: textCol }]}>Xin chào 👋</Text>
    </View>
  );
}

// 3. Màn hình Profile (Đọc isDark để đổi màu)
function ProfileScreen() {
  const { isDark } = useSettings();
  const bg = isDark ? '#121212' : '#fff';
  const textCol = isDark ? '#fff' : '#000';

  return (
    <View style={[s.center, { backgroundColor: bg }]}>
      <View style={s.avatar}><Text style={s.avatarText}>NA</Text></View>
      <Text style={[s.big, { color: textCol }]}>Nguyễn Văn An</Text>
      <Text style={s.muted}>an.nguyen@example.com</Text>
    </View>
  );
}

// 4. Màn hình Settings (Điều khiển Switch)
function SettingsScreen() {
  const { isDark, setIsDark, notify, setNotify } = useSettings();
  const bg = isDark ? '#121212' : '#fff';
  const textCol = isDark ? '#fff' : '#000';

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: bg }}>
      <View style={s.row}>
        <Text style={{ fontSize: 18, color: textCol }}>Nhận thông báo</Text>
        <Switch value={notify} onValueChange={setNotify} trackColor={{ true: colors.blue }} />
      </View>
      <View style={s.row}>
        <Text style={{ fontSize: 18, color: textCol }}>Giao diện tối</Text>
        <Switch value={isDark} onValueChange={setIsDark} trackColor={{ true: colors.blue }} />
      </View>
      <Text style={{ marginTop: 20, color: colors.muted, textAlign: 'center' }}>
        Thông báo: {notify ? "BẬT" : "TẮT"} · Giao diện: {isDark ? "tối" : "sáng"}
      </Text>
    </View>
  );
}

// 5. App chính bọc Provider
export function DrawerApp() {
  const [isDark, setIsDark] = useState(false);
  const [notify, setNotify] = useState(true);

  return (
    <SettingsContext.Provider value={{ isDark, setIsDark, notify, setNotify }}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={({ route }) => ({
          drawerActiveTintColor: colors.red,
          // Đổi màu thanh Header theo chế độ tối luôn cho đồng bộ
          headerStyle: { backgroundColor: isDark ? '#1f1f1f' : '#fff' },
          headerTintColor: isDark ? '#fff' : '#000',
          drawerStyle: { backgroundColor: isDark ? '#121212' : '#fff' },
          drawerInactiveTintColor: isDark ? '#ccc' : '#333',
          drawerIcon: ({ color, size }) => {
            let iconName: any = "home-outline";
            if (route.name === "Profile") iconName = "person-outline";
            else if (route.name === "Settings") iconName = "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Cá nhân" }} />
          <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: "Cài đặt" }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SettingsContext.Provider>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  big: { fontSize: 24, fontWeight: 'bold' },
  muted: { color: colors.muted, marginTop: 4 },
  avatar: { width: 96, height: 96, borderRadius: 48, backgroundColor: colors.blue, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  avatarText: { fontSize: 40, color: 'white' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingVertical: 10, borderBottomWidth: 1, borderColor: '#555' }
});