import { defineStore } from "pinia";
import { api } from "boot/axios"; // Assuming Quasar's Axios setup

export const useLoginStore = defineStore("loginadminquasar", {
  state: () => ({
    LoginData: [],
    formData: {
      username: null,
      password: null,
    },
  }),
  actions: {
    async createretloginadminq(payload) {
      // console.log(payload);
      try {
        const response = await api.post("/retloginadminq", payload, {
          headers: {
            Authorization: "bearer __q_strn|login",
            "Content-Type": "application/json",
          },
        }); // API endpoint

        // console.log("API Response:", response.data);

        if (response.data && response.data.data) {
          this.LoginData = response.data.data; // Assign only the `data` object
          const userData = response.data.data;
          sessionStorage.setItem("userSession", JSON.stringify(userData)); // Save session

          // console.log("Session Set:", sessionStorage.getItem("userSession"));
        } else {
          this.LoginData = {}; // Fallback in case of an unexpected response
        }

        //var usr = this.LoginData?.usradminptj1; // Use optional chaining to prevent undefined errors
        //console.log("usr:", usr);

        return response.data;
      } catch (error) {
        // Handle specific error response
        console.error("Error during API call:", error);

        // Optionally, return a default value or error message
        return {
          status: "error",
          msg: "Failed to update tindakan. Please try again later.",
        };
      }
    },
  },
});
