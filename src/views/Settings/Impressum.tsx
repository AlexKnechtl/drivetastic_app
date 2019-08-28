import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, View, Linking, Text } from 'react-native';
import { icons } from 'icons';
import { TransparentLayout } from 'components';
import { dimensions } from 'base';

class Impressum extends Component {

    websitePress() {
        Linking.openURL("https://www.seekinnovation.at");
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image style={styles.logo} source={icons.SeekInnovationLogo} />
                    <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 22 }}>Made with Passion.</Text>
                    <Text style={{ color: '#fff', fontSize: 30 }}>by SeekInnovation</Text>
                </View>
                <ScrollView >
                    <TransparentLayout />
                    <View style={{ flex: 1, paddingHorizontal: 14, paddingVertical: 36, backgroundColor: '#fff' }}>
                        <View style={{ flexDirection: "row-reverse", width: '100%', marginBottom: 36 }}>
                            <Image resizeMode="contain" style={{ width: '35%', height: dimensions.fullWidth * 0.29 }} source={icons.CodingMagic} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#0C3351', fontWeight: "bold", fontSize: 18 }}>Coding Magic</Text>
                                <Text style={{ color: '#0C3351', fontSize: 16, marginBottom: 12 }}>conducted by</Text>
                                <Text style={{ color: '#0C3351', fontWeight: "bold", fontSize: 20 }}>Alexander Knechtl</Text>
                                <Text style={{ color: '#0C3351', fontWeight: "bold", fontSize: 20 }}>Fabio Moretti</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", width: '100%', marginBottom: 36 }}>
                            <Image resizeMode="contain" style={{ width: '35%', height: dimensions.fullWidth * 0.29 }} source={icons.Design} />
                            <View style={{ flex: 1, alignItems: "flex-end" }}>
                                <Text style={{ color: '#3F0C51', fontWeight: "bold", fontSize: 18 }}>Breathtaking Design</Text>
                                <Text style={{ color: '#3F0C51', fontSize: 16, marginBottom: 12 }}>envisioned by</Text>
                                <Text style={{ color: '#3F0C51', fontWeight: "bold", fontSize: 20 }}>Florian Gerstner</Text>
                                <Text style={{ color: '#3F0C51', fontWeight: "bold", fontSize: 20 }}>Alexander Knechtl</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row-reverse", width: '100%', marginBottom: 36 }}>
                            <Image resizeMode="contain" style={{ width: '35%', height: dimensions.fullWidth * 0.29 }} source={icons.Company} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#8E4200', fontWeight: "bold", fontSize: 18 }}>Company</Text>
                                <Text style={{ color: '#8E4200', fontSize: 16, marginBottom: 12 }}>in Charge</Text>
                                <Text style={{ color: '#8E4200', fontWeight: "bold", fontSize: 20 }}>SeekInnovation OG</Text>
                                <Text style={{ color: '#8E4200', fontWeight: "bold", fontSize: 20 }}>8042 Graz</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <View style={{ justifyContent: "center", alignItems: "center", marginRight: 36}}>
                                <View style={{ borderWidth: 2, borderColor: '#D5D5D5', borderRadius: 50, width: 72, height: 72, justifyContent: "center", alignItems: "center" }}>
                                    <Image resizeMode="contain" style={{ width: 52, height: 52 }} source={icons.Website} />
                                </View>
                                <Text style={{ color: '#707070', fontSize: 22, textAlign: "center" }}>Visit our{"\n"}Website</Text>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center"}}>
                                <View style={{ borderWidth: 2, borderColor: '#D5D5D5', borderRadius: 50, width: 72, height: 72, justifyContent: "center", alignItems: "center" }}>
                                    <Image resizeMode="contain" style={{ width: 52, height: 52 }} source={icons.Support} />
                                </View>
                                <Text style={{ color: '#707070', fontSize: 22, textAlign: "center" }}>Get{"\n"}Support</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    header: {
        backgroundColor: '#147377',
        position: "absolute",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 42
    },
    logo: {
        width: 125,
        height: 125,
        marginBottom: 20
    }
});

export { Impressum };