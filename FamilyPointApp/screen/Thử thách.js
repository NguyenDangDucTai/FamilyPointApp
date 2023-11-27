import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import {useState} from "react";
import {useSelector} from "react-redux";




export default function ThuThach({navigation}){
    const dataConHan = useSelector((state)=>state.dataTTCH)
    const dataHetHan = useSelector((state)=>state.dataTTHH)

    const [colorbtn1, setcolor1] = useState('#00A040');
    const [colorbtn2, setcolor2] = useState('#858585');
    const [btn1, setbtn1] = useState(true)
    const [btn2, setbtn2] = useState(false)
    const [DATA, setDATA] = useState(dataConHan)
    return(
        <View style={styles.container}>
            <View style={styles.body1}>
                <Text style={styles.textBody1}>THỬ THÁCH</Text>
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
                <TouchableOpacity style={styles.button1}
                                  onPress={()=>{
                                      setcolor1('#00A040')
                                      setcolor2('#858585')
                                      setbtn1(true)
                                      setbtn2(false)
                                      setDATA(dataConHan)
                                  }}
                >
                    <Text style={[styles.textbar1, {color: colorbtn1}]}>Còn hiệu lực</Text>
                    <View style={[styles.barbtt1, {backgroundColor: colorbtn1}]}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                                  onPress={()=>{
                                      setcolor1('#858585')
                                      setcolor2('#00A040')
                                      setbtn1(false)
                                      setbtn2(true)
                                      setDATA(dataHetHan)
                                  }}
                >
                    <Text style={[styles.textbar2, {color: colorbtn2}]}>Hết hiệu lực</Text>
                    <View style={[styles.barbtt2, {backgroundColor: colorbtn2}]}></View>
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
                                        source={require('../assets/ThuThach/imgVoucher_01.png')}
                                        style={{width:'80px', height:'80px'}}
                                    />
                                </View>
                                <View style={{flex:1, justifyContent:'space-between'}}>
                                    <View style={{width:'100%', paddingTop:10, paddingLeft:5}}>
                                        <Text style={styles.textNameVoucher}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.textDateVoucher}>
                                            {item.date}
                                        </Text>
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
        marginBottom:10
    },
    barbtt1:{
        width:'100%',
        height:'3px',
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
        marginVertical:5,
    },
    textNameVoucher:{
        fontWeight:'bold',
        fontSize:15,
    },
    textDateVoucher:{
        fontSize:13,
        color:'#808080',
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