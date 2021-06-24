import React, { useState } from 'react';
import { Slider } from 'react-native-elements';
import { Animated, View, Text, Dimensions } from 'react-native';



let SlidingElement = ({ minValue, maxValue, text }) => {
    let [sliderValue, changeSliderValue] = useState(20);
    return (
        <View style={{
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            paddingLeft: 0.13 * Dimensions.get('screen').width,
            paddingRight: 0.13 * Dimensions.get('screen').width,
        }}>
            <Text>{`${text}: ${parseInt(sliderValue)}`}</Text>
            <Slider
                value={sliderValue}
                thumbTintColor='#2bae66'
                minimumTrackTintColor='#2bae66'
                thumbStyle={{ height: 20, width: 20 }}
                onValueChange={(value) => { changeSliderValue(value), console.log(value) }}
                minimumValue={minValue}
                maximumValue={maxValue}
            />
        </View>
    )
}

export default SlidingElement;
