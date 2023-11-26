import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect, useCallback } from "react";



const DATATinhNang = [
    {
        id: 1,
        img: require('../assets/TrangChu/iconLSD.png'),
        title: 'Lịch sử điểm',
        screen: "LichSuDiem",
    },
    {
        id: 2,
        img: require('../assets/TrangChu/iconTTCN.png'),
        title: 'Thông tin cá nhân',
        screen: "ThongTinCaNhan",
    },
    {
        id: 3,
        img: require('../assets/TrangChu/iconHTCH.png'),
        title: 'Hệ thống cửa hàng',
        screen: "LichSuDiem"
    },
    {
        id: 4,
        img: require('../assets/TrangChu/iconTTTG.png'),
        title: 'Trung tâm trợ giúp',
        screen: "HoTro",
    },
    {
        id: 5,
        img: require('../assets/TrangChu/iconCaiDat.png'),
        title: 'Cài đặt',
        screen: "CaiDat",
    },
]

const DATAVOUCHER = [
    {
        id: '01',
        name: 'E-Coupon Trị giá 5.000Đ',
        date: 5
    },
    {
        id: '02',
        name: 'E-Coupon Trị giá 5.000Đ',
        date: 5
    },

]


export default function TrangChu({ route, navigation }) {
    // const {userPhone} = route.params;
    const [userPlan, setUserPlan] = useState([]);
    const [user, setUser] = useState();
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://656047f683aba11d99d086dc.mockapi.io/users")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const user = data.find((user) => user.phone === userPhone);
    //             setUser(user.id);
    //             setData(user);
    //         })
    //         .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
    //     //loadData();
    // }, [userPhone]);

    const loadData = async () => {
        try {
            const response = await fetch(
                `https://656047f683aba11d99d086dc.mockapi.io/users`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            const user = data.find((user) => user.phone === userPhone);

            if (user) {
                setUser(user.id);
                setData(user);
            }
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    };
    //   useEffect(() => {
    //     const unsubscribe = navigation.addListener(
    //       "focus",
    //       () => {
    //         loadData();
    //       },
    //       [userPhone]
    //     );
    //     return unsubscribe;
    //   }, [navigation]);

    // const handleUpdate = async () => {
    //     // Perform your update logic here (replace the comment with your actual update logic)
    //     // For example, you might have an API call to update user data
    //     // await updateUserData(user.id, updatedData);

    //     // After the update, fetch the updated data
    //     setRefreshing(true); // Set refreshing state to true to show a loading indicator
    //     try {
    //         await loadData();
    //     } finally {
    //         setRefreshing(false); // Set refreshing state back to false
    //     }
    // };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.backgroundAvatar}>
                    <Image source={{ uri: data?.avatar }} style={{ width: 85, height: 85, borderRadius: 100 }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Xin chào!</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>{data?.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 15, width: 100, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#008CD7', fontWeight: 'bold' }}>Thành viên</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', borderRadius: 15, width: 120, height: 25, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../assets/TrangChu/caivi.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ color: '#00A040', fontWeight: 'bold' }}>{data?.point} pt</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.body1}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#00A040', height: 40, width: 5, borderRadius: 20, marginRight: 15 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tính năng</Text>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <FlatList
                        horizontal={true}
                        data={DATATinhNang}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ width: 70, paddingHorizontal: 5, alignItems: 'center' }}
                                                  onPress={()=>{
                                                      navigation.navigate(item.screen)
                                                  }}
                                >
                                    <Image source={item.img} style={{ width: 60, height: 60 }} />
                                    <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
            </View>
            <View style={styles.body2}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#00A040', height: 40, width: 5, borderRadius: 20, marginRight: 15 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Quà tặng</Text>
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                    <FlatList
                        horizontal={true}
                        data={DATAVOUCHER}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.voucher}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Image
                                            source={require('../assets/QuaTang/voucher.png')}
                                            style={{ width: '80px', height: '80px' }}
                                        />
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                        <View style={{ width: '70%', paddingTop: 10, paddingLeft: 5 }}>
                                            <Text style={styles.textNameVoucher}>
                                                {item.name}
                                            </Text>
                                            <Text style={styles.textDateVoucher}>
                                                Còn {item.date} ngày!
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                            <View style={styles.giatrisudung}>
                                                <Text style={styles.textGTSD}>Lượt sử dụng còn lại: 1</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
            <View style={styles.body3}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#00A040', height: 40, width: 5, borderRadius: 20, marginRight: 15 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Quà tặng</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    title: {
        height: 120,
        backgroundColor: '#008CD7',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    backgroundAvatar: {
        backgroundColor: '#D9D9D9',
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    body1: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    body2: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    voucher: {
        marginHorizontal: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "#9D9D9D",
        height: "100px",
        width: '300px',
        flexDirection: 'row',
        borderRadius: 15,
    },
    textNameVoucher: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    textDateVoucher: {
        fontSize: 13,
        color: '#00A040',
    },
    giatrisudung: {
        backgroundColor: '#D9D9D9',
        width: '150px',
        height: '20px',
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 15,
    },
    textGTSD: {
        fontSize: 10,
        color: '#6F6464',
    },
    body3: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
})





