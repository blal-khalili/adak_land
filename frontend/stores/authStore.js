import { create } from "zustand";

const authStore = create((set) => ({
    phoneNumber:null,
    email:null,
    error: null,
    userId: null,
    // TODO: make this function set all user data including name , profile picture, username , etc...
    setPhoneNumber: (phoneNumber) => set({phoneNumber}),
    setEmail: (email) => set({email}),
    setError: (error) => set({error}),
    setUserId: (userId) => set({userId}),
}));

export default authStore;
