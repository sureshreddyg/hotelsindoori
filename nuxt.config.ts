import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "Hoexr - Hotel Booking NuxtJS Template",
            script: []
        }
    },
    css: [
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
        "/public/css/bootstrap.min.css",
        "/public/css/style.css",
        //"/public/css/responsive.css",
    ],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Barlow: {
                        wght: [400, 700, 900]
                    },
                    "Barlow+Condensed": {
                        wght: [400, 500, 600, 700,800]
                    },
                    "Gilda+Display": {
                        wght: [400, 500, 600, 700,800]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
    ],
    // plugins: [
    //     '~/plugins/wow.js',
    //   ],
})
