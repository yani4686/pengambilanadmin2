import { defineStore } from "pinia";
import { api } from "boot/axios"; // Assuming Quasar's Axios setup

export const useRetCalonJayaStorePps = defineStore("getcalonjaya", {
  state: () => ({
    JayaList: [], // Reactive state for data 
    Details: [], // Reactive state for data 
    Countjayabystat: [], // Reactive state for data
    KodProgram: [],
  }),
  actions: {
    async fetchKodProgram() {
        try {
          const response = await api.get("/getkodprogram"); // API endpoint
          //  console.log("API Response:", response.data);
          this.KodProgram = Object.values(response.data); // Update store state
          //var program = this.KodProgram.p020namaprogbi;
          //  console.log("Updated KodProgram in Store:", this.KodProgram);
          // var program = this.KodProgram[0].p020namaprogbi;
          // console.log("Updated program in Store:", program);
  
          return response;
          // if (response.data.status === "success") {
          //   this.KodProgram = response.data; // Update store state
          //   var program = this.KodProgram.p020namaprogbi;
          //   console.log(program);
          //   return response;
          // }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
    async fetchP() {
      try {
        const response = await api.get("/retcalonjaya"); // API endpoint
        // console.log("API Response:", response.data);
        if (response.data.status === "success") {
          this.JayaList = response.data.data; // Update store state
          //this.MohonList = Object.values(response.data);

          //  console.log("Updated MohonList in Store:", this.MohonList);
          return response;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    // get detail from specific id
    async fetchDetail(id) {
      try {
        const response = await api.get(`/retpermohonanbynokp/${id}`); // Correct URL endpoint

        if (response.data.status === "success") {
          // this.Details = response.data.data; // Update store state with fetched data
          //  this.Details = Object.values(response.data);
          this.Details = response.data.data;
          // var nama = this.Details.p001nama;
          // var nokp = this.Details.p001nokp;
          // var kdprogram = this.Details.p001kprog;
          //console.log(nama);
          //  return nama;
        } else {
          console.warn(
            "Failed to fetch details from axios:",
            response.data.msg
          );
        }
      } catch (error) {
        console.error("Error fetching details from axios:", error);
        throw error;
      }
    },
    async fetchbiljaya() {
      try {
        const response = await api.get("/countcalonjaya"); // API endpoint
        // console.log("API Response:", response.data);
        if (response.data.status === "success") {
          //this.MohonList = response.data.data; // Update store state
          // this.Countbystat = Object.values(response.data);
          this.Countjayabystat = response.data.data;

          //   console.log("Updated Countbystat in Store:", this.Countbystat);
          return response;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
