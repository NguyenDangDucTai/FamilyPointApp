import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";

export default function QuenMaPin({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack}>
                    <Icon name='arrow-left' size={30} color='white' />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textQuenMaPin}>QUÊN MÃ PIN</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Image source={require('../assets/QuenTaiKhoan/i.png')}
                        style={styles.imgI}
                    />
                    <Text style={styles.textTitle}>Thông tin số điện thoại</Text>
                </View>
            
                <View style={styles.viewInput}>
                    <Text style={styles.textTitle2}>Số điện thoại*</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
        
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnCancel}>
                    <Image source={require('../assets/QuenTaiKhoan/cancel.png')}
                        style={styles.imgCancel}
                    />
                    <Text style={styles.textCancel}>Hủy bỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnXacNhan}>
                    <Text style={styles.textXacNhan}>Xác nhận</Text>
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
    textQuenMaPin: {
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
        width:'25%',
        padding:10,
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
    btnXacNhan: {
        width: '80%',
        height: '25%',
        borderRadius: 20,
        backgroundColor: 'gray',
        borderColor: '#9095A0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    textXacNhan: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'Open Sans',
        color: '#000'
    },

});
