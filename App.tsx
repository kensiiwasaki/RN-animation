import { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Button,
  Easing,
  ScrollView,
} from 'react-native';

export default function App() {
  const animatedScrollY = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: animatedScrollY,
            },
          },
        },
      ])}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <View style={{ height: 500 }} />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            margin: 10,
            backgroundColor: 'blue',
            opacity: animatedScrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        />
        <View style={{ height: 900 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
