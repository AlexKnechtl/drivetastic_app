import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { QuestionPicture, QuestionLayout, Answer, QuestionFAB, TransparentLayout, ImageZoom } from 'components';
import { Bild } from 'img';
import { icons } from 'icons';
import ImageViewer from 'react-native-image-zoom-viewer';

class Question extends Component {
    state = {
        answer1Pressed: false,
        answer2Pressed: false,
        answer3Pressed: false,
        answer4Pressed: false,
        imageZoom: false
    }

    answer1Pressed() {
        this.setState({ answer1Pressed: !this.state.answer1Pressed })
    }

    answer2Pressed() {
        this.setState({ answer2Pressed: !this.state.answer2Pressed })
    }

    answer3Pressed() {
        this.setState({ answer3Pressed: !this.state.answer3Pressed })
    }

    answer4Pressed() {
        this.setState({ answer4Pressed: !this.state.answer4Pressed })
    }

    render() {
        return (
            <View style={styles.view}>
                <ScrollView style={{ flex: 1}}>
                    {/* <TransparentLayout onPress={() => this.setState({ imageZoom: !this.state.imageZoom })} visible={true} /> */}
                    <QuestionPicture image={Bild} />
                    <QuestionLayout count={1} text="Wie werden Sie sich hier verhalten?" difficulty="Leicht" />
                    <View style={{ flex: 1, padding: 14, backgroundColor: '#fff' }}>
                        <Answer text="Ich muss hier anhalten" />
                        <Answer text="Bis zu den Personen fahre ich auf Gefahrensicht" />
                        <Answer text="Ich muss hier aufgrund der Kinder mein Tempo auf Schrittgeschwindigkeit reduzieren und den Dick in die Hand nehmen." />
                        <Answer text="Antwort 4" />
                    </View>
                    {/* <View style={{height: Dimensions.get('window').width*0.66, width: 20, backgroundColor: "#ff0"}} /> */}
                </ScrollView>
                <View style={styles.fabContainer}>
                    <QuestionFAB icon={icons.Continue} />
                    <QuestionFAB marginRight={12} iconSize={20} size={40} icon={icons.Continue} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    fabContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        position: "absolute",
        bottom: 24,
        right: 24
    }
});

export { Question };
