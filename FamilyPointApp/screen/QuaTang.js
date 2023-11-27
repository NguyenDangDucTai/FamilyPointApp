import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import filter from 'lodash.filter'
import Modal from "react-native-modal";


export default function QuaTang({navigation}){
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }
    
    const [dataCH, setDataCH] = useState(useSelector((state) =>state.dataQTCH));
    const [dataHH, setDataHH] = useState(useSelector((state)=>state.dataQTHH));
    const [colorbtn1, setcolor1] = useState('#00A040');
    const [colorbtn2, setcolor2] = useState('#858585');
    const [text1, setText1] = useState("Còn")
    const [text2, setText2] = useState("ngày!")
    const [booleanText, setbooleanText] = useState(true)

    const [DATA, setDATA] = useState(dataCH)
    const [fulldata, setFullData] = useState(DATA);
    const [searchQuery, setSearchQuery] = useState("");
    const [isVisibleSD, setIsVisibleSD] = useState(true)
    const handleSearch = (query)=> {
        setSearchQuery(query);
        const formattedQuery = query.toString();
        const filterData = filter(fulldata, (user)=>{
            return contains(user, formattedQuery);
        });
        setDATA(filterData);
    }

    const contains = ({name}, query) =>{
        if(name.includes(query))
            return true;
        return false;
    }
    return(
        <View style={styles.container}>
            <Modal style={styles.bottomModalView} isVisible={isModalVisible} backdropOpacity={0} onBackdropPress={toggleModal}>
                <View style={styles.modal}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Sử dụng mã khuyến mãi</Text>
                    </View>
                    <View style={styles.boxBarcode}>
                        <View style={styles.titleBackground1}>
                            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>
                                Mã thành viên
                            </Text>
                        </View>
                        <Image source={require('../assets/Barcode/barcode.png')} style={{width:200, height:90, marginTop:10}}/>
                    </View>
                    <View style={styles.boxBarcode}>
                        <View style={styles.titleBackground2}>
                            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>
                                Mã phiếu quà tặng
                            </Text>
                        </View>
                        <Image source={require('../assets/Barcode/barcode.png')} style={{width:200, height:90, marginTop:10}}/>
                    </View>
                </View>
            </Modal>
            <View style={styles.body1}>
                <Text style={styles.textBody1}>PHIẾU QUÀ TẶNG</Text>
                <View style={styles.searchBar}>
                    <Icon name="search" size={25} color='black'/>
                    <TextInput
                        placeholder="Tìm ưu đãi"
                        placeholderTextColor='silver'
                        clearButtonMode={"always"}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(query)=> handleSearch(query)}
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
                                      setbooleanText(true)
                                      setText1("Còn")
                                      setText2("Ngày")
                                      setIsVisibleSD(true)
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
                                      setbooleanText(false)
                                      setText1("Hết hạn")
                                      setText2("ngày!")
                                      setIsVisibleSD(false)
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
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{width:150}}>
                                                <Text style={styles.textNameVoucher}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                            { isVisibleSD &&(
                                                <View>
                                                    <TouchableOpacity style={{backgroundColor:'#008CD7', borderRadius:20, width:50, height:35, alignSelf:'center', justifyContent:'center', alignItems:'center'}}
                                                                      onPress={toggleModal}

                                                    >
                                                        <Text style={{color:'white', fontWeight:'bold', fontSize:8}}>Sử dụng</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}

                                        </View>
                                        <Text style={[styles.textDateVoucher, {color:booleanText?"#00A040":"red"}]}>
                                            {text1} {item.date} {text2}
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
    bottomModalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modal: {
        width: "100%",
        height: "60%",
        borderTopRightRadius:70,
        borderTopLeftRadius:70,
        alignItems: "center",
        borderWidth: 2,
        borderColor:'silver',
        borderStyle: 'solid',
        backgroundColor: "white",
        paddingVertical:15,
        justifyContent:'space-around'
    },
    boxBarcode:{
        width:'80%',
        height:120,
        borderRadius:20,
        alignItems:'center',
    },
    titleBackground1:{
        backgroundColor:"#008CD7",
        width:'100%',
        height:40,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    titleBackground2:{
        backgroundColor:"#08B404",
        width:'100%',
        height:40,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
})