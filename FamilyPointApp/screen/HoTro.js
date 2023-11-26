import {Image, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


export default function HoTro({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.body1}>
                <TouchableOpacity style={{width:'50px', zIndex:10, position:'absolute', top:15}}
                                  onPress={()=>{
                                      navigation.navigate('Home')
                                  }}
                >
                    <Icon name='arrow-left' size={30} color='white'/>
                </TouchableOpacity>
                <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.textHoTro}>HỖ TRỢ</Text>
                </View>
            </View>
            {/*Body 2*/}
            <View style={styles.body2}>
                {/*Box trung tam ho tro*/}
                <View style={styles.box1}>
                    <View style={styles.boxTilte1}>
                        <Image source={require('../assets/HoTro/icon1.png')} style={{width:15, height:15}}/>
                        <Text style={styles.textTilteBox}>Tự động đăng nhập</Text>
                    </View>
                    <View style={styles.onbox}>
                        <Text style={{color:'#008CD7', fontSize:20, fontWeight:'bold'}}>+84 2862 885 558</Text>
                        <Text style={{color:'#808080'}}>Thời gian hỗ trợ: <b>8:00 - 17:00</b></Text>
                    </View>
                </View>
                {/*Box dat cau hoi*/}
                <View style={styles.box2}>
                    <View style={styles.boxTilte2}>
                        <Image source={require('../assets/HoTro/icon2.png')} style={{width:18, height:18}}/>
                        <Text style={styles.textTilteBox}>Đặt câu hỏi</Text>
                    </View>
                    <View style={styles.onbox}>
                        <Text style={{color:'#808080', fontSize:13}}>
                            Lưu ý: tất cả phản hồi về câu hỏi mà bạn nhập bên dưới
                            sẽ được gửi đến hộp thư điện tử của bạn. Trong một số trường
                            hợp đặc biệt, chúng tôi sẽ liên hệ trực tiếp qua điện thoại.
                        </Text>
                        <TouchableOpacity style={styles.btnDatCauHoi}
                                          onPress={()=>{}}
                        >
                            <Text style={{color:'white'}}>Đặt câu hỏi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Box chinh sach*/}
                <View style={styles.box3}>
                    <View style={styles.boxTilte3}>
                        <Image source={require('../assets/HoTro/icon3.png')} style={{width:15, height:15}}/>
                        <Text style={styles.textTilteBox}>Chính sách của Famipoint</Text>
                    </View>
                    <View style={styles.onbox3}>
                        <TouchableOpacity style={{width:60, alignItems:'center'}}>
                            <Image source={require('../assets/HoTro/icon3_1.png')} style={{width:40, height:40}}/>
                            <Text style={{textAlign:'center', fontSize:12, color:'#808080'}}>Chính sách riêng tư</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:62, alignItems:'center'}}>
                            <Image source={require('../assets/HoTro/icon3_2.png')} style={{width:40, height:40}}/>
                            <Text style={{textAlign:'center', fontSize:12, color:'#808080'}}>Điều khoản sử dụng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:60, alignItems:'center'}}>
                            <Image source={require('../assets/HoTro/icon3_3.png')} style={{width:40, height:40}}/>
                            <Text style={{textAlign:'center', fontSize:12, color:'#808080'}}>Hướng dẫn sử dụng</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/*box thong tin dang nhap*/}
                <View style={styles.box4}>
                    <View style={styles.boxTilte4}>
                        <Image source={require('../assets/HoTro/icon4.png')} style={{width:15, height:15}}/>
                        <Text style={styles.textTilteBox}>Thông tin đăng nhập</Text>
                    </View>
                    <View style={styles.onbox}>
                        <Text>Lần đăng nhập gần nhất:</Text>
                        <Text>06/11/2023 05:40:27</Text>
                    </View>
                </View>
                {/*box thong tin ung dung*/}
                <View style={styles.box5}>
                    <View style={styles.boxTilte5}>
                        <Image source={require('../assets/HoTro/icon5.png')} style={{width:15, height:15}}/>
                        <Text style={styles.textTilteBox}>Thông tin ứng dụng</Text>
                    </View>
                    <View style={styles.onbox}>
                        <Text>iiPoint Service 2.8.1</Text>
                        <Text style={{fontSize: 13}}>Copy right by FPT Sofware Ho Chi Minh Co,Ltd.</Text>
                    </View>
                </View>

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
        backgroundColor:'#008CD7',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        paddingHorizontal:20,
        paddingVertical:10,
        width:'100%',
        height:80,
    },
    body2:{
        flex:9,
        alignItems:'center',
        paddingVertical:15,
    },
    textHoTro:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    box1:{
        width:'300px',
        height:'70px',
        borderWidth:1,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:10,
        alignItems:'center',
    },
    boxTilte1:{
        position:'absolute',
        backgroundColor:'white',
        alignSelf:'center',
        top:-10,
        zIndex:50,
        flexDirection:'row',
        alignItems:'center',
        width:180,
        justifyContent:'space-around',
    },
    box2:{
        width:'300px',
        height:'130px',
        borderWidth:1,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:10
    },
    boxTilte2:{
        position:'absolute',
        backgroundColor:'white',
        alignSelf:'center',
        top:-10,
        zIndex:50,
        flexDirection:'row',
        alignItems:'center',
        width:110,
        justifyContent:'space-around',
    },
    box3:{
        width:'300px',
        height:'100px',
        borderWidth:1,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:10,
        justifyContent:'center',
    },
    boxTilte3:{
        position:'absolute',
        backgroundColor:'white',
        alignSelf:'center',
        top:-10,
        zIndex:50,
        flexDirection:'row',
        alignItems:'center',
        width:220,
        justifyContent:'space-around',
    },
    onbox3:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
    },
    box4:{
        justifyContent:'center',
        width:'300px',
        height:'80px',
        borderWidth:1,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:10
    },
    boxTilte4:{
        position:'absolute',
        backgroundColor:'white',
        alignSelf:'center',
        top:-10,
        zIndex:50,
        flexDirection:'row',
        alignItems:'center',
        width:185,
        justifyContent:'space-around',
    },
    box5:{
        justifyContent:'center',
        width:'300px',
        height:'80px',
        borderWidth:1,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:10
    },
    boxTilte5:{
        position:'absolute',
        backgroundColor:'white',
        alignSelf:'center',
        top:-10,
        zIndex:50,
        flexDirection:'row',
        alignItems:'center',
        width:180,
        justifyContent:'space-around',
    },
    textTilteBox:{
        color:'#00A040',
        fontWeight:'bold',
        fontSize:16,
    },
    onbox:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    btnDatCauHoi:{
        backgroundColor:'#008CD7',
        width:100,
        height: 25,
        borderRadius:15,
        alignItems:'center',
        marginVertical:10,
        justifyContent:'center'
    },

})
