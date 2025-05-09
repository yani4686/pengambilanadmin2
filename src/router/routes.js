const routes = [
  //-------------- LoginPage ---------------------//
  // {
  //   path: "/:token",
  //   component: () => import("pages/LoginProcess.vue"),
  // },
  {
    path: "/",
    component: () => import("pages/login/LoginPagePengambilan.vue"),
    name: "login",
  },
  //-------------- PENGAMBILAN ---------------------//
  {
    path: "/pengambilan",
    component: () => import("layouts/MainLayoutPengambilan.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/dashboardpengambilan/DashboardPengambilan.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "/saringan",
        name: "LandingPageSaringan",
        component: () => import("pages/fakulti/LandingPageSaringan.vue"),
      },
      {
        path: "/detailspermohonan/:p001nokp",
        name: "DetailsPermohonan",
        props: true,
        component: () => import("pages/fakulti/DetailsPermohonan.vue"),
      },
      {
        path: "/editdetailspermohonan/:p001nokp",
        name: "EditPermohonan",
        component: () => import("pages/fakulti/EditPermohonan.vue"),
      },
      {
        path: "/summarypermohonan/:p001nokp",
        name: "SummaryPermohonan",
        component: () => import("pages/fakulti/SummaryPermohonan.vue"),
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("pages/fakulti/TestRet.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      //page admin lulus
      {
        path: "/kelulusan",
        name: "LandingPageKelulusan",
        component: () => import("pages/admin/LandingPageKelulusan.vue"),
      },
      {
        path: "/detailspermohonanadmin/:p001nokp",
        name: "DetailsPermohonanAdmin",
        component: () => import("pages/admin/DetailPermohonanAdmin.vue"),
      },
      {
        path: "/editdetailspermohonanadmin/:p001nokp",
        name: "EditPermohonanAdmin",
        component: () => import("pages/admin/EditPermohonanAdmin.vue"),
      },
      {
        path: "/calonjaya",
        name: "LandingPageOffer",
        component: () => import("pages/admin/ListPemohonOffer.vue"),
      },
      {
        path: "/detailsoffer/:p001nokp",
        name: "DetailsCalonJaya",
        component: () => import("pages/admin/DetailPemohonOffer.vue"),
      },
      {
        path: "/editoffer/:p001nokp",
        name: "KemaskiniCalonJaya",
        component: () => import("pages/admin/EditPemohonOffer.vue"),
      },
      // konfigurasi sistem
      {
        path: "/konfigurasi",
        name: "SetupAkses",
        component: () => import("pages/configuration/SetupAkses.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
