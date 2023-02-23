import {StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    overflow: 'hidden',
  },
  userInfoContainer: {
    flex: 1,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: Colors.black,
  },
  userDisplayName: {
    textTransform: 'capitalize',
    fontSize: 15,
    marginBottom: 5,
  },
  userReputation: {
    fontSize: 12,
  },
  userFollowing: {
    fontSize: 11,
    marginTop: 5,
    color: Colors.borderColor,
  },
  userListItemButton: {
    flexDirection: 'row',
    gap: 15,
  },
  userListItemButtonDisabled: {
    backgroundColor: Colors.btnDisabled,
  },
  userMoreDetails: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 65,
  },
  userFollowButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: 100,
  },
  userUnFollowButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primaryColor,
  },
  userBlockButton: {
    backgroundColor: Colors.red,
  },
  userFollowButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  userUnFollowButtonText: {
    color: Colors.black,
  },
});
