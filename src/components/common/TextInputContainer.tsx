import React, { ReactNode, ReactChild } from 'react'
import { View, StyleSheet } from 'react-native';

type ContainerProps = {
    margin: number,
    children: ReactNode | ReactChild,
}

const TextInputContainer = ({ margin, children }: ContainerProps) => {
    return (
        <View style={{ ...styles.inputContainer, paddingHorizontal: margin }}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});

export { TextInputContainer };
