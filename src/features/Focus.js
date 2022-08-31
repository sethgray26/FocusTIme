import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');
  console.log(subject);
  return (
    <View style={focusStyles.container}>
      <View style={focusStyles.wtfExpo}>
        <TextInput
          style={focusStyles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const focusStyles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  wtfExpo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    backgroundColor: colors.secondaryColor,
  },
});
