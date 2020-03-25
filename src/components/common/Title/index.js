import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

const Title = (props) => (
  <Text style={styles.title}>{props.title}</Text>
);

export default React.memo(Title);
