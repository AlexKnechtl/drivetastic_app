import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { QuestionPicture, QuestionLayout, Answer, QuestionFAB, QuestionMenu } from 'components';
import * as core from "core";
import { Bild } from 'img';
import { icons } from 'icons';
//@ts-ignore
import { InstagramProvider, ElementContainer } from "@postillon/react-native-instagram-zoomable";
import { TouchThroughWrapper, TouchThroughView } from "react-native-touch-through-view";
import { IQuestion } from 'core';
import { useTranslation } from 'react-i18next';

interface State {
    answerStates: { selected: boolean }[],
    imageZoom: boolean,
    shouldValidate: boolean,
    showMenu: boolean
}

export class Question extends Component {
    state: State = {
        answerStates: [],
        imageZoom: false,
        shouldValidate: false,
        showMenu: false,
    }

    render() {
        const question: IQuestion = new core.Question("Wie werden Sie sich hier verhalten?", 3981, [
            new core.Answer("Ich muss hier anhalten", false),
            new core.Answer("Bis zu den Personen fahre ich auf Gefahrensicht", true),
            new core.Answer("Ich muss hier aufgrund der Kinder mein Tempo auf Schrittgeschwindigkeit reduzieren und den Dick in die Hand nehmen.", false),
            new core.Answer("Noch eine geile Antwort", false)
        ], 2, "B", 4, "Hard");
        if (this.state.answerStates.length < question.answers.length)
            this.setState({ answerStates: question.answers.map(a => ({ selected: false })) });
        return (
            <View style={styles.view}>
                <InstagramProvider>
                    <ElementContainer style={{ position: "absolute" }}>
                        <QuestionPicture image={Bild} />
                    </ElementContainer>
                    <TouchThroughWrapper style={{ flex: 1 }} >
                        <ScrollView style={{ flex: 1 }} >
                            {/* <TransparentLayout onPress={() => this.setState({ imageZoom: !this.state.imageZoom })} visible={true} /> */}
                            <TouchThroughView style={{ height: Dimensions.get('window').width * 0.66, width: "100%" }} />
                            <QuestionLayout count={question.Id} text={question.question} difficulty={question.difficulty} />
                            <View style={{ flex: 1, padding: 14, backgroundColor: '#fff' }}>
                                {question.answers.map((a, i) =>
                                    <Answer key={i}
                                        answer={a}
                                        selected={this.state.answerStates[i] && this.state.answerStates[i].selected}
                                        shouldValidate={this.state.shouldValidate}
                                        onPress={() => {
                                            var { answerStates } = this.state;
                                            answerStates[i].selected = !answerStates[i].selected;
                                            this.setState({ answerStates });
                                        }} />
                                )}
                            </View>
                        </ScrollView>
                    </TouchThroughWrapper>
                    <View style={styles.fabContainer}>
                        <QuestionFAB iconLeft={3} onPress={() => this.setState({ shouldValidate: true })} icon={icons.Continue} />
                        <QuestionFAB onPress={() => this.setState({ showMenu: true })} marginRight={12} iconSize={24} size={40} icon={icons.Menu} />
                    </View>
                </InstagramProvider>
                <QuestionMenu backPress={() => this.setState({ showMenu: !this.state.showMenu })} visible={this.state.showMenu} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#fff'
    },
    fabContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        position: "absolute",
        bottom: 24,
        right: 24
    }
});
