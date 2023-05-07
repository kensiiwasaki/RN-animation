import { useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Animated, Button } from 'react-native';

export default function App() {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 5000,
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
            backgroundColor: 'red',
            marginTop: 10,
          },
          { opacity: animatedOpacity },
        ]}
      />
      <Button title="Fade In View" onPress={fadeIn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
