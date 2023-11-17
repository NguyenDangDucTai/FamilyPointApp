import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";


export default function PhieuQuaTang({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.body1}>
                <Image source={require('../assets/PhieuQuaTang/Coupon.png')}
                       style={styles.imageCoupon}/>
            </View>
            <View style={styles.body2}>
                <Text style={styles.textEcoupon}>
                    E-COUPON Trị giá 5,000Đ
                </Text>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <View style={styles.cell}>
                        <Text style={styles.textCell1}>Khả dụng</Text>
                        <Text style={styles.textCell2}>Trạng thái</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textCell1}>12/11/2023</Text>
                        <Text style={styles.textCell2}>Hiệu lực</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.textCell1}>1</Text>
                        <Text style={styles.textCell2}>Số lượng</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.codeNumber}>
                        <Text style={styles.textCode}>12345678912345</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonSuDung}>
                        <Text style={styles.textSudung}>Sử dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body3}>
                <Text>
                    *Điều kiện áp dụng:<br/>
                    - Áp dụng đối với hoá đơn từ 20,000đ trở lên.<br/>
                    - Coupon không quy thành tiền mặt và hoàn tiền thừa.<br/>
                    - Coupon chỉ được sử dụng 1 lần.<br/>
                    - Coupon chỉ được sử dụng cho giao dịch kế tiếp tính từ giao dịch phát sinh coupon.<br/>
                    - Coupon chỉ được phát hành độc quyền trên ứng dụng FamiPoint.<br/>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#fff',
    },
    body1:{
        flex: 2,
        marginBottom:20
    },
    body2:{flex: 2,
        paddingHorizontal:15,
        justifyContent:'space-around'
    },
    body3:{
        flex: 3,
        paddingHorizontal:15,
    },
    imageCoupon:{
        width: 390,
        height:'100%',
    },
    textEcoupon:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'Open-Sans',
    },
    cell:{
        flex:1,
        backgroundColor:'#F2F2F2',
        width:'100%',
        height:60,
        marginHorizontal:10,
        paddingVertical:10,
        alignItems:'center',
        borderRadius:10,
        justifyContent:'space-around'
    },
    textCell1:{
        color:'#00A040',
        fontWeight:'bold',
        fontFamily:'Open-Sans',
        fontSize:15
    },
    textCell2:{
        color:'#A5A5A5',
        fontSize:11
    },
    codeNumber:{
        backgroundColor:'#F2F2f2',
        flex:7,
        width:'100%',
        height:50,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonSuDung:{
        backgroundColor:'#008CD7',
        flex:3,
        width:'100%',
        height:50,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    textCode:{
        color:'#7F7272',
        fontSize:18,
        fontFamily:'Open-Sans',
        fontWeight:'bold'
    },
    textSudung:{
        color:'white',
        fontSize:18,
        fontFamily:'Open-Sans',
        fontWeight:'bold'
    }

});