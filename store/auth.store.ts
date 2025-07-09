import { deleteAllSessions, getCurrentUser, signIn, signOut } from "@/lib/appwrite";
import { User } from "@/type";
import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;

  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;

  fetchAuthenticatedUser: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearAllSessions: () => Promise<void>;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  fetchAuthenticatedUser: async () => {
    set({ isLoading: true });
    try {
      const user = await getCurrentUser();
      if (user) {
        set({ isAuthenticated: true, user: user as User });
      }
    } catch (error) {
      console.error("Failed to fetch authenticated user:", error);
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },
  login: async (email: string, password: string) => {
    try {
      await signIn({ email, password });
      // 登录成功后获取用户数据
      const user = await getCurrentUser();
      set({ isAuthenticated: true, user: user as User });
    } catch (error) {
      console.error("Failed to sign in:", error);
      throw error;
    }
  },
  logout: async () => {
    try {
      await signOut();
      set({ isAuthenticated: false, user: null });
    } catch (error) {
      console.error("Failed to sign out:", error);
      set({ isAuthenticated: false, user: null });
    }
  },
  clearAllSessions: async () => {
    try {
      await deleteAllSessions();
      set({ isAuthenticated: false, user: null });
    } catch (error) {
      console.error("Failed to clear all sessions:", error);
      set({ isAuthenticated: false, user: null });
    }
  },
}));

export default useAuthStore;
