/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/home';
import globalStyles from './src/utils/globalStyles';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaView style={globalStyles.pageContainer}>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
