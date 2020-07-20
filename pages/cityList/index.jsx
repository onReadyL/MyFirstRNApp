import React from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import cities from '../../assets/cities.json';

const List = () => (
  <SafeAreaView>
    <SectionList
      sections={cities.city} // 源数据
      initialNumToRender={1} // 初始渲染的条数，不会因为移除而卸载
      keyExtractor={(item, index) => item.code}
      renderItem={({ item, index, section, separators }) => (
        <Text>{item.name}</Text>
      )}
      renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    />
  </SafeAreaView>
);

export default List;
