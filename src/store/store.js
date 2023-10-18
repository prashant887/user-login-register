import { create } from "zustand";

export const useAuthStore = create((set) => ({
    auth : {
        username : '',
        active : false
    },
    setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
}))
;


export const useStore = create((set) => ({
    users : {
        username : '',
        userId : '',
        profile : ''
    },
    setUserStore : (user) => set((state) => ({ users : { ...state.users, username : user.username,userId:user.userId,profile:user.profile }})) 
}));
