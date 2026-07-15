import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const authStore = create((set) => ({
    phoneNumber: null,
    email: null,
    error: null,
    userId: null,
    isLoggedIn: null,
    userData: null,
    // TODO: make this function set all user data including name , profile picture, username , etc...
    setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
    setEmail: (email) => set({ email }),
    setError: (error) => set({ error }),
    setUserId: (userId) => set({ userId }),
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    setUserData: (userData) => set({ userData }),
}));


export const useBearStore = create()(
    persist(
        (set, get) => ({
            userData: null,
            isLoggedIn: null,
            setUserData: (userData) => set({ userData }),
            setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
        }),
        {
            name: 'user-data-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default authStore;
