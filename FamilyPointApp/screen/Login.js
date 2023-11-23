import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerSecondary}>
                    <Text style={styles.textTitle}>FamiPoint</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodySecondary}>
                    <Image source={require('../assets/Login/familymarticon.png')}
                        style={styles.imgFamilyMart}
                    />
                    <Text style={styles.textTitleBody}>Đăng nhập</Text>
                    <View style={styles.viewInput}>
                        <TextInput style={styles.inputText}
                            placeholder='    Số điện thoại'>
                        </TextInput>
                    </View>
                    <View style={styles.viewInput2}>
                        <TextInput style={styles.inputText}
                            placeholder='    Mã pin'>
                        </TextInput>
                    </View>
                    <TouchableOpacity style={styles.btnDangNhap}>
                        <Text style={styles.textDangNhap}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerSecondary1}>
                    <Text style={styles.textTitleFooter1}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity>
                        <Text style={styles.textTitleFooter2}> Đăng ký ngay</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerSecondary2}>
                    <TouchableOpacity>
                        <Text style={styles.textTitleFooter3}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#08B404',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '60%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerSecondary: {
        backgroundColor: '#008CD7',
        width: '100%',
        height: '95%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textTitle: {
        fontSize: 35,
        color: '#FFFFFF',
        fontWeight: '700',
        fontStyle: 'Open Sans',
        margin: 100
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#008CD7',
        height: '50%',
        width: '70%',
        borderRadius: 30,
        position: 'absolute',
        top: 170
    },
    imgFamilyMart: {
        height: 82,
        width: 82,
        position: 'relative',
        top: -30
    },
    bodySecondary: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        position: 'absolute',
        top: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    textTitleBody: {
        color: '#008CD7',
        fontSize: 18,
        fontStyle: 'Open Sans',
        fontWeight: 'bold'
    },
    viewInput: {
        width: '80%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#9095A0',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
    },
    inputText: {
        width: '100%',
        height: '100%',
        fontSize: 13,
        fontWeight: 'Regular',
        fontStyle: 'Open Sans',
        color: '#BCC1CA'
    },
    viewInput2: {
        width: '80%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#9095A0',
        borderWidth: 1,
        borderRadius: 10,
    },
    btnDangNhap: {
        width: '80%',
        height: '10%',
        borderRadius: 12,
        backgroundColor: '#008CD7',
        borderColor: '#9095A0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    },
    textDangNhap: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'Open Sans',
        color: '#FFFFFF'
    },
    footer: {
        backgroundColor: '#08B404',
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 120
    },
    footerSecondary1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%'

    },
    textTitleFooter1: {
        fontSize: 14,
        color: '#fff',
        fontStyle: 'Open Sans',
        fontWeight: '200'

    },
    textTitleFooter2: {
        fontSize: 14,
        color: '#fff',
        fontStyle: 'Open Sans',
        fontWeight: 'Mixed'
    },
    footerSecondary2: {
        alignItems: 'center',
        width: '100%',
        marginVertical: 10
    },
    textTitleFooter3: {
        fontSize: 14,
        color: '#fff',
        fontStyle: 'Open Sans',
        fontWeight: 'Mixed'
    }

});
