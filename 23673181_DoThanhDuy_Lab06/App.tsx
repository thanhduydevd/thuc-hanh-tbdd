import 'react-native-gesture-handler';
import React from 'react';

// Uncomment dòng nào để chạy bài đó:
import { SelectPhoneApp } from './src/ex1/SelectPhoneApp';
import { PHONES } from './src/data/phones';
import { BottomTabApp } from './src/ex3/BottomTabApp';
import { StackTabApp } from './src/ex4/StackTabApp';
import { DrawerApp } from './src/ex5/DrawerApp';
// import { SelectPhoneApi } from './src/ex1/SelectPhoneApi';
// import { BottomTabApp } from './src/ex3/BottomTabApp';

export default function App() {
  // Chạy bài 1
  // return <SelectPhoneApp phone={PHONES[0]} />;
  
  // Chạy bài 2:
  // return <SelectPhoneApi />;

  // Chạy bài 3:
  // return <BottomTabApp />;

  // return <StackTabApp />;

  // Chạy Bài 5:
  return <DrawerApp />;
}