const routes = [
  //-------------- WHITE LAYOUT ---------------------//
  {
    path: "/portal",
    component: () => import("src/layouts/PortalLayoutwhite.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "/portal/login",
        component: () => import("pages/LoginPage.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "portalfakulti",
        component: () => import("pages/LandingPage2.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "portalpensyarah",
        component: () => import("pages/LandingPage1.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
    ],
  },

  {
    path: "/forgot-password",
    component: () => import("pages/forgotPassword.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },

  //-------------- GUIDELINE ---------------------//
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "landingpage2",
        component: () => import("pages/IndexPage2.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "landingpage3",
        component: () => import("src/pages/IndexPageother.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "landingpage4",
        component: () => import("pages/IndexPage4.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "portalpensyarah",
        component: () => import("pages/LandingPage1.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
      {
        path: "portalfakulti",
        component: () => import("pages/LandingPage2.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
      {
        path: "portaladminakademik",
        component: () => import("pages/LandingPage3.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
      {
        path: "/dashboard",
        component: () => import("pages/DashboardPage1.vue"),
        meta: { hideDrawer: false },
        hideBreadcrumbs: false,
        hideRoleSelection: false,
      },

      {
        path: "form",
        component: () => import("pages/FormPage.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "chart",
        component: () => import("pages/ChartPage.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "modal",
        component: () => import("pages/ComponentModal.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "tab",
        component: () => import("pages/ComponentTab.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "accordian",
        component: () => import("pages/ComponentCollapsible.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "markahonline",
        component: () => import("pages/DashboardPage1.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      // {
      //   path: "Dashboard",
      //   component: () => import("pages/DashboardPage1.vue"),
      //   meta: { hideDrawer: false },
      // },
      {
        path: "report-table",
        component: () => import("pages/reportTable.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "event-calendar",
        component: () => import("pages/EventCalendar.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "schedule-calendar",
        component: () => import("pages/ScheduleCalendar.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "calendar-calendar",
        component: () => import("pages/calendarCalendar.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
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
