import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { ProgressQuestionMenu } from 'components/specific/ProgressQuestionMenu';
import { RowIconButton } from 'components/common';
import { icons } from 'icons';

type MenuProps = {
    visible: boolean,
    backPress: () => void
}

const QuestionMenu = ({ visible = false, backPress }: MenuProps) => {
    return (
        <Modal style={styles.modal} useNativeDriver={true} isVisible={visible} onBackButtonPress={backPress} onBackdropPress={backPress} >
            <View style={styles.view}>
                <ProgressQuestionMenu percentage={0.7} />
                <View style={{ flexDirection: "row", marginBottom: 12, justifyContent: "space-between" }}>
                    <RowIconButton marginRight={8} color='#000' rotation={90} icon={icons.ArrowDown} text="Lernen beenden" />
                    <RowIconButton flex={1} rowDirection="row-reverse" text="Video zur Frage" icon={icons.Video} />
                </View>
                <View style={{ flexDirection: "row-reverse", width: "100%" }}>
                    <TouchableOpacity onPress={backPress} style={styles.closeButton}>
                        <Image style={styles.closeIcon} source={icons.ArrowDown} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: "bold" }}>4 Verkehrssituationen</Text>
                        <Text style={{ color: '#000', fontSize: 16 }}>Frage 20 von 68</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        height: undefined,
        justifyContent: "flex-end",
        margin: 0
    },
    view: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 10
    },
    closeIcon: {
        width: 18,
        height: 28
    },
    closeButton: {
        width: 52,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    }
});

export { QuestionMenu };
