import React from 'react'
import { StyleSheet, ImageBackground, View, Dimensions, Image } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {  InstagramProvider, ElementContainer } from "react-native-instagram-zoomable";

type HeadlineProps = {
    image: object
}

const QuestionPicture = ({ image }: HeadlineProps) => {
    const images = [{

        url: "",
        props: {
            source: image
        }
    }];
    return (
        // <ImageBackground source={image} style={styles.background} />
        <View style={styles.background}>
            <Image
                source={image}
            // backgroundColor="#0000"

                // renderIndicator={ci => <View />}
                style={styles.background}
                // maxOverflow={0}
                // imageUrls={images}
                 />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        aspectRatio: 1 / 0.66,
        width: Dimensions.get('window').width,
    },
    iconContainer: {
        position: "absolute",
        bottom: 18,
        right: 18,
    },
    icon: {
        width: 30,
        height: 30
    }
});

export { QuestionPicture };
