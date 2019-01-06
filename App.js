import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setup } from 'actionware';
import { View, StyleSheet } from 'react-native';
import AppContainer from './AppContainer';
import AppStatusBar from './components/AppStatusBar';
import { purple } from './utils/colors';
import reducer from './reducers';
import { setLocalNotification } from './utils/notifications';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
setup({ store });

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />

          <AppContainer />
        </View>
      </Provider>
    );
  }
}

export default App;
