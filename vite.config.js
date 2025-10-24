import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";


export default defineConfig({
 plugins: [tailwindcss()],
 base: "SAE301", //test
 build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       pagecommande: resolve(__dirname, "pages/pagecommande.html"),
       pageconnexioncompte: resolve(__dirname, "pages/pageconnexioncompte.html"),
       pagecreationcompte: resolve(__dirname, "pages/pagecreationcompte.html"),
       pagepanier: resolve(__dirname, "pages/pagepanier.html"),
       pageproduit: resolve(__dirname, "pages/pageproduit.html"),
       pagesoinscapillaires: resolve(__dirname, "pages/pagesoinscapillaires.html"),
       pagesoinscorps: resolve(__dirname, "pages/pagesoinscorps.html"),
       pagesoinspeau: resolve(__dirname, "pages/pagesoinspeau.html"),
     },
   },
 },
});

