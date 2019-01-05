import React, {Component} from 'react';
import { 
    View, 
    Text,
    ActivityIndicator,
    AsyncStorage,
    Button,
    Image,
    TouchableWithoutFeedback,
    Animated,
    StatusBar, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet } from 'react-native';

export default class ListItem extends Component {
    state = {
        animatePress: new Animated.Value(1)
      }

      render() {
          const {itemWidth} = this.props
          const {columns} = this.props
          const {margin} = this.props
          return (
            <TouchableWithoutFeedback
            onPressIn={() => this._animateIn()}
            onPressOut={() => this._animateOut()} >
                <Animated.View style={{
                    margin: margin,
                    transform: [
                        {
                            scale: this.state.animatePress 
                        }
                    ]
                    }}>
                    <Image 
                    style={{width: itemWidth-(margin*columns), height: 100}}
                    source={this.props.image} />
                </Animated.View>
            </TouchableWithoutFeedback>
          )
      }

      _animateIn = () => {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 500
        }).start()
      }
      _animateOut = () => {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 500
        }).start()
    }
}