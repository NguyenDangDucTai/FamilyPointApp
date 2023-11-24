import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/Login';
import QuaTang from "./screen/QuaTang";
import PhieuQuaTang from "./screen/PhieuQuaTang";
import CaiDat from "./screen/CaiDat";
import HoTro from "./screen/HoTro";
import MyId from "./screen/MyId";
import ThuThach from "./screen/Thử thách";
import LichSuDiem from "./screen/LichSuDiem";
import ThongBao from "./screen/ThongBao";
import DangKy from './screen/DangKy';
import QuenMaPin from './screen/QuenMaPin';
import DoiMaPin from './screen/DoiMaPin';
import ThongTinCaNhan from './screen/ThongTinCaNhan';
import TrangChu from "./screen/TrangChu";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='DangKy' component={DangKy} options={{ headerShown: false }}/>
        <Stack.Screen name='QuenMaPin' component={QuenMaPin} options={{ headerShown: false }}/>
        <Stack.Screen name='DoiMaPin' component={DoiMaPin} options={{ headerShown: false }}/>
        <Stack.Screen name='TrangChu' component={TrangChu} options={{ headerShown: false }}/>
        <Stack.Screen name='ThongTinCaNhan' component={ThongTinCaNhan} options={{ headerShown: false }}/>
        <Stack.Screen name='ThongBao' component={ThongBao} options={{ headerShown: false }}/>
        <Stack.Screen name='LichSuDiem' component={LichSuDiem} options={{ headerShown: false }}/>
        <Stack.Screen name='ThuThach' component={ThuThach} options={{ headerShown: false }}/>
        <Stack.Screen name='HoTro' component={HoTro} options={{ headerShown: false }}/>
        <Stack.Screen name='CaiDat' component={CaiDat} options={{ headerShown: false }}/>
        <Stack.Screen name='MyId' component={MyId} options={{ headerShown: false }}/>
        <Stack.Screen name='QuaTang' component={QuaTang} options={{ headerShown: false }}/>
        <Stack.Screen name='PhieuQuaTang' component={PhieuQuaTang} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
