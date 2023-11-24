import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect, useCallback } from "react";

export default function ThongTinCaNhan({ navigation, route }) {

    const [data, setData] = useState([]);
    const { userPhone } = route.params;
    const [user, setUser] = useState({
        id: "",
        name: "",
        phone: "",
        sex: "",
        birthday: "",
        country: "",
        address: "",
        // ... other fields
    });
    useEffect(() => {
        fetch("https://656047f683aba11d99d086dc.mockapi.io/users")
            .then((response) => response.json())
            .then((data) => {
                const user = data.find((user) => user.phone === userPhone);
                setUser(user.id);
                setData(user);
            })
            .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
    }, [userPhone]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://656047f683aba11d99d086dc.mockapi.io/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                const userData = data.find((userData) => userData.phone === userPhone);

                if (userData) {
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userPhone]);

    const updateUserData = async () => {
        try {
            const response = await fetch(`https://656047f683aba11d99d086dc.mockapi.io/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const updatedUserData = await response.json();
            setUser(updatedUserData);
        } catch (error) {
            console.error("Error updating user data:", error);
        }
        navigation.navigate("TrangChu", { userPhone: userPhone });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack}>
                    <Icon name='arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textThongTinCN}>THÔNG TIN CÁ NHÂN</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Image  source={{ uri: data?.avatar }}
                        style={styles.imgAvata}
                    />
                </View>
                <TouchableOpacity style={styles.btnDoiMaPin}
                    onPress={() => navigation.navigate("DoiMaPin",{ userPhone: userPhone })}>
                    <Image source={require('../assets/ThongTinCaNhan/image 18.png')}
                        style={styles.imgLock}
                    />
                    <Text style={styles.textTitle}>Đổi mã PIN</Text>
                </TouchableOpacity>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Họ tên</Text>
                    <TextInput style={styles.textInput}
                        value={user.name}
                        onChangeText={(text) => setUser({ ...user, name: text })}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Số điện thoại</Text>
                    <TextInput style={styles.textInput}
                        value={user.phone}
                        onChangeText={(text) => setUser({ ...user, phone: text })}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Giới tính</Text>
                    <TextInput style={styles.textInput}
                        value={user.sex}
                        onChangeText={(text) => setUser({ ...user, sex: text })}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Ngày sinh</Text>
                    <TextInput style={styles.textInput}
                        value={user.birthday}
                        onChangeText={(text) => setUser({ ...user, birthday: text })}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Quốc tịch</Text>
                    <TextInput style={styles.textInput}
                        value={user.country}
                        onChangeText={(text) => setUser({ ...user, contry: text })}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Địa chỉ</Text>
                    <TextInput style={styles.textInput}
                        value={user.address}
                        onChangeText={(text) => setUser({ ...user, address: text })}></TextInput>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnCancel}
                    onPress={() => navigation.navigate("TrangChu", { userPhone: userPhone })}>
                    <Image source={require('../assets/ThongTinCaNhan/cancel.png')}
                        style={styles.imgCancel}
                    />
                    <Text style={styles.textCancel}>Hủy bỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCapNhat}
                    onPress={updateUserData}>
                    <Text style={styles.textCapNhat}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: '#008CD7',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        width: '100%',
        height: '13%',
    },
    btnBack: {
        width: '50px',
        position: 'absolute',
        top: 28
    },
    textThongTinCN: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },

    imgAvata: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginHorizontal: 10
    },
    btnDoiMaPin: {
        left: 140,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLock: {
        width: 20,
        height: 20
    },
    body: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '75%',
    },
    viewTitle: {
        width: 70,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
    },
    textTitle: {
        color: '#008CD7',
        fontSize: 13,
        fontWeight: 'Regular',
        fontStyle: 'Open Sans'

    },
    viewInput: {
        width: '80%',
        height: '8%',
        margin: 10
    },
    textTitle2: {
        fontSize: 12,
        fontWeight: 'Regular',
        fontStyle: 'Open Sans',
        margin: 2
    },
    textInput: {
        width: '100%',
        height: '80%',
        fontSize: 14,
        fontWeight: 'Regular',
        fontStyle: 'Open Sans',
        color: '#000',
        borderRadius: 10,
        borderColor: '#9095A0',
        borderWidth: 1,
        padding: 10
    },
    footer: {
        width: '100%',
        height: '12%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCancel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '30%',
        width: '25%',
        padding: 10,
    },
    imgCancel: {
        height: 20,
        width: 20,
    },
    textCancel: {
        color: '#DE7717',
        fontSize: 13,
        fontStyle: 'Open Sans',
        fontWeight: 'Regular'
    },
    btnCapNhat: {
        width: '80%',
        height: '40%',
        borderRadius: 20,
        backgroundColor: '#008CD7',
        borderColor: '#9095A0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    textCapNhat: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'Open Sans',
        color: '#fff'
    },

});
