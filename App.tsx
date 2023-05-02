import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';

const callFakeAPI = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 3000);
  });
};

export default function App() {
  const animation: React.LegacyRef<Lottie> = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    callFakeAPI().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Lottie
          source={require('./assets/loading.json')}
          style={{ width: 100 }}
          autoPlay
          loop
        />
      ) : (
        <View style={{ padding: 10 }}>
          <Text>testtesttesttesttesttesttesttesttesttest</Text>
        </View>
      )}
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
