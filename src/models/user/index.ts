import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

export interface UseUserStoreProps {
  followingUsers: number[];
  blockedUsers: number[];
  followUser: (uid: number) => void;
  unFollowUser: (uid: number) => void;
  blockUser: (uid: number) => void;
}

export const useUserStore = create<UseUserStoreProps>()(
  persist(
    (set, get) => ({
      followingUsers: [],
      blockedUsers: [],
      followUser: uid => set({followingUsers: [...get().followingUsers, uid]}),
      unFollowUser: uid =>
        set({
          followingUsers: get().followingUsers.filter(item => item !== uid),
        }),
      blockUser: uid => {
        get().unFollowUser(uid);
        set({blockedUsers: [...get().blockedUsers, uid]});
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
