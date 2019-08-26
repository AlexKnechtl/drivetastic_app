import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import Modal from "react-native-modal";
import { Bild } from 'img';
import ImageViewer from 'react-native-image-zoom-viewer';
import { IImageInfo } from 'react-native-image-zoom-viewer/built/image-viewer.type';

type ButtonProps = {
    visible: boolean,
    onPress: () => void
}

const ImageZoom = ({ visible = false, onPress }: ButtonProps) => {
    return (
        <Modal style={styles.modal} useNativeDriver={true} onBackButtonPress={onPress} isVisible={visible} onBackdropPress={onPress} >
            {/* <View style={styles.image} >
                
            </View> */}

        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        height: undefined
    },
    image: {
        // aspectRatio: 1 / 0.65,
        width: "100%",
    }
});

export { ImageZoom };
