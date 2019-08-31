import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { Pulse1, Pulse2, Pulse3, Pulse4, Pulse5, Pulse6, Pulse7, Pulse8, Pulse9, Pulse10, Pulse11, Pulse12, Pulse13, Pulse14, Pulse15, Pulse16, Pulse17, Pulse18, Pulse19, Pulse20, Pulse21, Pulse22, Pulse23, Pulse24, Pulse25, Pulse26, Pulse27, Pulse28, Pulse29, Pulse30, Pulse31, Pulse32, Pulse33, Pulse34, Pulse35, Pulse36, Pulse37, Pulse38, Pulse39, Pulse40, Pulse41, Pulse42, Pulse43, Pulse44, Pulse45, Pulse46, Pulse47, Pulse48, Pulse49, Pulse50, Pulse51, Pulse52, Pulse53, Pulse54, Pulse55, Pulse56, Pulse57, Pulse58, Pulse59, Pulse60, Pulse61, Pulse62, Pulse63, Pulse64, Pulse65, Pulse66, Pulse67, Pulse68, Pulse69, Pulse70, Pulse71, Pulse72, Pulse73, Pulse74} from 'animations/Pulsing';
const images = [Pulse1, Pulse2, Pulse3, Pulse4, Pulse5, Pulse6, Pulse7, Pulse8, Pulse9, Pulse10, Pulse11, Pulse12, Pulse13, Pulse14, Pulse15, Pulse16, Pulse17, Pulse18, Pulse19, Pulse20, Pulse21, Pulse22, Pulse23, Pulse24, Pulse25, Pulse26, Pulse27, Pulse28, Pulse29, Pulse30, Pulse31, Pulse32, Pulse33, Pulse34, Pulse35, Pulse36, Pulse37, Pulse38, Pulse39, Pulse40, Pulse41, Pulse42, Pulse43, Pulse44, Pulse45, Pulse46, Pulse47, Pulse48, Pulse49, Pulse50, Pulse51, Pulse52, Pulse53, Pulse54, Pulse55, Pulse56, Pulse57, Pulse58, Pulse59, Pulse60, Pulse61, Pulse62, Pulse63, Pulse64, Pulse65, Pulse66, Pulse67, Pulse68, Pulse69, Pulse70, Pulse71, Pulse72, Pulse73, Pulse74];

type ButtonProps = {
    visible: boolean,
    icon: object,
    text1: string,
    text2: string,
    title: string,
    color: string,
    onPress: () => void
}

const Explanation = ({ visible = false, icon, text1, text2, title, onPress, color }: ButtonProps) => {
    return (
        <Modal style={styles.modal} useNativeDriver={true} isVisible={visible} onBackButtonPress={onPress} onBackdropPress={onPress} >
            <View style={{ ...styles.view, backgroundColor: color }}>
                <Image resizeMode="contain" style={styles.icon} source={icon} />
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>{text1}</Text>
                <Text style={styles.text}>{text2}</Text>
                <TouchableOpacity style={{alignItems: "center"}} onPress={onPress} activeOpacity={1}>
                    {/* <ImageSequence style={styles.icon} images={images} framesPerSecond={30} /> */}
                    <Text style={styles.smallText}>Tippe um fortzufahren </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        height: undefined
    },
    view: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 280,
        paddingHorizontal: 14,
        paddingVertical: 20,
        borderRadius: 10
    },
    icon: {
        width: 100,
        height: 50,
        marginBottom: 8
    },
    gif: {
        width: 60,
        height: 60,
        marginTop: 4,
        alignSelf: "center"
    },
    title: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 14,
        textAlign: "center"
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 14,
        textAlign: "center"
    },
    smallText: {
        color: '#fff',
        fontSize: 12,
        textAlign: "center"
    }
});

export { Explanation };
