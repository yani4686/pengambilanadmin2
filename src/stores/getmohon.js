import { defineStore } from "pinia";
import { api } from "boot/axios"; // Assuming Quasar's Axios setup

export const useRetPermohonanStore = defineStore("getmohon", {
  state: () => ({
    MohonList: [], // Reactive state for data
    Details: {}, //Details: [],
    Countbystat: [], // Reactive state for data
    KodProgram: [], // Reactive state for data
    KodNegara: [],
    KodTajaan: [],
    //selectedOption: null,
    formData: {
      tindakanPengesahan: null,
      kdprogrambaru: null,
      catatanPengesahan: "",
      nokpform: "",
    },
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
    async fetchKodNegara() {
      try {
        const response = await api.get("/getkodnegara"); // API endpoint
        //  console.log("API Response:", response.data);
        this.KodNegara = Object.values(response.data); // Update store state
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchKodPenaja() {
      try {
        const response = await api.get("/getkodpenaja"); // API endpoint
        //  console.log("API Response:", response.data);
        this.KodTajaan = Object.values(response.data); // Update store state
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchP() {
      try {
        const userSession = JSON.parse(sessionStorage.getItem("userSession"));
        // const response = await api.get("/retpermohonan", {
        //   withCredentials: true, // Send session cookie
        // });
        const headers = {
          "X-User-Name": userSession.usradminptj1, // Custom header for user
          "X-Fakulti": userSession.fakulti, // Custom header for faculty
        };

        const response = await api.get("/retpermohonan", { headers });
        // const response = await api.get("/retpermohonan", {
        //   headers: {
        //     Authorization: `Bearer ${userSession.token}`, // If you have a token
        //     "X-User-Name": userSession.usradminptj1, // Custom header for user
        //     "X-Fakulti": userSession.fakulti, // Custom header for faculty
        //   },
        // });

        if (response.data.status === "success") {
          this.MohonList = response.data.data; // 🔹 Data already filtered by session in backend
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
    async fetchbilstat() {
      try {
        const response = await api.get("/countpermohonan"); // API endpoint
        // console.log("API Response:", response.data);
        if (response.data.status === "success") {
          //this.MohonList = response.data.data; // Update store state
          // this.Countbystat = Object.values(response.data);
          this.Countbystat = response.data.data;

          //   console.log("Updated Countbystat in Store:", this.Countbystat);
          return response;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async createupdtindakanf(payload) {
      // console.log(payload);
      try {
        const response = await api.post("/updsaringan", payload, {
          headers: {
            Authorization: "bearer __q_strn|detailspermohonan",
            "Content-Type": "application/json",
          },
        }); // API endpoint
        // console.log('Success:', response.data);
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
