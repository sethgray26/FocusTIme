import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.noFocus}> We haven't focused on anything yet </Text>
    );

  const buildHistoryItem = ({ item }) => (
    <Text style={styles.item}> {'- ' + item} </Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we've focused on: </Text>

      <FlatList data={history} renderItem={buildHistoryItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.secondaryColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.secondaryColor,
    paddingTop: spacing.md,
    paddingLeft: spacing.sm,
  },
  noFocus: {
    color: colors.secondaryColor,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingTop: spacing.sm,
    paddingLeft: spacing.lg,
  },
});
