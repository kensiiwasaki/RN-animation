import { StyleSheet, Text, View } from 'react-native';
import { MotiView } from 'moti';

const NewLabel = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>NEW!!</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ loop: true }}
      >
        <NewLabel />
      </MotiView>
      <MotiView
        from={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ loop: true }}
      >
        <NewLabel />
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#EC407A',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
