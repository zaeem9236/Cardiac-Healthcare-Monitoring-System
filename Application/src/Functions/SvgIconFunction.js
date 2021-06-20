import React from 'react';
import { View, Text} from 'react-native';

import HealthCare from '../Assets/healthCare.svg';


export default SvgIconFunction = (props) => {
  if (props.icon === 'healthCare') {
    return (
      <View>
        <HealthCare width={props.size} height={props.size} fill="#f2f2f2" />
      </View>
    )
  } 
};
