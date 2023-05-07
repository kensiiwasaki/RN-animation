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
      toValue: 100,
      duration: 3000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'green',
            marginTop: 20,
          },
          { transform: [{ translateX: animatedX }] },
        ]}
      />
      <Button title="move" onPress={move} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
