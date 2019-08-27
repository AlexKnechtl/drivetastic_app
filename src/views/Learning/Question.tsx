import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { QuestionPicture, QuestionLayout, Answer, QuestionFAB, TransparentLayout, ImageZoom } from 'components';
import * as core from "core";
import { Bild } from 'img';
import { icons } from 'icons';
import ImageViewer from 'react-native-image-zoom-viewer';
//@ts-ignore
import { InstagramProvider, ElementContainer } from "@postillon/react-native-instagram-zoomable";
import { TouchThroughWrapper, TouchThroughView } from "react-native-touch-through-view";

interface State{
    answerStates: {selected: boolean}[],
    imageZoom: boolean,
    shouldValidate: boolean
}

class Question extends Component {
    state: State = {
        answerStates: [],
        imageZoom: false,
        shouldValidate: false
    }

    render() {
        const question = new core.Question("Wie werden Sie sich hier verhalten?", "ID: 01", [
            new core.Answer("Ich muss hier anhalten", false),
            new core.Answer("Bis zu den Personen fahre ich auf Gefahrensicht", true),
            new core.Answer("Ich muss hier aufgrund der Kinder mein Tempo auf Schrittgeschwindigkeit reduzieren und den Dick in die Hand nehmen.", false),
            new core.Answer("Noch eine geile Antwort", false)
        ], 2);
        if(this.state.answerStates.length < question.answers.length)
            this.setState({answerStates: question.answers.map(a=> ({selected: false}))});
        return (
            <View style={styles.view}>
                <InstagramProvider>
                    <ElementContainer style={{ position: "absolute", zIndex: 100 }}>
                        <QuestionPicture image={Bild} />
                    </ElementContainer>
                    <TouchThroughWrapper style={{ flex: 1 }} >
                        <ScrollView style={{ flex: 1 }} >
                            {/* <TransparentLayout onPress={() => this.setState({ imageZoom: !this.state.imageZoom })} visible={true} /> */}
                            <TouchThroughView style={{ height: Dimensions.get('window').width * 0.66, width: "100%" }} />
                            <QuestionLayout count={1} text="Wie werden Sie sich hier verhalten?" difficulty="Leicht" />
                            <View style={{ flex: 1, padding: 14, backgroundColor: '#fff' }}>
                                {question.answers.map((a, i)=>
                                    <Answer key={i} 
                                        answer={a} 
                                        selected={this.state.answerStates[i]&&this.state.answerStates[i].selected}
                                        shouldValidate={this.state.shouldValidate}
                                        onPress={()=> {
                                            var {answerStates} = this.state;
                                            answerStates[i].selected = !answerStates[i].selected;
                                            this.setState({answerStates});
                                        }}/>
                                    )}
                            </View>
                            {/* <View style={{ height: Dimensions.get('window').width, width: 20, backgroundColor: "#ff0" }} /> */}
                        </ScrollView>
                    </TouchThroughWrapper>
                    <View style={styles.fabContainer}>
                        <QuestionFAB icon={icons.Continue} />
                        <QuestionFAB marginRight={12} iconSize={20} size={40} icon={icons.Continue} />
                    </View>
                </InstagramProvider>
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
