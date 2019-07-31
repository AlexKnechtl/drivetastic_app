import React, { ReactChild, ReactNode } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';

type BackgroundProps = {
    colorFilter: string,
    image: object,
    children: ReactChild | ReactNode
}

const ImageBg = ({ image, colorFilter, children }: BackgroundProps) => {
    return (
        <ImageBackground
            style={styles.background}
            source={image}>
            <View style={{ ...styles.innerFrame, backgroundColor: colorFilter }}>
                {children}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    innerFrame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { ImageBg };