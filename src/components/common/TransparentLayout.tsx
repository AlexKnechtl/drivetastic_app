import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { icons } from 'icons';

type HeadlineProps = {
    visible: boolean
}

const TransparentLayout = ({ visible }: HeadlineProps) => {
    return (
        <View style={{ width: "100%", aspectRatio: 1 / 0.65 }}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={icons.Fullscreen} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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

export { TransparentLayout };
