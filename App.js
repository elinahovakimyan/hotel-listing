import React from 'react';
import { SafeAreaView } from 'react-native';

import Title from './src/components/common/Title';


class App extends React.PureComponent {
  render() {
    return (
      <SafeAreaView>
        <Title title="Welcome Back!" />
      </SafeAreaView>
    );
  }
}

export default App;
