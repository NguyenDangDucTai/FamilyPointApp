import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


const DATA = [
    {
        id:'01',
        name:'E-Coupon Trị giá 5.000Đ',
        date:5
    }
]

export default function QuaTang({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.body1}>
                <Text style={styles.textBody1}>PHIẾU QUÀ TẶNG</Text>
                <View style={styles.searchBar}>
                    <Icon name="search" size={25} color='black'/>
                    <TextInput
                        placeholder="Tìm ưu đãi"
                        placeholderTextColor='silver'
                        style={styles.textinputSearch}
                    />
                </View>
            </View>
            <View style={styles.body2}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textbar1}>Còn hiệu lực</Text>
                    <View style={styles.barbtt1}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.textbar2}>Hết hiệu lực</Text>
                    <View style={styles.barbtt2}></View>
                </TouchableOpacity>
            </View>
            <View style={styles.body3}>
                <FlatList
                    data={DATA}
                    renderItem={({item})=>{
                        return(
                            <View style={styles.voucher}>
                                <View style={{justifyContent:'center'}}>
                                    <Image
                                        source={require('../assets/QuaTang/voucher.png')}
                                        style={{width:'80px', height:'80px'}}
                                    />
                                </View>
                                <View style={{flex:1, justifyContent:'space-between'}}>
                                    <View style={{width:'70%', paddingTop:10, paddingLeft:5}}>
                                        <Text style={styles.textNameVoucher}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.textDateVoucher}>
                                            Còn {item.date} ngày!
                                        </Text>
                                    </View>
                                    <View style={{alignItems:'flex-end', justifyContent:'flex-end'}}>
                                        <View style={styles.giatrisudung}>
                                            <Text style={styles.textGTSD}>Lượt sử dụng còn lại: 1</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%'
    },
    body1:{
        flex:1.5,
        backgroundColor:'#008CD7',
        width:'100%',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        alignItems:'center',
        paddingVertical:15,
        marginBottom: 15,
        justifyContent:'space-around',
    },
    body2:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        paddingVertical:10,
    },
    body3:{
        alignItems:'center',
        flex:7.5,
        width:'100%',
        paddingHorizontal:10
    },
    textBody1:{
        fontWeight:'bold',
        fontFamily:'Open-Sans',
        color:'white',
        fontSize:23,

    },
    searchBar:{
        width:'300px',
        height:'40px',
        backgroundColor:'white',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15
    },
    textinputSearch:{
        width:'100%',
        height:'80%',
        marginLeft:10,
        fontSize:18,
        outlineStyle:'none',
    },
    button1:{
        alignItems:'center',
        flex:1,
        width:'100%',
        height:'100%',
    },
    textbar1:{
        fontSize:18,
        fontFamily:'Open-Sans',
        fontWeight:'bold',
        color:'#00A040',
        marginBottom:10
    },
    barbtt1:{width:'100%',
        height:'5px',
        backgroundColor: '#00A040'
    },
    button2:{
        alignItems:'center',
        flex:1,
        width:'100%',
        height:'100%',
    },
    textbar2:{
        fontSize:18,
        fontFamily:'Open-Sans',
        fontWeight:'bold',
        color:'#858585',
        marginBottom:10
    },
    barbtt2:{
        width:'100%',
        height:'3px',
        backgroundColor: '#858585'
    },
    voucher:{
        paddingLeft:10,
        borderWidth:1,
        borderColor:"#9D9D9D",
        height:"100px",
        width:'300px',
        flexDirection:'row',
        borderRadius:15,
    },
    textNameVoucher:{
        fontWeight:'bold',
        fontSize:17,
    },
    textDateVoucher:{
        fontSize:13,
        color:'#00A040',
    },
    giatrisudung:{
        backgroundColor:'#D9D9D9',
        width:'150px',
        height:'20px',
        borderBottomRightRadius:15,
        borderTopLeftRadius:20,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingRight:15,
    },
    textGTSD:{
        fontSize:10,
        color:'#6F6464',
    },
})