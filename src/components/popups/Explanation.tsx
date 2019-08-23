import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';
import Modal from "react-native-modal";
import { colors } from 'base';

type ButtonProps = {
    visible: boolean,
    icon: object,
    gif: object,
    text1: string,
    text2: string,
    title: string,
    onPress: () => void
}

const Explanation = ({ visible = false, icon, text1, text2, title, onPress, gif }: ButtonProps) => {
    return (
        <Modal style={styles.modal} useNativeDriver={true} isVisible={visible} onBackdropPress={onPress} >
            <View style={styles.view}>
                <Image resizeMode="contain" style={styles.icon} source={icon} />
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>{text1}</Text>
                <Text style={styles.text}>{text2}</Text>
                <Image resizeMode="contain" style={styles.gif} source={gif} />
                <Text style={styles.smallText}>Tippe um fortzufahren </Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        height: null
    },
    view: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lightGreen,
        width: 280,
        paddingHorizontal: 14,
        paddingVertical: 20,
        borderRadius: 10
    },
    icon: {
        width: 100,
        height: 50,
        marginBottom: 12
    },
    gif: {
        width: 60,
        height: 60,
        marginTop: 4
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
        marginTop: 4,
        textAlign: "center"
    }
});

export { Explanation };
