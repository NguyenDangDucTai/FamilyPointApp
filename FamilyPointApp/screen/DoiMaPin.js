import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect, useCallback } from "react";

export default function DoiMaPin({ navigation, route }) {
    const { userPhone } = route.params;
    const [user, setUser] = useState({
        id: "",
        password: "",
        // ... other fields
    });
    const [oldPin, setOldPin] = useState("");
    const [newPin, setNewPin] = useState("");
    const [confirmNewPin, setConfirmNewPin] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchData();
    }, [userPhone]);

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

    const updateUserData = async () => {
        try {
            // Kiểm tra mã PIN cũ
            if (oldPin !== user.password) {
                setErrorMessage("Mã PIN cũ không đúng");
                return;
            }

            // Kiểm tra nhập lại mã PIN mới
            if (newPin !== confirmNewPin) {
                setErrorMessage("Nhập lại mã PIN mới không khớp");
                return;
            }

            const response = await fetch(`https://656047f683aba11d99d086dc.mockapi.io/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...user, password: newPin }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const updatedUserData = await response.json();
            setUser(updatedUserData);
            navigation.navigate("TrangChu", { userPhone: userPhone });
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack}>
                    <Icon name='arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textDoiMaPin}>THAY ĐỔI MÃ PIN</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Image source={require('../assets/DoiMaPin/i.png')}
                        style={styles.imgI}
                    />
                    <Text style={styles.textTitle}>Thay đổi mã PIN</Text>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Mã PIN cũ*</Text>
                    <TextInput style={styles.textInput}
                        secureTextEntry={true}
                        value={oldPin}
                        onChangeText={(text) => setOldPin(text)}></TextInput>
                </View>
                {errorMessage !== "" && (
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                )}
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Mã PIN mới*</Text>
                    <TextInput style={styles.textInput}
                        secureTextEntry={true}
                        value={newPin}
                        onChangeText={(text) => setNewPin(text)}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Nhập lại mã PIN mới*</Text>
                    <TextInput style={styles.textInput}
                        secureTextEntry={true}
                        value={confirmNewPin}
                        onChangeText={(text) => setConfirmNewPin(text)}></TextInput>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnCancel}
                    onPress={() => navigation.navigate("ThongTinCaNhan", { userPhone: userPhone })}>
                    <Image source={require('../assets/DoiMaPin/cancel.png')}
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
        height: 80,
    },
    btnBack: {
        width: '50px',
        position: 'absolute',
        top: 28
    },
    textDoiMaPin: {
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
    btnCapNhat: {
        width: '80%',
        height: '25%',
        borderRadius: 20,
        backgroundColor: '#008CD7',
        borderColor: '#9095A0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textCapNhat: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'Open Sans',
        color: '#fff'
    },
    errorMessage:{
        top:170,
        color: 'red',
        fontWeight: '500',
        fontStyle: 'Epilogue',
    }

});
