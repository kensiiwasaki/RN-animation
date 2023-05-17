import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 80;
const HEADER_SCROLL_RANGE = 70;
const MAX_AVATAR_SIZE = 100;
const MIN_AVATAR_SIZE = 70;
const AVATAR_TOP = MAX_HEADER_HEIGHT - MAX_AVATAR_SIZE / 2;
const AVATAR_TOP_DEST = MAX_HEADER_HEIGHT - HEADER_SCROLL_RANGE;
const BLUR_RADIUS = 20;

export default function App() {
  const animatedScrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: animatedScrollY } } },
        ])}
        scrollEventThrottle={16}
      >
        <View style={{ height: MAX_HEADER_HEIGHT * 1.5 }} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </ScrollView>
      <Animated.View
        style={[
          styles.headerImage,
          // TODO: ヘッダー画像をアニメーションさせる
          {
            height: MAX_HEADER_HEIGHT,
            top: animatedScrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [0, -HEADER_SCROLL_RANGE],
              extrapolate: 'clamp',
            }),
            zIndex: animatedScrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <Animated.Image
          source={require('./assets/cover.jpeg')}
          style={styles.cover}
          resizeMethod="auto"
          blurRadius={animatedScrollY.interpolate({
            inputRange: [
              0,
              HEADER_SCROLL_RANGE,
              HEADER_SCROLL_RANGE + MAX_AVATAR_SIZE + 20,
            ],
            outputRange: [0, 0, BLUR_RADIUS],
            extrapolate: 'clamp',
          })}
        />
      </Animated.View>
      <Animated.Image
        source={require('./assets/avatar.jpeg')}
        style={[
          styles.avatar,
          // TODO: アバター画像をアニメーションさせる
          {
            width: animatedScrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [MAX_AVATAR_SIZE, MIN_AVATAR_SIZE],
              extrapolate: 'clamp',
            }),
            height: animatedScrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [MAX_AVATAR_SIZE, MIN_AVATAR_SIZE],
              extrapolate: 'clamp',
            }),
            top: animatedScrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE, HEADER_SCROLL_RANGE + 1],
              outputRange: [AVATAR_TOP, AVATAR_TOP_DEST, AVATAR_TOP_DEST - 1],
            }),
            zIndex: animatedScrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    margin: 10,
    backgroundColor: '#ccc',
  },
  cover: {
    flex: 1,
    width: '100%',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: 'red',
  },
  avatar: {
    position: 'absolute',
    top: AVATAR_TOP,
    left: 20,
    borderRadius: 50,
    backgroundColor: '#000',
    borderWidth: 5,
    borderColor: '#fff',
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: MIN_HEADER_HEIGHT,
    zIndex: 2,
  },
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    top: 35,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 36,
    height: 36,
    borderRadius: 18,
    zIndex: 3,
  },
});
