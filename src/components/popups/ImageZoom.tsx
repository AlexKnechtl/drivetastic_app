import React from 'react'
import { StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import ImageViewer from 'react-native-image-zoom-viewer';
import { Bild } from 'img';

type ButtonProps = {
    visible: boolean,
    onPress: () => void
}

const ImageZoom = ({ visible = false, onPress }: ButtonProps) => {
    return (
        <Modal style={styles.modal} useNativeDriver={true} isVisible={visible} onBackdropPress={onPress} >
            <ImageViewer style={styles.image} imageUrls={Bild} />
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        height: null
    },
    image: {
        aspectRatio: 1 / 0.65,
        width: "100%"
    }
});

export { ImageZoom };
