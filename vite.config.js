import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";


export default defineConfig({
 plugins: [tailwindcss()],
 base: "/", //test
 build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       pagecommande: resolve(__dirname, "pagecommande.html"),
       pageconnexioncompte: resolve(__dirname, "pageconnexioncompte.html"),
       pagecreationcompte: resolve(__dirname, "pagecreationcompte.html"),
       pagepanier: resolve(__dirname, "pagepanier.html"),
       pageproduit: resolve(__dirname, "pageproduit.html"),
       pagesoinscapillaires: resolve(__dirname, "pagesoinscapillaires.html"),
       pagesoinscorps: resolve(__dirname, "pagesoinscorps.html"),
       pagesoinspeau: resolve(__dirname, "pagesoinspeau.html"),
     },
   },
 },
});
