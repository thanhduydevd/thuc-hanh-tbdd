import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { PHONES } from "../data/phones";
import { colors } from "../theme";

type TabParamList = { Home: undefined; Search: undefined; Profile: undefined };
const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<keyof TabParamList, [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]> = {
  Home: ["home", "home-outline"],
  Search: ["search", "search-outline"],
  Profile: ["person", "person-outline"],
};

function HomeTab() {
  return (
    <FlatList 
      data={PHONES} 
      keyExtractor={(p) => p.id} 
      contentContainerStyle={{ padding: 16, gap: 10 }}
      renderItem={({ item }) => (<View style={{ padding: 16, backgroundColor: '#fff', elevation: 2, borderRadius: 8 }}><Text>{item.name.split(" - ")[0]}</Text></View>)} 
    />
  );
}

function SearchTab() {
  const [keyword, setKeyword] = useState("");
  const filtered = PHONES.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <View style={{ flex: 1 }}>
      <TextInput value={keyword} onChangeText={setKeyword} placeholder="Nhập từ khóa" style={{ borderWidth: 1, margin: 16, padding: 10, borderRadius: 8, borderColor: '#ddd' }} />
      {filtered.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Không có kết quả cho "{keyword}"</Text>
      ) : (
        <FlatList 
          data={filtered} 
          keyExtractor={(p) => p.id} 
          contentContainerStyle={{ padding: 16, gap: 10 }}
          renderItem={({ item }) => (<View style={{ padding: 16, backgroundColor: '#fff' }}><Text>{item.name.split(" - ")[0]}</Text></View>)} 
        />
      )}
    </View>
  );
}

function ProfileTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 96, height: 96, borderRadius: 48, backgroundColor: colors.blue, justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 40, color: 'white' }}>N</Text>
      </View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Nguyễn Văn An</Text>
      <Text style={{ color: 'gray', marginTop: 4 }}>an.nguyen@example.com</Text>
    </View>
  );
}

export function BottomTabApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.red,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = ICONS[route.name as keyof TabParamList][focused ? 0 : 1];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Home" component={HomeTab} options={{ title: "Trang chủ" }} />
        <Tab.Screen name="Search" component={SearchTab} options={{ title: "Tìm kiếm" }} />
        <Tab.Screen name="Profile" component={ProfileTab} options={{ title: "Cá nhân" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}