// screens/TutorialScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const { width } = Dimensions.get('window');

const slides = [
  { key: '1', text: 'Welcome to the App!' },
  { key: '2', text: 'Swipe left to continue...' },
  { key: '3', text: 'Enjoy the features!' }
];

const Tutorials = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSwipeLeft = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate('Home'); // Navigate to the main screen of the app
    }
  };

  const onSwipeRight = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={styles.container}
    >
      <View style={[styles.slide, { width }]}>
        <Text style={styles.text}>{slides[currentSlide].text}</Text>
      </View>
      <Button title="Skip" onPress={() => navigation.navigate('Home')} />
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default Tutorials;
