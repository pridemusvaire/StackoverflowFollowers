import {useQuery} from '@tanstack/react-query';
import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../../../utils/colors';
import {USER_API_LINK} from '../../../../utils/constants';
import {StackoverflowUser} from '../../../../utils/interfaces';
import StackoverFlowUserListItem from '../user-list-item';
import styles from './styles';

const ListEmptyComponent = ({error}: {error: any}) => (
  <View>
    <Text style={styles.listEmptyText}>
      {error
        ? 'The server returned an error, please check your network connection or pull to refresh...'
        : 'The server returned no items, please pull to refresh...'}
    </Text>
  </View>
);
const ItemSeparatorComponent = () => <View style={styles.listSeperatorItem} />;

const StackoverFlowUserList = () => {
  const {isLoading, error, data, isFetching, refetch} = useQuery<
    boolean,
    unknown,
    StackoverflowUser[],
    string[]
  >({
    queryKey: ['userData'],
    queryFn: () =>
      fetch(USER_API_LINK)
        .then(response => response.json())
        .then(responseJSON => responseJSON.items),
  });

  const onRefreshUserData = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>Stackoverflow User Log</Text>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading || isFetching}
            onRefresh={onRefreshUserData}
            colors={[Colors.black]}
            progressViewOffset={30}
          />
        }
        contentContainerStyle={styles.listContentContainer}
        refreshing={isLoading || isFetching}
        data={data}
        renderItem={({item}) => <StackoverFlowUserListItem user={item} />}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={
          !isFetching ? (
            <ListEmptyComponent error={error} />
          ) : (
            <ActivityIndicator />
          )
        }
      />
    </View>
  );
};

export default StackoverFlowUserList;
