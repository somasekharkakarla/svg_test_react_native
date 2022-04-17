/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';

import Svg, {
  Defs,
  G,
  Line,
  Path,
  Pattern,
  Rect,
  TransformObject,
  Use,
  Marker,
  Circle,
  Polygon,
} from 'react-native-svg';

import {
  StyleSheet,
  View,
  Platform,
  Text,
  PanResponder,
  Image,
  Dimensions,
} from 'react-native';
import {RNSVGPath} from 'react-native-svg/lib/typescript';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class App extends Component {
  constructor() {
    super();
    //initialize state
    this.panResponder;
    this.state = {
      startTouchX: 0,
      startTouchY: 0,

      endTouchX: 0,
      endTouchY: 0,
    };

    //panResponder initialization
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture: (event, gestureState) => {
        this.setState({
          startTouchX: event.nativeEvent.locationX.toFixed(2),
          startTouchY: event.nativeEvent.locationY.toFixed(2),
        });
      },
      onMoveShouldSetPanResponder: (event, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (event, gestureState) => {},
      onPanResponderGrant: (event, gestureState) => {},
      onPanResponderMove: (event, gestureState) => {
        this.setState({
          endTouchX: event.nativeEvent.locationX.toFixed(2),
          endTouchY: event.nativeEvent.locationY.toFixed(2),
        });
      },
      onPanResponderRelease: (event, gestureState) => {
        /* this.setState({
          endTouchX: event.nativeEvent.locationX.toFixed(2),
          endTouchY: event.nativeEvent.locationY.toFixed(2),
        });*/
      },
    });
    this.setState({
      startTouchX: 0,
      startTouchY: 0,
      endTouchX: 0,
      endTouchY: 0,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.childView}>
          <Svg height={height} width={width} position="absolute">
            <Defs>
              <Marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto">
                <Polygon points="0 0, 10 3.5, 0 7" />
              </Marker>
            </Defs>
            <Line
              x1="0"
              y1="50"
              x2="250"
              y2="50"
              stroke="#000"
              strokeWidth="8"
              markerEnd="url(#arrowhead)"
            />
          </Svg>
          <View
            style={{flex: 1, backgroundColor: 'transparent'}}
            {...this.panResponder.panHandlers}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  childView: {
    flex: 1,
    overflow: 'hidden',
  },
  point: {
    height: 22,
    width: 22,
    marginTop: 5,
    position: 'absolute',
    borderRadius: 14,
    backgroundColor: '#afeeee',
  },
});
