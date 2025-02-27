<template>
  <div class="page-title text-center">
    <h1>MODUL PENGAMBILAN CALON PELAJAR SISWAZAH</h1>
  </div>

  <div class="row justify-center q-pa-lg q-ma-lg">
    <q-card
      class="feature-card col-12 col-sm-3 blue-card cursor-pointer"
      @click="goToPageF"
    >
      <q-card class="q-pa-md">
        <div class="row justify-between items-center">
          <!-- Left Side: Title -->
          <div class="column q-ml-md">
            <div class="text-h6 text-weight-bold">Saringan</div>
            <div class="text-h6 text-weight-bold">Fakulti</div>
          </div>

          <!-- Right Side: Ticket Info -->
          <div class="column q-gutter-md">
            <!-- Bil Permohonan Baru -->
            <div class="row items-center">
              <q-avatar size="40px" class="bg-blue-1 text-blue-6">
                <q-icon name="confirmation_number" />
              </q-avatar>
              <div class="q-ml-md">
                <div class="text-weight-bold">Bil Permohonan Calon Baru</div>
                <div class="text-grey-7">{{ bilB }}</div>
              </div>
            </div>

            <!-- Bil Permohonan Dalam Proses -->
            <div class="row items-center">
              <q-avatar size="40px" class="bg-yellow-1 text-yellow-6">
                <q-icon name="check_circle" />
              </q-avatar>
              <div class="q-ml-md">
                <div class="text-weight-bold">Bil Permohonan Dalam Proses</div>
                <div class="text-grey-7">{{ bilProF }}</div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-card>

    <q-card
      class="feature-card col-12 col-sm-3 green-card cursor-pointer"
      @click="goToPagePPS"
    >
      <q-card class="q-pa-md">
        <div class="row justify-between items-center">
          <!-- Left Side: Title -->
          <div class="column q-ml-md">
            <div class="text-h6 text-weight-bold">Kelulusan</div>
            <div class="text-h6 text-weight-bold">PPS</div>
          </div>

          <!-- Right Side: Ticket Info -->
          <div class="column q-gutter-md">
            <!-- Bil Permohonan Baru -->
            <div class="row items-center">
              <q-avatar size="40px" class="bg-blue-1 text-blue-6">
                <q-icon name="confirmation_number" />
              </q-avatar>
              <div class="q-ml-md">
                <div class="text-weight-bold">
                  Bil Permohonan Disahkan Fakulti
                </div>
                <div class="text-grey-7">{{ bilLF }}</div>
              </div>
            </div>

            <!-- Bil Permohonan Dalam Proses -->
            <div class="row items-center">
              <q-avatar size="40px" class="bg-yellow-1 text-yellow-6">
                <q-icon name="check_circle" />
              </q-avatar>
              <div class="q-ml-md">
                <div class="text-weight-bold">
                  Bil Permohonan Telah Diluluskan
                </div>
                <div class="text-grey-7">142 New Tickets</div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-card>

    <!-- <q-card class="feature-card col-12 col-sm-3 green-card cursor-pointer">
      <q-card-section class="card-content">
        <q-icon name="done_all" size="lg" class="icon-left" />
        <div class="card-text">
          <div class="text-subtitle2">Approved Notice of Submission</div>
          <div class="text-h5">273</div>
        </div>
      </q-card-section>
    </q-card> -->
  </div>

  <!-- Cards Section -->
  <!-- {{ users.username }}
  <div class="cards-container">
    <q-card
      v-for="main in mainportal"
      :key="main.title"
      class="feature-card"
      :class="{ disabled: main.disabled }"
      @click="!main.disabled && navigateToPage(main.title)"
      @mouseover="hoveredCard = main.title"
      @mouseleave="hoveredCard = null"
      :style="{
        backgroundColor: hoveredCard === main.title ? '#f7ebb3' : 'white',
      }"
    >
      <q-tooltip v-if="main.disabled"> Not available </q-tooltip>
      <q-card-section class="q-pa-none">
        <div class="image-container">
          <img :src="main.image" :alt="main.title" class="card-image" />
          <div class="overlay-text">{{ main.title.toUpperCase() }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div> -->
</template>

<script>
// import staffImage from "/images/staff-unisza.jpg";
// import fpImage from "/images/FP-unisza.jpg";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import { defineComponent, onMounted, ref } from "vue";
import { useRetPermohonanStore } from "src/stores/getmohon";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FeatureDashboard",
  setup() {
    const storeGetMohon = useRetPermohonanStore(); // Pinia store

    var $q = useQuasar();
    const router = useRouter();

    const bilB = ref("");
    const bilD = ref("");
    const bilPF = ref("");
    const bilGF = ref("");
    const bilLF = ref("");
    const bilProF = ref("");

    const userSession = JSON.parse(sessionStorage.getItem("userSession"));
    let usrsession = userSession?.usradminptj1;
    let usrsessionfakulti = userSession?.fakulti;
    //console.log("User from Session:", usrsessionfakulti);

    // Fetch data on component mount
    onMounted(() => {
      onLoad();
    });

    // Load data from the store
    async function onLoad() {
      try {
        // Fetch data for bilstat
        await storeGetMohon.fetchbilstat();
        bilB.value = storeGetMohon.Countbystat.bildraf || "";
        bilD.value = storeGetMohon.Countbystat.bildraf1 || "";
        bilPF.value = storeGetMohon.Countbystat.bilpindahf || "";
        bilGF.value = storeGetMohon.Countbystat.bilgagalf || "";
        bilLF.value = storeGetMohon.Countbystat.billulusf || "";
        bilProF.value = storeGetMohon.Countbystat.bilprocessf || "";
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    //var token = $q.sessionStorage.getItem("token");
    // var users = ref({});

    // whois();

    // function whois() {
    //   api.get("/validateToken/" + token).then((res) => {
    //     users.value.username = res.data.data.name;
    //     console.log(res.data.data.name);
    //   });
    // }

    const goToPageF = () => {
      router.push({ name: "LandingPageSaringan" }); // Change to your actual route name
    };

    const goToPagePPS = () => {
      router.push({ name: "LandingPageKelulusan" }); // Change to your actual route name
    };

    return {
      usrsessionfakulti,
      usrsession,
      userSession,
      onMounted,
      onLoad,
      goToPageF,
      goToPagePPS,
      bilB,
      bilD,
      bilPF,
      bilGF,
      bilLF,
      bilProF,
      // users,
      // hoveredCard: null,
      // mainportal: [
      //   { title: "Saringan", image: staffImage, disabled: false },
      //   { title: "Kelulusan", image: fpImage, disabled: false },
      // ],
    };
  },
  // methods: {
  //   navigateToPage(title) {
  //     const formattedTitle = title.replace(/\s+/g, "").toLowerCase();
  //     this.$router.push(`/${formattedTitle}`);
  //   },
  // },
});
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.icon-left {
  margin-right: 15px;
  flex-shrink: 0;
}
.card-text {
  text-align: left;
}
.purple-card {
  border-left: 8px solid #ab9dd5;
}

.blue-card {
  border-left: 8px solid #6395ff;
}
.green-card {
  border-left: 8px solid #99e76c;
}
.feature-card {
  width: 500px;
  height: 150px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.page-title h1 {
  font-size: 20px;
  font-family: "Tahoma", sans-serif;
  color: #41403b;
  text-transform: uppercase;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-gap: 0px; */
  justify-items: center;
  padding-top: 40px;
  padding-inline: 160px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  /* width: 300px;
  height: 200px; */
  object-fit: cover;
  filter: blur(0.1px);
}

.feature-card:hover .card-image {
  transform: scale(1.05); /* Slight zoom on hover */
}

.overlay-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.628);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

.centered-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Viewport height */
  background-color: #f8f9fa; /* Optional background color */
}
</style>
