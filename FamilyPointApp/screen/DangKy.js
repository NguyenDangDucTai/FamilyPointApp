import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect, useCallback } from "react";

export default function DangKy({ navigation, route }) {

    const { userPhone } = route.params;
    //const [user, setUser] = useState();
    const [newItemName, setNewItemName] = useState("");
    const [newItemPhone, setNewItemPhone] = useState("");
    const [newItemPassword, setNewItemPassword] = useState("");
    const [newItemBirthday, setNewItemBirthday] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://656047f683aba11d99d086dc.mockapi.io/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu:", error);
            }
        };

        fetchData();
    }, []);

    // const reloadUserData = async () => {
    //     try {
    //         const response = await fetch("https://656047f683aba11d99d086dc.mockapi.io/users");

    //         if (!response.ok) {
    //             throw new Error("Failed to fetch data");
    //         }

    //         const json = await response.json();
    //         setData(json);
    //     } catch (error) {
    //         console.error("Lỗi khi tải dữ liệu:", error);
    //     }
    // };

    // const reloadUserData = async () => {
    //     try {
    //         const response = await fetch(
    //             "https://656047f683aba11d99d086dc.mockapi.io/users"
    //         );

    //         if (!response.ok) {
    //             throw new Error("Failed to fetch data");
    //         }

    //         const data = await response.json();
    //         const user = data.find((user) => user.phone === userPhone);

    //         // const json = await response.json();
    //         // setData(json);

    //         if (user) {
    //             setData(user);
    //         }
    //     } catch (error) {
    //         console.error("Lỗi khi tải dữ liệu:", error);
    //     }
    // };

    const addItem = async () => {
        try {
            if (newItemName.trim() !== "" && newItemPhone.trim() !== "" && newItemPassword.trim() !== "" && newItemBirthday.trim() !== "") {
                const newItem = {
                    name: newItemName,
                    phone: newItemPhone,
                    password: newItemPassword,
                    birthday: newItemBirthday
                };
                // Thêm mục vào API
                const response = await fetch("https://656047f683aba11d99d086dc.mockapi.io/users",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newItem),
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to add item");
                }
                const responseData = await response.json();
                // Cập nhật trạng thái dữ liệu sau khi thêm thành công
                setData((prevData) => [...prevData, responseData]);
                setNewItemName("");
                setNewItemPhone("");
                setNewItemPassword("");
                setNewItemBirthday("");
                // Chuyển hướng sau khi cập nhật dữ liệu
                //reloadUserData();

            }
        } catch (error) {
            console.error("Lỗi khi thêm tài khoản:", error);
        }
        navigation.navigate("Login");
    };

    // useEffect(() => {
    //     // Load dữ liệu khi màn hình được tạo ra hoặc mỗi khi userPhone thay đổi
    //     reloadUserData();
    // }, [userPhone]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => navigation.navigate("Login")}>
                    <Icon name='arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textDangKy}>ĐĂNG KÝ</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Image source={require('../assets/DangKy/i.png')}
                        style={styles.imgI}
                    />
                    <Text style={styles.textTitle}>Thông tin đăng ký</Text>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Họ tên*</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => setNewItemName(text)}
                        value={newItemName}>
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Số điện thoại*</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => setNewItemPhone(text)}
                        value={newItemPhone}>
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Mã pin*</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => setNewItemPassword(text)}
                        value={newItemPassword}>
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Ngày sinh*</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => setNewItemBirthday(text)}
                        value={newItemBirthday}>
                    </TextInput>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnCancel}
                    onPress={() => navigation.navigate("Login")}>
                    <Image source={require('../assets/DangKy/cancel.png')}
                        style={styles.imgCancel}
                    />
                    <Text style={styles.textCancel}>Hủy bỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDangKy}
                    onPress={addItem}>
                    <Text style={styles.textDangKy2}>Đăng ký</Text>
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
        height: 80,
    },
    btnBack: {
        width: '50px',
        position: 'absolute',
        top: 28
    },
    textDangKy: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },

    body: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60%',
    },
    viewTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40
    },
    imgI: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    textTitle: {
        color: '#00A040',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'Open Sans'

    },
    viewInput: {
        width: '80%',
        height: '12%',
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
        height: '100%',
        fontSize: 16,
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
        height: '25%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
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
    btnDangKy: {
        width: '80%',
        height: '25%',
        borderRadius: 20,
        backgroundColor: 'gray',
        borderColor: '#9095A0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textDangKy2: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'Open Sans',
        color: '#000'
    },

});
