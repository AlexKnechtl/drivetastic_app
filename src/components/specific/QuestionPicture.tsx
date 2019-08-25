import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native';

type HeadlineProps = {
    image: object
}

const QuestionPicture = ({ image }: HeadlineProps) => {
    return (
        <ImageBackground source={image} style={styles.background} />
    );
};

const styles = StyleSheet.create({
    background: {
        aspectRatio: 1 / 0.65,
        width: "100%",
        position: "absolute"
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
