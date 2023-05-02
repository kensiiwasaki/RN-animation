import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Lottie from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const animation: React.LegacyRef<Lottie> = useRef(null);
  const [isLiked, setIsLiked] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    animation.current?.play(0, 1);
  };

  const like = () => {
    animation.current?.play(17, 90);
  };

  const unLike = () => {
    animation.current?.play(111, 170);
  };

  const onPressLike = () => {
    if (isLiked) {
      setIsLiked(false);
      unLike();
    } else {
      setIsLiked(true);
      like();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPressLike} style={{ width: 200, height: 200 }}>
        <Lottie
          ref={animation}
          source={require('./assets/like.json')}
          loop={false}
        />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
