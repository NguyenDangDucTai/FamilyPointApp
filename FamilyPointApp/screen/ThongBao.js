import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const DATA = [
    {
        id:1,
        thongbao:"Cập nhật ngay ứng dụng " +
            "FamiPoint phiên bản Mới nhất từ ngày " +
            "5/6/2023 để không bỏ lỡ những trải nghiệm " +
            "mua hàng thú vị và tích điểm dễ dàng hơn!",
        ngay:'05/06/20230',
        gio:'10:08'
    }
]



export default function ThongBao({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity style={{width:'50px',position:'absolute', top:28}}>
                    <Icon name='arrow-left' size={30} color='white'/>
                </TouchableOpacity>
                <View style={{flex:1,  alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.textThongBao}>THÔNG BÁO</Text>
                </View>
            </View>
            <View style={styles.viewAll}>
                <Image source={require('../assets/ThongBao/iconView.png')} style={{width:20, height:20}}/>
                <Text style={{color:'#008CD7', textDecorationLine:'underline'}}>Xem tất cả</Text>
            </View>
            <View style={{flex:1, paddingHorizontal:10, marginVertical:10}}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) =>{
                        return(
                            <View style={styles.boxItemTB}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Icon name="bell" size={15}/>
                                    <Text style={{color:'#808080', marginLeft:5}}>FamilyMart</Text>
                                </View>
                                <Text style={{color:'#808080'}}>{item.thongbao}</Text>
                                <View style={{alignItems:'flex-end'}}>
                                    <Text>{item.ngay} {item.gio}</Text>
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
    title:{
        backgroundColor:'#008CD7',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
        width:'100%',
        height:80,
    },
    textThongBao:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    viewAll:{
        height:40,
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    boxItemTB:{
        width:'100%',
        height:100,
        borderBottomWidth:1,
        paddingHorizontal:10,
        paddingVertical:5
    },
})

