import React,{useEffect} from "react";
import { View, Image, StyleSheet } from "react-native";
const SplashScreen =({onFinish}:{onFinish: ()=> void})=>{}

const Splash =({onfinish}: {onfinish: () => void }) =>{
    useEffect(()=> {
        const timer = setTimeout(()=> {
            onfinish();
        },5000 );

        return ()=> clearTimeout(timer);
    }, [onfinish]);
    return (
        <View style={styles.container}>
        <Image
        source={require('../assets/images/pdg.mp4')}
        style={styles.logo}
        resizeMode='contain'
        />
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width:200,
        height:200,
    }

});