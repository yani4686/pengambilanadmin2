import { defineStore } from "pinia";
import { api } from "boot/axios"; // Assuming Quasar's Axios setup

export const useRetPermohonanStore = defineStore("getmohon", {
  state: () => ({
    MohonList: [], // Reactive state for data
    Details: [], // Reactive state for data
    Countbystat: [], // Reactive state for data
  }),
  actions: {
    async fetchP() {
      try {
        const response = await api.get("/retpermohonan"); // API endpoint
       // console.log("API Response:", response.data);
        if (response.data.status === "success") {
          this.MohonList = response.data.data; // Update store state
          //this.MohonList = Object.values(response.data);
          
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
        const response = await api.get(`/retpermohonanbynokp/${id}`); // Correct URL endpoint
       // Retrieve the CSRF token from the meta tag
        // const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
        // if (!csrfTokenElement) {
        //   throw new Error("CSRF token meta tag not found");
        // }
        // const csrfToken = csrfTokenElement.getAttribute('content');

        //console.log(csrfToken);

        //Make the POST request with CSRF token included in headers
        // const response = await axios.post(`/retpermohonanbynokp/${id}`, {}, {
        //   headers: {
        //     'X-CSRF-TOKEN': csrfToken,
        //   },
        // });
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
          console.warn("Failed to fetch details from axios:", response.data.msg);
        }
      } catch (error) {
        console.error("Error fetching details from axios:", error);
        throw error;
      }        
    },
    async fetchbilstat() {
      try {
        const response = await api.get("/countpermohonan"); // API endpoint
       // console.log("API Response:", response.data);
        if (response.data.status === "success") {
          //this.MohonList = response.data.data; // Update store state
         // this.Countbystat = Object.values(response.data);
          this.Countbystat = response.data.data;
          
          console.log("Updated Countbystat in Store:", this.Countbystat);
          return response;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
