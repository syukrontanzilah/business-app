import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const LoginScreen = () => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
    }}>
        <View style={styles.imgView}>
      <Image style={styles.imgLogin} source={require('./../assets/images/login.png')}/>            
        </View>

        <View style={styles.subView}>
          <Text style={styles.textTitel}>Your Ultimate Community Business Directory</Text>
        </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    imgView: {
        display:'flex',
        alignItems:'center',
        // marginTop:100
    },
    imgLogin:{
        width: 220,
        height:450,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
    },
    subView:{
        backgroundColor:'#fff', padding:20,
        textAlign:'center'
    },
    textTitel: {
        color: Colors.PRIMARY,
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'outfit',
        textAlign:'center'
    }
})