export default {
  server: {
    host: '0.0.0.0',
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:8000",
    apiUrl: process.env.API_URL || "http://localhost:8000/api"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "shurlaw_nuxt_frontend",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { defer: true, src: "/js/jquery.min.js" },
      { defer: true, src: "/js/popper.min.js" },
      { defer: true, src: "/js/bootstrap.min.js" },
      { defer: true, src: "/js/rangeslider.js" },
      { defer: true, src: "/js/select2.min.js" },
      { defer: true, src: "/js/jquery.magnific-popup.min.js" },
      { defer: true, src: "/js/slick.js" },
      { defer: true, src: "/js/slider-bg.js" },
      { defer: true, src: "/js/lightbox.js" },
      { defer: true, src: "/js/imagesloaded.js" },
      { defer: true, src: "/js/custom.js" },
      { defer: true, src: "/js/cl-switch.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/page-transition.css",
    "~assets/css/styles.css",
    "~assets/css/colors.css",
    "~assets/css/scss/custom-styles.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast"
  ],

  toast: {
    position: "top-center",
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.API_URL || "http://localhost:8000/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    watchLoggedIn: false,
    redirect: {
      login: "/",
      logout: "/",
      callback: "/",
      home: "/dashboard"
    },
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          // required: true,
          type: "Bearer"
        },
        user: {
          property: "user"
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/me", method: "get" }
        }
      }
    }
  }
};
