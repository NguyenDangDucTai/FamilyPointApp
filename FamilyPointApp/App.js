import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, View} from 'react-native';
import Login from './screen/Login';
import QuaTang from "./screen/QuaTang";
import PhieuQuaTang from "./screen/PhieuQuaTang";
import CaiDat from "./screen/CaiDat";
import HoTro from "./screen/HoTro";
import MyId from "./screen/MyId";
import KhuyenMai from "./screen/KhuyenMai";
import LichSuDiem from "./screen/LichSuDiem";
import ThongBao from "./screen/ThongBao";
import DangKy from './screen/DangKy';
import QuenMaPin from './screen/QuenMaPin';
import DoiMaPin from './screen/DoiMaPin';
import ThongTinCaNhan from './screen/ThongTinCaNhan';
import TrangChu from "./screen/TrangChu";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Provider} from "react-redux";
import store from "./redux/store";
import DatCauHoi from './screen/DatCauHoi';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabMain =()=>{
    return(
        <Tab.Navigator initialRouteName="TrangChu">
            <Tab.Screen name="Trangchu" component={TrangChu}
                        options={{
                            headerShown: false,
                            tabBarLabel:'Trang chủ',
                            tabBarIcon:({color, size})=>(
                                <MaterialCommunityIcons name='home' color={color} size={size}/>
                            ),
                        }}
            />
            <Tab.Screen name="KhuyenMai" component={KhuyenMai}
                        options={{
                            headerShown: false,
                            tabBarLabel:'Khuyến Mãi',
                            tabBarIcon:({color, size})=>(
                                <MaterialCommunityIcons name='flag' color={color} size={size}/>
                            ),
                        }}
            />
            <Stack.Screen name='MyId' component={MyId}
                          options={{
                              headerShown: false,
                              tabBarLabel:'',
                              tabBarIcon:({color, size})=>(
                                  <Image source={require("./assets/TrangChu/iconId.png")} style={{height:80, width:80, bottom:20, borderRadius:100}}/>
                              ),
                          }}
            />
            <Tab.Screen name="QuanTang" component={QuaTang}
                        options={{
                            headerShown: false,
                            tabBarLabel:'Quà tặng',
                            tabBarIcon:({color, size})=>(
                                <MaterialCommunityIcons name='gift' color={color} size={size}/>
                            ),
                        }}
            />
            <Tab.Screen name="ThongBao" component={ThongBao}
                        options={{
                            headerShown: false,
                            tabBarLabel:'Thông báo',
                            tabBarIcon:({color, size})=>(
                                <MaterialCommunityIcons name='bell' color={color} size={size}/>
                            ),
                        }}
            />
        </Tab.Navigator>
    )
}




export default function App(){
  return(
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
                  <Stack.Screen name="LichSuDiem" component={LichSuDiem} options={{headerShown:false}}/>
                  <Stack.Screen name="Home" component={TabMain} options={{headerShown: false}}/>
                  <Stack.Screen name='DangKy' component={DangKy} options={{ headerShown: false }}/>
                  <Stack.Screen name='QuenMaPin' component={QuenMaPin} options={{ headerShown: false }}/>
                  <Stack.Screen name='DoiMaPin' component={DoiMaPin} options={{ headerShown: false }}/>
                  <Stack.Screen name='ThongTinCaNhan' component={ThongTinCaNhan} options={{ headerShown: false }}/>
                  <Stack.Screen name='HoTro' component={HoTro} options={{ headerShown: false }}/>
                  <Stack.Screen name='DatCauHoi' component={DatCauHoi} options={{ headerShown: false }}/>
                  <Stack.Screen name='CaiDat' component={CaiDat} options={{ headerShown: false }}/>
                  <Stack.Screen name='QuaTang' component={QuaTang} options={{ headerShown: false }}/>
                  <Stack.Screen name='MyId' component={MyId} options={{ headerShown: false }}/>
                  <Stack.Screen name='PhieuQuaTang' component={PhieuQuaTang} options={{ headerTitle:"PHIẾU QUÀ TẶNG", headerShown:true}}/>
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  )
}





























const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
