/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/09/04 18:14:56
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   SamMFFL
* @Last modified time: 2016/09/04 18:15:10
*/


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class CaveText extends Component {
    render(){
        return (
            <Text>Caveman for {this.props.foo}</Text>
        );

    }
}

export default CaveText;
