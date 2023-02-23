import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        accessToken: "",
        refreshToken: ""
    }),
    actions: {
      addAccessToken(accessToken, refreshToken) {
        this.accessToken = accessToken
        this.refreshToken = refreshToken
      },
      refreshToken(accessToken) {
        this.accessToken = accessToken
      }
    }
})
