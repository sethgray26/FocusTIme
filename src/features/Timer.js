import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';

const oneSecMS = 1000;
// On Android the odd indicies are the vibrate duration, and even is the pause between vibrate
// On IOS the numbers in the pattern array represent the separation time, as vibration duration is fixed
const vibratePattern = [
  0.5 * oneSecMS,
  1 * oneSecMS,
  0.5 * oneSecMS,
  1 * oneSecMS,
  0.5 * oneSecMS,
  1 * oneSecMS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const handleOnEnd = (reset) => {
    Vibration.vibrate(vibratePattern);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={handleOnEnd}
        />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          style={styles.theBar}
          color={colors.secondaryColor}
          progress={progress}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} time={10} />
        <Timing onChangeTime={setMinutes} time={15} />
        <Timing onChangeTime={setMinutes} time={20} />
      </View>

      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? 'pause' : 'start'}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    color: colors.secondaryColor,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'column',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: colors.secondaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  task: {
    color: colors.secondaryColor,
    textAlign: 'center',
  },
  theBar: {
    height: spacing.sm,
  },
  clearSubjectWrapper: {
    alignItems: 'center',
  },
});
