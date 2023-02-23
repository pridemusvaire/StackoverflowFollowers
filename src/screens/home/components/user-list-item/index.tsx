import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useUserStore, UseUserStoreProps} from '../../../../models/user';
import {StackoverflowUser} from '../../../../utils/interfaces';
import styles from './styles';

interface StackoverFlowUserListItemProps {
  user: StackoverflowUser;
}
const StackoverFlowUserListItem = ({user}: StackoverFlowUserListItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const {followUser, unFollowUser, blockUser, followingUsers, blockedUsers} =
    useUserStore((state: UseUserStoreProps) => state);

  const followingUser = followingUsers.includes(user.user_id);
  const userIsBlocked = blockedUsers.includes(user.user_id);

  const onFollowUser = () => {
    followingUser ? unFollowUser(user.user_id) : followUser(user.user_id);
  };

  const onBlockUser = () => {
    blockUser(user.user_id);
  };

  const onExpandUserItem = () => {
    if (userIsBlocked) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <View
      style={[
        styles.container,
        userIsBlocked ? styles.userListItemButtonDisabled : null,
      ]}>
      <TouchableOpacity
        testID="toggleExpandUserItem"
        disabled={userIsBlocked}
        style={styles.userListItemButton}
        onPress={onExpandUserItem}>
        <Image source={{uri: user.profile_image}} style={styles.userAvatar} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userDisplayName}>{user.display_name}</Text>
          <Text style={styles.userReputation}>
            Reputation - {user.reputation}
          </Text>
          {!followingUser || (
            <Text style={styles.userFollowing}>Following</Text>
          )}
          {!userIsBlocked || <Text style={styles.userFollowing}>Blocked</Text>}
        </View>
      </TouchableOpacity>
      {!isExpanded || (
        <View testID="userItemMoreInfo" style={styles.userMoreDetails}>
          <TouchableOpacity
            testID="followUserButton"
            onPress={onFollowUser}
            style={[
              styles.userFollowButton,
              followingUser ? styles.userUnFollowButton : null,
            ]}>
            <Text
              style={[
                styles.userFollowButtonText,
                followingUser ? styles.userUnFollowButtonText : null,
              ]}>
              {followingUser ? 'Unfollow' : 'Follow'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="blockUserButton"
            onPress={onBlockUser}
            style={[styles.userFollowButton, styles.userBlockButton]}>
            <Text style={styles.userFollowButtonText}>Block</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default StackoverFlowUserListItem;
