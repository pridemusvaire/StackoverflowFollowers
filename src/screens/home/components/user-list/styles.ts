import {StyleSheet} from 'react-native';
import {Colors} from '../../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  listTitle: {
    paddingHorizontal: 24,
    textTransform: 'uppercase',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
  },
  listEmptyComponent: {},
  listContentContainer: {
    paddingHorizontal: 24,
  },
  listEmptyText: {
    textAlign: 'center',
    fontSize: 16,
  },
  listSeperatorItem: {
    borderTopWidth: 1,
    borderColor: Colors.borderColor,
  },
});
