import {Image, ScrollView, StyleSheet, Text, View} from "react-native";


export default function DetailKhuyenMai({navigation, route}){
    const {item} = route.params
    return(
        <View style={styles.container}>
            <ScrollView>
                <Image source={require('../assets/DetailKhuyenMai/imgTitle.png')}
                       style={styles.imgTitle}
                />
                <View style={{marginVertical:10, marginHorizontal:10}}>
                    <Text style={{fontSize:25, fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{fontSize:18,}}>Thời gian diễn ra: {item.date}</Text>
                </View>
                <View style={styles.box1}>
                    <Text style={{fontSize:20}}>Quà còn lại</Text>
                    <Text style={{fontSize:23, color:'#00A040', fontWeight:'bold'}}>{item.quaTon}</Text>
                </View>
                <View style={{marginVertical:10, marginHorizontal:10}}>
                    <Text>
                        Để hoàng thành nhiệm vụ, bạn chỉ cần hoàn thành mua tích luỹ 06 MILO PHA MÁY BẤT KỲ NHẬN NGAY GẤU BÔNG 'THỎ DZỪA LÒNG'{'\n'}
                        Mách nhỏ, bạn có thể mua cùng 1 sản phẩm Milo pha máy hoặc các size khác nhau trong danh sách sa phẩm,dudur số lượng là được bạn nhé.{'\n'}
                        Danh sách các sản phẩm:{'\n'}
                        Milo Ly - S size 14.000đ{'\n'}
                        Milo Ly - XL size 22.000đ{'\n'}
                        Milo Ly - L size 38.000đ
                    </Text>
                    <Text style={{fontWeight:'bold'}}>Lưu ý: Chương trình không cộng dồn số dư sản phẩm vào lượt tiếp theo. Khách hàng vui lòng tích đủ 06 sản phẩm cho 1 lượt đổi quà và sau đó hệ thống sẽ tích lại từ đầu</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width:'100%',
        height:'100%'
    },
    imgTitle:{
        width: 390,
        height: 250,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
    },
    box1: {
        width: 150, height: 80,
        backgroundColor: '#F2F2F2',
        borderRadius: 15,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent:'center',
        alignItems:'center',
    },
})



