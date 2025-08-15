import { createRouter, createWebHistory } from "vue-router";
import Website from "@/components/website.vue";
import Accueil from "../Accueil.vue";
import Apropos from "../Apropos.vue";
import Logo from "../Logo.vue";
import Objectif from "../Objectif.vue";
import Missions from "../Missions.vue";
import Aides from "../Aides.vue";
import Contact from "../Contact.vue";
const routes = [
    {
        path: "/",
        component: Website,
        children: [
            {
                path: "/",
                name: "Accueil",
                component: Accueil,
            },
            {
                path: "/a-propos",
                name: "Apropos",
                component: Apropos,
            },
            {
                path: "/logo",
                name: "Logo",
                component: Logo,
            },
            {
                path: "/objectif",
                name: "Objectif",
                component: Objectif,
            },
            {
                path: "/missions",
                name: "Missions",
                component: Missions,
            },
            {
                path: "/aides-actions",
                name: "Aides",
                component: Aides,
            },
            {
                path: "/contact",
                name: "Contact",
                component: Contact,
            },
        ],
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // eslint-disable-next-line no-unused-vars
});

export default router;