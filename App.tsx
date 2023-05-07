import { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Button,
  Easing,
} from 'react-native';

export default function App() {
  const animatedX = useRef(new Animated.Value(0)).current;

  const move = () => {
    Animated.timing(animatedX, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          margin: 20,
        }}
      />
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'green',
            margin: 20,
          },
          { transform: [{ translateX: animatedX }] },
          {
            opacity: animatedX.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <Button title="move" onPress={move} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
