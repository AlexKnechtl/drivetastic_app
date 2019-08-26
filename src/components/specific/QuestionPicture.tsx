import React from 'react'
import { StyleSheet, ImageBackground, View, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

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
            <ImageViewer backgroundColor="#0000"
            
                renderIndicator={ci => <View />}
                style={styles.background}
                maxOverflow={0}
                imageUrls={images} />
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
