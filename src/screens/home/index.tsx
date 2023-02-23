import * as React from 'react';
import {View} from 'react-native';
import globalStyles from '../../utils/globalStyles';
import StackoverFlowUserList from './components/user-list';

const HomeScreen = () => {
  return (
    <View style={globalStyles.pageContainer}>
      <StackoverFlowUserList />
    </View>
  );
};

export default HomeScreen;
