import {Image, StyleSheet, Text, View} from "react-native";
import Barcode from 'react-native-barcode-svg';
import {useState} from "react";
import {useSelector} from "react-redux";


export default function MyId({navigation}){
    const user = useSelector((state)=>state.user)
    console.log(user)
    return(
        <View style={styles.container}>
            <View style={styles.body1}>
                <Text style={{fontWeight:'bold', color:'white', fontSize:18}}>MY ID - THANH TOÁN</Text>
            </View>
            <View style={styles.body2}>
                <View style={styles.idBorder}>
                    <View style={{flexDirection:'row', marginHorizontal:10, marginBottom:5}}>
                        <Image source={require("../assets/MyId/logo.png")} style={{width:20, height:20, marginRight:5}}/>

                        <Text style={{fontWeight:"bold", fontSize:15, color:'#008CD7'}}>FamilyMart</Text>
                    </View>
                    <View style={{backgroundColor:'#00A040', width:'100%', height:15}}></View>
                    <View style={{justifyContent:'center', alignItems:'center', paddingVertical:10}}>
                        <Barcode value={user.phone} format="CODE128" maxWidth={200} height={60}/>
                    </View>
                    <View style={{position:'absolute',backgroundColor:'#008CD7', width:'100%', height:15, top:134, borderBottomLeftRadius:10, borderBottomRightRadius:10, }}></View>
                </View>
            </View>
            <View style={styles.body3}>
                <View style={{backgroundColor:'#00A040', height:40, width:5, borderRadius:20, marginRight:15}}></View>
                <Text style={{fontWeight:'bold', fontSize:20}}>Phương thức thanh toán</Text>
            </View>
            <View style={{
                flex:4,
                flexDirection:'row',
                justifyContent:'center',
                paddingVertical:15,
            }}>
                <View style={{alignItems:'center', marginHorizontal:5}}>
                    <Image source={require('../assets/MyId/momo.png')} style={{width:80, height:80}}/>
                    <Text style={styles.textPay}>MoMo</Text>
                </View>
                <View style={{alignItems:'center', marginHorizontal:5}}>
                    <Image source={require('../assets/MyId/zaloPay.png')} style={{width:80, height:80}}/>
                    <Text style={styles.textPay}>ZaloPay</Text>
                </View>
                <View style={{alignItems:'center', marginHorizontal:5}}>
                    <Image source={require('../assets/MyId/vnPay.png')} style={{width:80, height:80}}/>
                    <Text style={styles.textPay}>VnPay</Text>
                </View>
                <View style={{alignItems:'center', marginHorizontal:5}}>
                    <Image source={require('../assets/MyId/shopeePay.png')} style={{width:80, height:80}}/>
                    <Text style={styles.textPay}>ShopeePay</Text>
                </View>
            </View>
            <View style={{flex:1}}>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width:'100%',
        height:'100%'
    },
    body1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#008CD7',
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
    },
    body2:{
        flex:3,
        marginVertical:10,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center'
    },
    body3:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30
    },
    idBorder:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#808080",
        width:300,
        height:150,
        paddingVertical:5,
    },
    textPay:{
        fontSize:15,
        fontWeight:'bold',
    },
})
