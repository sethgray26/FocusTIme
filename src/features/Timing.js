import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime, time }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton size={75} title={time} onPress={() => onChangeTime(time)} />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
