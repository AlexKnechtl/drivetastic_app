import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'

interface MultiProgressBarProps{
    progressbars:{
        color: string,
        progress: number,
        animated?: boolean,
        animationDuration?:number
    }[],
    barStyle?:{
        height?: number,
        backgroundColor?: string
    }
}

export const MultiProgressBar = ({progressbars = [], barStyle}:MultiProgressBarProps) => {
    const [progressAnimations, setProgressAnimations] = useState(progressbars.map(p=> new Animated.Value(p.animated? 0 : p.progress)));
    const [previousProgressBars, setPreviousProgressBars] = useState(progressbars.slice(0,1));
    useEffect(() => {
        if(previousProgressBars.length != progressbars.length)
            setPreviousProgressBars(progressbars);
        else if(previousProgressBars.every((v, i)=> v.progress == progressbars[i].progress))
            return;
        var p = progressbars.map(a=>{
            if(!a.animated)
                return new Animated.Value(a.progress);
            var val = new Animated.Value(0);
            Animated.timing(val, {
                duration: a.animationDuration|| 1000,
                toValue: a.progress
            }).start();
            return val;
        });
        setProgressAnimations(p);
    })
    return (
        <View style={[s.container, barStyle, {borderRadius: ((barStyle||{}).height||10)/2}]}>
            {progressbars.sort((a,b)=> b.progress - a.progress).map((p,i)=><Animated.View key={i}
             style={[
                s.barBase, 
                { width: progressAnimations[i]? progressAnimations[i].interpolate({
                    inputRange: [0,0.01],
                    outputRange: ["0%","1%"]
                }):0, backgroundColor: p.color},
                {borderRadius: ((barStyle||{}).height||10)/2}]}></Animated.View>)}
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        height: 10,
        backgroundColor: "#aaa",
        marginHorizontal: 20,
        borderRadius: 5
    },
    barBase:{
        top: 0,
        position: "absolute",
        height: "100%",
        backgroundColor: "#a00",
        width: "50%",
        borderRadius: 5
    }
});