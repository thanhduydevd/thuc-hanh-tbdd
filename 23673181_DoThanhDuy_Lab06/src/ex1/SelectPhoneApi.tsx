import React, { useState, useEffect, useCallback } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Phone } from "../types";
import { fetchPhone } from "../api/phoneApi";
import { SelectPhoneApp } from "./SelectPhoneApp";
// Giả định bạn có component Loading và ErrorBox như đề bài, nếu chưa có có thể dùng tạm View cơ bản

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);
 
  const load = useCallback(async () => {
    // TODO 1: Reset state
    setError(null); 
    setPhone(null);
    
    // TODO 2: Fetch data
    try { 
      const data = await fetchPhone("1");
      setPhone(data);
    } catch (e: any) { 
      setError(e.message || "Có lỗi xảy ra");
    }
  }, []);
 
  // TODO 3: Gọi khi mở màn hình
  useEffect(() => {
    load();
  }, [load]);
 
  // TODO 4: Xử lý lỗi
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
        <Pressable onPress={load} style={{ padding: 10, backgroundColor: '#ddd' }}><Text>THỬ LẠI</Text></Pressable>
      </View>
    );
  }

  // TODO 5: Đang tải
  if (!phone) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Đang tải...</Text>
      </View>
    );
  }

  // TODO 6: Render app hoàn chỉnh
  return <SelectPhoneApp phone={phone} />;
}