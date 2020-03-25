import React from 'react';
import { Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginTop: 30,
  },
});

class App extends React.PureComponent {
  render() {
    return <Text style={styles.sectionTitle}>Step One</Text>;
  }
}

export default App;
