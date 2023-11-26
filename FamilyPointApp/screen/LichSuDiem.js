import {FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const DATA = [
    {
        id:1,
        diachi:'222 Lý tự trọng',
        ngay:'28/10/2023',
        time:'11:58:32',
        tongHoaDon:2000,
        diemNhan: 20,
        diemSuDung: 2000
    },
    {
        id:2,
        diachi:'222 Lý tự trọng',
        ngay:'28/10/2023',
        time:'11:58:32',
        tongHoaDon:26000,
        diemNhan: 260,
        diemSuDung: 0
    },
    {
        id:3,
        diachi:'Galaxy 9 Nguyễn Khoái',
        ngay:'22/10/2023',
        time:'11:58:32',
        tongHoaDon:20000,
        diemNhan: 400,
        diemSuDung: 0
    },
    {
        id:4,
        diachi:'Galaxy 9 Nguyễn Khoái',
        ngay:'22/10/2023',
        time:'11:58:32',
        tongHoaDon:20000,
        diemNhan: 400,
        diemSuDung: 0
    },
]


export default function LichSuDiem({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.body1}>
                <TouchableOpacity style={styles.btnBack} onPress={()=>{
                    navigation.navigate("Home")
                }}>
                    <Icon name="arrow-left" color='white' size={30}/>
                </TouchableOpacity>
                <View style={{alignItems:'center', paddingVertical:10}}>
                    <Text style={styles.textTitle}>MY-ID LỊCH SỬ ĐIỂM</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', height:50, alignItems:'center'}}>
                    <Text style={{fontSize:35, fontWeight:'bold', color:'white'}}>10000000</Text>
                    <Text style={{color:'white', top:8}}>pt</Text>
                </View>
            </View>
            <View style={{flex:4, paddingVertical:10}}>
                <Pressable style={{alignSelf:'flex-end'}}>
                    <Text style={{color:'blue'}}>6 tháng gần đây</Text>
                </Pressable>
                <FlatList
                    data={DATA}
                    renderItem={({item})=>{
                        return(
                            <View style={[styles.itemlsd, item.id%2&&{backgroundColor:'white'}]}>
                                <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:5}}>
                                    <Text>{item.diachi}</Text>
                                    <Text style={{color:'silver'}}> | {item.ngay} {item.time}</Text>
                                </View>
                                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:10}}>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{color:'#808080'}}>Tổng hoá đơn</Text>
                                        <Text style={{color:'#808080', fontWeight:'bold', marginTop:5}}>{item.tongHoaDon} đồng</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{color:'#808080'}}>Điểm nhận</Text>
                                        <Text style={{color:'#00A040', fontWeight:'bold', marginTop:5}}>{item.diemNhan} đồng</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{color:'#808080'}}>Điểm sử dụng</Text>
                                        <Text style={{color:'#808080', fontWeight:'bold', marginTop:5}}>{item.diemSuDung} đồng</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        width:'100%',
        height:'100%'
    },
    body1:{
        backgroundColor:"#008CD7",
        height:130,
        width:'100%',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
    },
    textTitle:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
    },
    itemlsd:{
        height:90,
        backgroundColor:'#E7E7E7',
    },
    btn1:{
        backgroundColor:'#EDEDED',
        width:100, height:50,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        alignItems:'center', justifyContent:'center',
    },
    btn2:{
        backgroundColor:'#008CD7',
        width:100, height:50,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center', justifyContent:'center',
    },
    btnBack:{
        zIndex:10,
        position:'absolute',
        top:10,
        left:10,
    },
})

