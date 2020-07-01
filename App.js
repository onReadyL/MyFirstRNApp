/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to Detailes"
      />
      <Button
        onPress={() => navigation.navigate('Page1')}
        title="Go to Page1"
      />
    </View>
  );
}

function Page1({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="goBack" />
      <Button onPress={() => navigation.popToTop()} title="Go to popTop" />
    </View>
  );
}

function Page2({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.btnWrapper}>
        <Button onPress={() => navigation.goBack()} title="goBack" />
        <Button onPress={() => navigation.popToTop()} title="Go to popTop" />
      </View>
    </View>
  );
}

const DetailsScreen = React.memo(({ navigation, route }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>编写代码</Text>
              <View style={styles.btnWrapper}>
                <TouchableHighlight
                  style={{
                    flex: 1,
                    backgroundColor: '#1890ff',
                    padding: 4,
                    textAlign: 'center',
                  }}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text>Go to Home</Text>
                </TouchableHighlight>
                <Button
                  style={{
                    flex: 1,
                    backgroundColor: '#1890ff',
                    padding: 4,
                    textAlign: 'center',
                  }}
                  onPress={() => navigation.navigate('Page2')}
                  title="Go to Page2"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
});

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
