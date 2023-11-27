import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

export default function DatCauHoi({ navigation, route }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => {
                        navigation.navigate("HoTro");
                    }}
                >
                    <Icon name='arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textThongTinCN}>ĐẶT CÂU HỎI</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Tiêu đề</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.viewInput2}>
                    <Text style={styles.textTitle2}>Câu hỏi</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnDatCauHoi}
                    onPress={() => { navigation.navigate("HoTro") }}>
                    <Text style={styles.textDatCauHoi}>Gửi câu hỏi</Text>
                </TouchableOpacity>
                <View style={styles.errorContainer}>

                </View>
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
        zIndex: 10,
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
        justifyContent: 'center',
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
    viewInput2: {
        width: '80%',
        height: '30%',
        margin: 10,
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
        padding: 10,
    },
    footer: {
        width: '100%',
        height: '12%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top:-20
    },
    btnDatCauHoi: {
        width: '80%',
        height: '40%',
        borderRadius: 20,
        backgroundColor: '#008CD7',
        borderColor: '#9095A0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    textDatCauHoi: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'Open Sans',
        color: '#fff'
    },
    exception: {
        top: 0,
        color: 'red',
        fontWeight: '500',
        fontStyle: 'Epilogue',
    },
    errorContainer: {
        alignItems: 'center',
    },

});
