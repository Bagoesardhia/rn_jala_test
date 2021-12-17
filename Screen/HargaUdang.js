import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    Image,
    FlatList,
    TouchableOpacity,
    Pressable,
    Modal,
 } from "react-native";
import { render } from "react-dom";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const HargaUdang = ({navigation, route}) => {

    const getDataFromApiAsync = async () => {
        try{
            let response = await fetch('https://app.jala.tech/api/shrimp_prices?per_page=15&page=1&with=region%2Ccreator&region_id='
            );
            let json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error)
        }
    };

    const [data, setData] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState([]);

    useEffect(() => {
        getDataFromApiAsync()
    },[])

    
 
    const renderItem = ({item, route}) => {
        return(
            <View style={styles.containerflat}>

                <View style={styles.containergambar}>
                    <Image
                        source={{uri: "https://app.jala.tech/images/errors/404.png"}}
                        style={styles.gambar}
                    />
                    <Text style = {styles.namaSupplier}>{item.creator.name}</Text>
                </View>

                <View style = {styles.containerisi}>
                    <Text style = {styles.dateSize}>{item.date}</Text>
                    <Text style = {styles.regionFull}>{item.region.full_name}</Text>
                    <Text style = {styles.region}>{item.region.name_translated}</Text>
                    <Text style = {styles.dateSize}>size 100</Text>
                    <Text style = {styles.price}>IDR {item.size_100}</Text>
                </View>
                <View style = {styles.containerbtn}>
                    <TouchableOpacity 
                        style = {styles.btn}
                        onPress={()=> navigation.navigate('DetailScreen', {data:item})}
                    >
                    <Text style = {styles.txtBtn}>Lihat Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    

    return(
        <SafeAreaView style = {styles.container}>
            
            <Text style = {styles.judul}>Harga Terbaru</Text>
                
            <FlatList
                data = {data}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.id}
            />
            <TouchableOpacity 
                onPress={() => setModalVisible(true)}
                style = {styles.btn1}>
                <Text style = {styles.txtbtn1}>Size</Text>
                <Text style = {styles.txtbtn1}>100</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => setModalVisible1(true)}
            style = {styles.btn2}>
                <Text style = {styles.txtbtn2}>Indonesia</Text>
            </TouchableOpacity>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <ScrollView style={styles.modalView}>
                        <View style={styles.modalView1}>
                            <Text style={styles.modalText}>Size</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Tutup</Text>
                        </Pressable>
                        </View>
                        
                        <Text style={styles.modalText}>20</Text>
                        <Text style={styles.modalText}>30</Text>
                        <Text style={styles.modalText}>40</Text>
                        <Text style={styles.modalText}>50</Text>
                        <Text style={styles.modalText}>60</Text>
                        <Text style={styles.modalText}>70</Text>
                        <Text style={styles.modalText}>80</Text>
                        <Text style={styles.modalText}>90</Text>
                        <Text style={styles.modalText}>100</Text>
                        <Text style={styles.modalText}>110</Text>
                        <Text style={styles.modalText}>120</Text>
                        <Text style={styles.modalText}>130</Text>
                        <Text style={styles.modalText}>140</Text>
                        <Text style={styles.modalText}>150</Text>
                        <Text style={styles.modalText}>160</Text>
                        <Text style={styles.modalText}>170</Text>
                        <Text style={styles.modalText}>180</Text>
                        <Text style={styles.modalText}>190</Text>
                        <Text style={styles.modalText}>200</Text>

                        
                    </ScrollView>
                </View>

            </Modal>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    modalView: {
        top: 80,
        backgroundColor: "white",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        shadowColor: "#000",
        opacity: 100,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonClose:{
          left: 270
      },
      modalView1: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        shadowColor: "#000",
        opacity: 100,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    
    modalText: {
        margin: 10
    },
    textStyle:{
        marginTop: 10,
        color: "#1B77DF",
    },
    judul: {
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontWeight: "700",
        alignSelf: "center",
        padding: 10,
        color:"#004492"
    },
    containerflat: {
        flex: 1,
        margin: 10,
        borderWidth: 0.5,
        borderRadius: 10,
    },
    gambar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain',
        borderWidth: 1,
        marginBottom: 10
    },
    containergambar: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    containerisi:{
        flex: 1,
        margin: 10,
        marginTop: -15,
        marginBottom: 10,
    },
    containerbtn:{
        flex: 1,
   
        width: 128,
        height: 40,
        borderRadius: 4,
        alignSelf: 'center',
        justifyContent: "center",
        marginLeft: 180,
        marginTop: -40
    },
    btn:{
        width: 128,
        height: 32,
        borderRadius: 4,
        backgroundColor: '#1B77DF',
        marginBottom: 17
    },
    btn1: {
        position: 'absolute',
        width: 136,
        height: 50,
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        bottom: 8,
        left: 12,
        right: 20,
        elevation: 0,
        backgroundColor: '#004492',
    },
    btn2: {
        position: 'absolute',
        width: 215,
        height: 50,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        bottom: 8,
        right: 12,
        elevation: 0,
        backgroundColor: '#1B77DF',
    },
    txtbtn1: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.5,
        alignSelf: "center",
        color: 'white'
    },
    txtbtn2: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.5,
        alignSelf: "center",
        color: 'white',
        top: 10,
    },
    txtBtn:{
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 20,
        letterSpacing: 0.5,
        margin: 6,
        alignSelf: "center"
    },
    namaSupplier: {
        marginTop: 40,
        fontWeight: '400',
        fontSize: 17,
        margin: 10
    },
    dateSize: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        marginLeft: 10
    },
    regionFull: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        marginLeft: 10
    },
    region: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 24,
        marginLeft: 10
    },
    price: {
        fontSize: 22,
        fontWeight: "900",
        lineHeight: 28,
        marginLeft: 10,
    },
})

export default HargaUdang;