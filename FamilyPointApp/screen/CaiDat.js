import {Button, Image, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useState} from "react";


export default function CaiDat({navigation}){
    const [isEnabled1, setIsEnabled1] = useState(true);
    const [isEnabled2, setIsEnabled2] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return(
        <View style={styles.container}>
            <View style={styles.body1}>
                <TouchableOpacity style={{width:'50px',position:'absolute', top:28, zIndex:10}} onPress={()=>{navigation.navigate('Home')}}>
                    <Icon name='arrow-left' size={30} color='white'/>
                </TouchableOpacity>
                <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.textCaiDat}>CÀI ĐẶT</Text>
                </View>
            </View>
            <View style={styles.body2}>
                <View style={styles.box}>
                    <Text style={styles.textTilteBox1}>Tự động đăng nhập</Text>
                    <View style={styles.onbox}>
                        <Text>Tự động đăng nhập vào ứng dụng</Text>
                        <Switch
                            trackColor={{false: '#767577', true: '#f5dd4b'}}
                            thumbColor={isEnabled1 ? '#00A040' : '#f4f3f4'}
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textTilteBox1}>Hiển thị màn hình chính</Text>
                    <View style={styles.onbox}>
                        <Text>Ứng dụng sẽ hiển thị <b>màn hình chính</b> đầu tiên khi đăng nhập</Text>
                        <Switch
                            trackColor={{false: '#767577', true: '#f5dd4b'}}
                            thumbColor={isEnabled2 ? '#00A040' : '#f4f3f4'}
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.body3}>
                <Image source={require('../assets/CaiDat/bottomImage.png')}
                       style={{width:200, height:160}}
                />
                <TouchableOpacity style={{
                    borderRadius:30,
                    backgroundColor:'#FFBA0A',
                    width:'230px',
                    height:'35px',
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:5,
                }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:15,
                    }}>Trung tâm hỗ trợ</Text>
                </TouchableOpacity>
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
        flexDirection:'row',
        width:'100%',
        height:80,
    },
    body2:{
        flex:5,
        alignItems:'center',
        paddingVertical:15,
    },
    body3:{
        flex:4,
        alignItems:'center',
    },
    textCaiDat:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    box:{
        width:'300px',
        height:'70px',
        borderWidth:1,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:10
    },
    textTilteBox1:{
        position:'absolute',
        backgroundColor:'white',
        color:'#00A040',
        fontWeight:'bold',
        fontSize:15,
        alignSelf:'center',
        top:-10,
        zIndex:50,
    },
    onbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

})
