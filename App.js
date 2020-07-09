/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput,
  Alert,
  TouchableOpacity,
  Button, // 不能自定义样式
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
/** 首屏 */
function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('Details', {
              id: Math.floor(Math.random() * 10),
            })
          }
        >
          <Text>Go to Detailes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Page1')}
        >
          <Text>Go to Page1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Page1({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}
        >
          <Text>goBack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.popToTop()}
        >
          <Text>Go to popTop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Page2({ navigation, route }) {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="+"
          onPress={() => {
            setCount(c => c + 1);
          }}
          style={{ color: '#000' }}
        />
      ),
      // headerTruncatedBackTitle: () => <Text>返回</Text>, // 没用？？
      // headerLeft: () => (
      //   <HeaderBackButton
      //     onPress={() => {
      //       navigation.goBack();
      //     }}
      //     style={{ color: '#fff' }}
      //   />
      // ),
      headerLeft: () => (
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="< 返回"
          style={{ color: '#fff' }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}
        >
          <Text>goBack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.popToTop()}
        >
          <Text>Go to popTop</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{count}</Text>
      </View>
    </View>
  );
}

const CreateMessage = ({ navigation }) => {
  const [message, setMessage] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        multiline
        placeholder="告诉我你的想法"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={message}
        onChangeText={setMessage}
      />
      <Button
        title="留言"
        onPress={() => {
          navigation.navigate('Home', { post: message });
        }}
      />
    </View>
  );
};

const DetailsScreen = React.memo(({ navigation, route }) => {
  const { id } = route.params;
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionDescription}>id: {id}</Text>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.btnWrapper}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() =>
                  navigation.setParams({ id: Math.floor(Math.random() * 10) })
                }
              >
                <Text>更新id</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.btnWrapper}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Home')}
              >
                <Text>Go to Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Page2')}
              >
                <Text>Go to Page2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.btnWrapper}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Message')}
              >
                <Text>留言</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        initialOptions={{}}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1890ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ id: 1 }} // 默认参数
          options={({ route }) => ({ title: `${route.params.id} Details` })}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen
          name="Message"
          component={CreateMessage}
          options={{ title: '留言信箱' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#f7f7f7',
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
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: '#1890ff',
    borderRadius: 5,
    color: '#fff',
    fontSize: 16,
    padding: 3,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
});

export default App;
