import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>
          Test
        </Text>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    elevation: 5
  },
});

export default App;
