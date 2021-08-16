export default {
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
  css: ["~assets/css/styles.css", "~assets/css/colors.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
