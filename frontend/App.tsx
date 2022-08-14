/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Navigator from './src/navigation/Navigator';

import {store} from './src/store/store';
import {I18nManager} from 'react-native';
import Auth from './src/screen/auth/Auth';
try {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
  // the next line is the most effective one
  I18nManager.swapLeftAndRightInRTL(false);
} catch (e) {
  console.log(e);
}
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
    //
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
//  <SafeAreaView style={backgroundStyle}>
//     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//     <ScrollView
//       contentInsetAdjustmentBehavior="automatic"
//       style={backgroundStyle}>
//       <View
//         style={{
//           backgroundColor: isDarkMode ? Colors.black : Colors.white,
//         }}>
//         <Section title="Step One">
//           Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//           screen and then come back to see your edits.
//         </Section>
//         <Section title="See Your Changes">
//           <ReloadInstructions />
//         </Section>
//         <Section title="Debug">
//           <DebugInstructions />
//         </Section>
//         <Section title="Learn More">
//           Read the docs to discover what to do next:
//         </Section>
//         <LearnMoreLinks />
//       </View>
//     </ScrollView>
//   </SafeAreaView>
// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
