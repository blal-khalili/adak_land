import { create } from "zustand";

const authStore = create((set) => ({
    userId:null,
    username:null,
    // TODO: make this function set all user data including name , profile picture, username , etc...
    setUser: (name) => set((state) => ({ username: name })),
}));

export default authStore;
