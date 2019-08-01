import React, { ReactNode, ReactChild } from 'react'
import { View, StyleSheet } from 'react-native';

type ContainerProps = {
    marginHorizontal: number,
    marginVertical: number,
    children: ReactNode | ReactChild,
}

const TextInputContainer = ({ marginHorizontal, marginVertical, children }: ContainerProps) => {
    return (
        <View style={{ ...styles.inputContainer, paddingHorizontal: marginHorizontal, marginVertical: marginVertical }}>
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
