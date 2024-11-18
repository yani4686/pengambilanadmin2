<template>
  <div class="q-pa-sm full-height-layout">
    <q-layout view="hHh Lpr Ff" class="layout-no-scroll full-height-layout">
      <!------------------------------------------- Top Header ---------------------------------------->
      <q-header elevated style="background: #343331; height: 75px">
        <q-toolbar>
          <q-toolbar-title>
            <q-item-label header>
              <q-btn
                v-if="!$route.meta.hideDrawer"
                flat
                @click="drawer = !drawer"
                round
                dense
                icon="menu"
                style="
                  margin-bottom: 20px;
                  margin-left: -15px;
                  overflow-x: hidden;
                  overflow-y: hidden;
                "
              />
              <img
                src="images/unisza_logo.png"
                style="padding-left: 15px"
                class="adjusted-image"
              />
              <img
                src="~/assets/idfiw.png"
                style="margin-left: 20px"
                class="adjusted-image"
              />
            </q-item-label>
          </q-toolbar-title>

          <q-item-section side class="q-pa-none q-ma-none">
            <div class="row items-center justify-end no-wrap header-icons">
              <q-item>
                <a href="https://portal.unisza.edu.my/sis">
                  <q-icon
                    name="fa fa-home"
                    title="Dashboard Staf UniSZA"
                    class="icon-link"
                  />
                </a>
              </q-item>
              <q-item>
                <a
                  href="#"
                  class="dropdown-toggle nav-link pr-0"
                  aria-expanded="false"
                >
                  <q-icon
                    name="fa fa-th"
                    title="Klik di sini untuk Pautan Pantas"
                    class="icon-link"
                  />
                </a>
              </q-item>
              <q-item>
                <a href="https://portal.unisza.edu.my/aduan" target="_blank">
                  <q-icon
                    name="fas fa-headset"
                    title="Aduan/Helpdesk"
                    class="icon-link"
                  />
                </a>
              </q-item>
              <!-- <div class="q-mx-sm"> -->
              <!-- <div class="q-avatar cursor-pointer">
                <div class="q-avatar__content row flex-center overflow-hidden">
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" alt="" />
                  <div
                    class="q-badge flex inline items-center no-wrap q-badge--single-line bg-green q-badge--floating q-badge--rounded"
                    role="status"
                  ></div>

                </div>
              </div> -->
              <q-item>
                <q-avatar square size="28px">
                  <img
                    src="https://portal.unisza.edu.my/modules/Staff_Info/images/photos/SKP003.jpg"
                  />
                </q-avatar>

                <div class="user-info">
                  {{ users.username }}
                  <small>{{ users.email }}</small>
                </div>

                <q-btn flat icon="arrow_drop_down" size="sm" />
              </q-item>
              <!-- </div> -->
            </div>
          </q-item-section>
        </q-toolbar>
      </q-header>
      <!-------------------------------------- Sidebar (Drawer) ---------------------------------------------->
      <q-drawer
        v-if="!$route.meta.hideDrawer"
        v-model="drawer"
        :mini="miniState"
        mini-to-overlay
        show-if-above
        bordered
        style="background: #343331; width: 250px"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        class="full-height-drawer"
      >
        <q-list>
          <!-- Login Menu -->
          <q-item
            style="color: white"
            clickable
            v-ripple
            @click="router.push('/#/')"
          >
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <a href="#/login" style="color: white">Login </a></q-item-label
              >
            </q-item-section>
          </q-item>

          <!-- Landing Page Menu with Submenu -->
          <q-expansion-item
            style="color: white"
            icon="find_in_page"
            label="Landing Page"
            expand-separator
            :expanded="showSubmenu"
            @mouseover="showSubmenu = true"
            @mouseleave="showSubmenu = false"
          >
            <!-- submenu -->
            <q-list class="submenu">
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/" style="color: white">Landing Page 1</a>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/landingpage2" style="color: white"
                      >Landing Page 2</a
                    >
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/landingpage3" style="color: white"
                      >Landing Page 3</a
                    >
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/landingpage4" style="color: white"
                      >Landing Page 4</a
                    >
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <!-- @click="router.push('/dashboard/othermenu')" -->
          <!-- Dashboard Menu -->
          <q-item style="color: white" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <a href="#/dashboard/othermenu" style="color: white"
                  >Dashboard</a
                >
              </q-item-label>
            </q-item-section>
          </q-item>
          <!-- Component Menu with Submenu -->
          <q-expansion-item
            style="color: white"
            icon="description"
            label="Component"
            expand-separator
            :expanded="showSubmenu"
            @mouseover="showSubmenu = true"
            @mouseleave="showSubmenu = false"
          >
            <!-- submenu -->
            <q-list class="submenu">
              <!-- <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/modal" style="color: white">Modal</a>
                  </q-item-label>
                </q-item-section>
              </q-item> -->
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/tab" style="color: white">Tab</a>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/accordian" style="color: white"
                      >Accordian</a
                    >
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/button" style="color: white">Button</a>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- Calendar Menu with Submenu -->
          <q-expansion-item
            style="color: white"
            icon="calendar_month"
            label="Calendar"
            expand-separator
          >
            <q-list class="submenu">
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/event-calendar" style="color: white"
                      >Event Calendar</a
                    >
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <a href="#/dashboard/schedule-calendar" style="color: white"
                      >Schedule Calendar</a
                    >
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- Other Menus -->
          <NavLink
            style="color: white"
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>

      <!-- Page Content -->
      <q-page-container class="q-mt-none full-height-page-container">
        <!-- Image in the corner corner-image-->
        <div class="corner-image"></div>
        <!------------------------------------------- Breadcrumb -------------------------------------------->
        <div class="q-pa-sm">
          <!-- Flex container for breadcrumbs and role selection -->
          <div class="row items-center justify-between">
            <!-- Breadcrumbs -->
            <q-breadcrumbs v-if="!$route.meta.hideBreadcrumbs">
              <q-breadcrumbs-el
                label="Dashboard"
                icon="dashboard"
                @click="goToHome"
              />
              <q-breadcrumbs-el
                v-for="(breadcrumb, index) in breadcrumbs"
                :key="index"
                :label="breadcrumb.label"
                :to="breadcrumb.to"
                exact
                clickable
              />
            </q-breadcrumbs>

            <!-- Role Selection Dropdown -->
            <q-select
              v-if="!$route.meta.hideRoleSelection"
              v-model="selectedRole"
              :options="roles"
              label="Select Role"
              outlined
              dense
              style="min-width: 300px"
            />
          </div>
        </div>
        <!-- <img
          src="/images/logobcg.png"
          class="corner-image"
          alt="Corner Image"
        /> -->
        <router-view />
      </q-page-container>
      <!-- Footer -->
      <q-footer class="bg-dark text-white">
        <div class="q-pa-md text-center">
          Copyright © 2024
          <a
            href="https://ppir.unisza.edu.my/"
            target="_blank"
            class="text-white"
          >
            Pusat Pengurusan Infostruktur & Rangkaian (PPIR)
          </a>
          |
          <a
            href="https://www.unisza.edu.my/"
            target="_blank"
            class="text-white"
            >UniSZA </a
          >| All Rights Reserved
        </div>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavLink from "../components/NavLink.vue";
import { api } from "src/boot/axios";
//import { ref } from "vue";

export default {
  components: {
    NavLink,
  },
  setup() {
    const $q = useQuasar();
    var token = $q.sessionStorage.getItem("token");
    var users = ref({});

    whois();

    function whois() {
      api.get("/validateToken/" + token).then((res) => {
        users.value.username = res.data.data.name;
        console.log(res.data.data.name);
      });
    }

    const route = useRoute();

    const drawer = ref(false);
    const miniState = ref(true); // Mini sidebar initially active
    const showSubmenu = ref(false); // Control submenu visibility
    const showQuickmenu = ref(false);
    // const showCalendarmenu = ref(false);
    //const topNavTab = ref("dashboard");
    const componentMenu = ref(false);
    // const calendarMenu = ref(false);
    const hoveredTab = ref(null);

    //-------------------------------------------------------- Breadcrumb ----------------------------------------------------------
    // Breadcrumbs calculation
    const breadcrumbs = computed(() => {
      const paths = route.path.split("/").filter(Boolean);
      return paths.map((path, index) => {
        const to = "/" + paths.slice(0, index + 1).join("/");
        return {
          label: path.charAt(0).toUpperCase() + path.slice(1),
          to,
        };
      });
    });
    // ------------------------------------------------- Sidebar Menu ---------------------------------------------

    // Check if the current route matches the Component submenu path
    const isComponentMenuExpanded = computed(() =>
      route.path.includes("#/dashboard/component")
    );

    // Check if the current route matches the Calendar submenu path
    const isCalendarMenuExpanded = computed(() =>
      route.path.includes("#/dashboard/calendar")
    );

    // Dynamic quick links for specific paths
    const isQuickLinksExpanded = computed(() => {
      return (
        route.path.includes("#/dashboard/portalpensyarah") ||
        route.path.includes("#/dashboard/portalfakulti")
      );
    });

    // Dynamically control the quick links submenu based on route
    const quickLinks = computed(() => {
      if (route.path.includes("#/dashboard/portalpensyarah")) {
        return [
          { title: "Assessment", link: "#/landingpage/assessment" },
          { title: "DCI", link: "#/landingpage/dci" },
          { title: "Supervision", link: "#/landingpage/supervision" },
          { title: "Supervision", link: "#/landingpage/supervision" },
          { title: "Attandance", link: "#/landingpage/attandance" },
          { title: "E-Cofi", link: "#/landingpage/ecofi" },
          { title: "E-Learning", link: "#/landingpage/elearning" },
        ];
      } else if (route.path.includes("/landingpage/portalfakulti")) {
        return [
          {
            title: "Course Registration",
            link: "#/landingpage/course-registration",
          },
          { title: "APMS", link: "#/landingpage/apms" },
          { title: "Course Code", link: "#/landingpage/coursecode" },
          { title: "Course Structure", link: "#/landingpage/course-structure" },
          { title: "OBE", link: "#/landingpage/obe" },
          { title: "Course Offered", link: "#/landingpage/course-offered" },
          { title: "UTime", link: "#/landingpage/utime" },
          { title: "SPB", link: "#/landingpage/spb" },
          { title: "LI", link: "#/landingpage/latihan-industri" },
          { title: "E-COFI", link: "#/landingpage/e-cofi" },
          { title: "Boardlist", link: "#/landingpage/boardlist" },
          { title: "Reporting", link: "#/landingpage/reporting" },
          { title: "Transfer Credit", link: "#/landingpage/transfer-credit" },
          {
            title: "Permohonan Pelajar",
            link: "#/landingpage/permohonan-pelajar",
          },
          {
            title: "Pemilihan Pelajar",
            link: "#/landingpage/pemilihan-pelajar",
          },
          {
            title: "Kemasukan Pelajar",
            link: "#/landingpage/kemasukan-pelajar",
          },
          { title: "MUET & CEFR", link: "#/landingpage/muet-cefr" },
          { title: "Student Info", link: "#/landingpage/student-info" },
          { title: "Lecturer Info", link: "#/landingpage/lecturer-info" },
          { title: "Program Info", link: "#/landingpage/program-info" },
          {
            title: "Academic Calendar",
            link: "#/landingpage/academic-calendar",
          },
        ];
      } else {
        return [];
      }
    });

    //------------------------------------------------- Sidebar Menu ---------------------------------------------

    const linksList = [
      {
        title: "Forms",
        icon: "assignment_add",
        link: "#/dashboard/form",
      },
      {
        title: "Tables",
        icon: "table_chart",
        link: "#/dashboard/report-table",
      },
      {
        title: "Chart",
        icon: "bar_chart",
        link: "#/dashboard/chart",
      },
    ];

    return {
      users,
      // user: {
      //   username: "nsyazwanimyusoff",
      //   role: "Admin",
      //   // avatar: require('@/assets/user-avatar.png'), // Replace with the actual path to the avatar image
      // },
      // Role selection properties
      selectedRole: null,
      roles: [
        { label: "Academic Administrator", value: "admin" },
        { label: "Faculty", value: "fakulti" },
      ],
      drawer,
      miniState,
      linksList,
      showSubmenu,
      showQuickmenu,
      componentMenu,
      hoveredTab,
      breadcrumbs,
      goToHome() {
        router.push("/");
      },

      isQuickLinksExpanded,
      quickLinks,
    };
  },
  methods: {
    onRoleChange(newRole) {
      this.selectedRole = newRole; // Update the selected role
      console.log("Selected Role:", newRole);
    },
    // navigateTo(link) {
    //   this.$router.push(`dashboard/${link}`);
    //   // this.$router.push(`dashboard/${formattedTitle}`);
    // },
  },
};
</script>

<style scoped>
.full-height-layout {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Take up full viewport height */
  overflow: hidden; /* Prevent scrolling */
}

.q-page-container {
  flex-grow: 1; /* Take remaining space */
  overflow-y: auto; /* Enable scrolling only when content exceeds height */
  overflow-x: hidden; /* Disable horizontal scrolling */
  max-width: 100vw; /* Ensure no content exceeds viewport width */
}

.q-drawer {
  height: 100%;
}

.q-header {
  flex-shrink: 0;
}

.q-footer {
  flex-shrink: 0; /* Ensures footer stays at the bottom */
  margin-top: auto; /* Push footer to the bottom */
}

.submenu {
  margin-left: 40px;
}

.adjusted-image {
  /* width: 100%;
  height: auto; */

  max-width: 110px;
  max-height: 80px;
  object-fit: contain;
}

.corner-image {
  background-image: url("/images/iconbcg.png"); /* Change the path if needed */
  background-position: center;
  background-size: contain; /* Ensure the image fits */
  background-repeat: no-repeat;
  position: absolute;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  top: 70px; /* Adjust the distance from the top */
  right: -12px; /* Adjust the distance from the right */
  width: 250px; /* Adjust the size of the image */
  height: 300px; /* Adjust height to ensure the image has space */
}
.sidemenu {
  font-size: 5px;
}

/* Style for icons to ensure consistent size and spacing */
.icon-link {
  font-size: 14px; /* Adjust the size as needed */
  color: #ffc000;
  margin: 0px -10px; /* Reduces the spacing between icons */
}
.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}

.user-info span {
  /* font-weight: bold; */
  color: white;
}

.user-info small {
  color: gray;
  font-size: 12px;
}
</style>
