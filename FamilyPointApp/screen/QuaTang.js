import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


export default function QuaTang({navigation}){
    
    const [dataCH, setDataCH] = useState(useSelector((state) =>state.dataQTCH));
    const [dataHH, setDataHH] = useState(useSelector((state)=>state.dataQTHH));
    const [colorbtn1, setcolor1] = useState('#00A040');
    const [colorbtn2, setcolor2] = useState('#858585');
    const [text1, setText1] = useState("Còn")
    const [text2, setText2] = useState("ngày!")

    const [DATA, setDATA] = useState(dataCH)
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
                <TouchableOpacity style={styles.button1}
                                  onPress={()=>{
                                      setcolor1('#00A040')
                                      setcolor2('#858585')
                                      setDATA(dataCH)
                                      setText1("Còn")
                                      setText2("Ngày")
                                  }}
                >
                    <Text style={[styles.textbar1, {color: colorbtn1}]}>Còn hiệu lực</Text>
                    <View style={[styles.barbtt1, {backgroundColor: colorbtn1}]}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                                  onPress={()=>{
                                      setcolor1('#858585')
                                      setcolor2('#00A040')
                                      setDATA(dataHH)
                                      setText1("")
                                      setText2("")
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
                            <TouchableOpacity style={styles.voucher}
                                              onPress={()=>{
                                                  navigation.navigate("PhieuQuaTang")
                                              }}
                            >
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
                            </TouchableOpacity>
                        )
                    }}
                />
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
    barbtt1:{width:'100%',
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
        marginBottom:10
    },
    barbtt2:{
        width:'100%',
        height:'3px',
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