import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  // return <ExpoConfigView />;
  return (
    <View style={styles.container}>
      <Text>චතුරංග අදිකාරි විසින් කසුන් පියරත්න වෙත😁😁</Text>
      <Text>තාම හදල ඉවර නැ. දැනට මේක පාවිච්චි කරහන්.</Text>
    </View>
  );
}

// SettingsScreen.navigationOptions = {
//   title: 'චතුරංග අදිකාරි විසින් කසුන් පියරත්න වෙත😁😁',
// };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 0.8,
    fontSize: 30,
    fontWeight: '500',
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'flex-start'
  }
});
