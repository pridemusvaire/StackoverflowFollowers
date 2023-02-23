import '@testing-library/jest-dom';
import 'react-native';
import * as React from 'react';
import {
  render,
  fireEvent,
  renderHook,
  waitFor,
} from '@testing-library/react-native';
import StackoverFlowUserListItem from '..';
import {StackoverflowUser} from '../../../../../utils/interfaces';
import {useUserStore} from '../../../../../models/user';

describe('Test user item', () => {
  const userMock = {
    display_name: 'Pride',
    profile_image: '',
    reputation: 100,
    user_id: 123,
  } as StackoverflowUser;

  test('user moreInfo is hidden by default', () => {
    const {queryByTestId} = render(
      <StackoverFlowUserListItem user={userMock} />,
    );
    expect(queryByTestId('userItemMoreInfo')).toBeNull();
  });

  test('user moreInfo opens when a list item is pressed', () => {
    const {queryByTestId, getByTestId} = render(
      <StackoverFlowUserListItem user={userMock} />,
    );
    fireEvent.press(getByTestId('toggleExpandUserItem'), {});
    expect(queryByTestId('userItemMoreInfo')).not.toBeNull();
  });

  test('pressing on follow follows user', () => {
    const {getByTestId, getByText} = render(
      <StackoverFlowUserListItem user={userMock} />,
    );

    fireEvent.press(getByTestId('toggleExpandUserItem'), {});
    renderHook(() => {
      waitFor(() => fireEvent.press(getByText('Follow'), 123));
      const followers = useUserStore(state => state.followingUsers);
      expect(followers).toEqual([123]);
    });
  });

  test('pressing on UnFollow unfollows the user', () => {
    const {getByTestId, getByText} = render(
      <StackoverFlowUserListItem user={userMock} />,
    );

    fireEvent.press(getByTestId('toggleExpandUserItem'), {});
    renderHook(() => {
      waitFor(() => fireEvent.press(getByText('Unfollow'), 123));
      const followers = useUserStore(state => state.followingUsers);
      expect(followers).toEqual([]);
    });
  });

  test('pressing on Block blocks the user', () => {
    const {getByTestId, getByText} = render(
      <StackoverFlowUserListItem user={userMock} />,
    );

    fireEvent.press(getByTestId('toggleExpandUserItem'), {});
    renderHook(() => {
      waitFor(() => fireEvent.press(getByText('Block'), 123));
      const followers = useUserStore(state => state.followingUsers);
      const blockedUsers = useUserStore(state => state.blockedUsers);
      expect(followers).toEqual([]);
      expect(blockedUsers).toEqual([123]);
    });
  });
});
