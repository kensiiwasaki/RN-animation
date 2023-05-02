import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';
import { useRef } from 'react';

export default function App() {
  const animation: React.LegacyRef<Lottie> = useRef(null);

  const play = () => {
    animation.current?.play();
  };

  const pause = () => {
    animation.current?.pause();
  };

  const reset = () => {
    animation.current?.reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Lottie ref={animation} source={require('./assets/loading.json')} loop />
      <View>
        <Button onPress={play} title="Play" />
        <Button onPress={pause} title="Pause" />
        <Button onPress={reset} title="Reset" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
