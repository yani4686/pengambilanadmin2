import { defineStore } from "pinia";
import { api } from "boot/axios"; // Assuming Quasar's Axios setup

export const useRetPermohonanStore = defineStore("getmohon", {
  state: () => ({
    MohonList: [], // Reactive state for data
    Details: [], // Reactive state for data
  }),
  actions: {
    async fetchP() {
      try {
        const response = await api.get("/retpermohonan"); // API endpoint
       // console.log("API Response:", response.data);
        if (response != null) {
          //this.MohonList = response.data.data; // Update store state
          this.MohonList = Object.values(response.data);
          
          console.log("Updated MohonList in Store:", this.MohonList);
          return response;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    // get detail from specific id
    async fetchDetail(id) {
      try {
        const response = await api.post(`/retpermohonanbynokp/${id}`); // Correct URL endpoint
        if (response.data.status === "success") {
         // this.Details = response.data.data; // Update store state with fetched data
          this.Details = Object.values(response.data);
        } else {
          console.warn("Failed to fetch details:", response.data.msg);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
        throw error;
      }        
    },
  },
});
