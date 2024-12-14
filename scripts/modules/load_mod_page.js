
/* https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/ */

import data from '../../mods.json' with { type: "json" };

export var modData = data;


export function generatePage() {
    const modDesc = document.getElementById("modDesc");
    const mod = window.location.href.split("#")[1]; /* Trouver le mod depuis l'anchor (#) de l'url */
    const modData = findMod(mod);

    if(modData == null){
        console.error("Mod non trouvé.");
        document.getElementById("notFound").classList.toggle("d-none");
        return;
    }
    document.getElementById("found").classList.toggle("d-none");

    console.log("Mod found: " + mod);

    /* Generer la page */

    /* 1) Icone de mod */
    document.getElementById("modIcon").src = modData.img;
    document.getElementById("modIcon").alt = modData.name;
    /* 2) Nom du mod */
    document.getElementById("modTitle").innerText = modData.name;
    /* 3a) Categories */
    for(let i=0;i<modData.category.length;i++){
        let span = document.createElement("span");
        if(modData.category[i] == "adv"){
            span.className = "bi bi-compass";
            span.title = "Aventure";
        }else if(modData.category[i] == "equ"){
            span.className = "bi bi-hammer";
            span.title = "Équipement";
        }else if(modData.category[i] == "gen"){
            span.className = "bi bi-globe-americas";
            span.title = "Génération";
        }else if(modData.category[i] == "lib"){
            span.className = "bi bi-book";
            span.title = "Librairies";
        }else if(modData.category[i] == "mag"){
            span.className = "bi bi-magic";
            span.title = "Magie";
        }else if(modData.category[i] == "opt"){
            span.className = "bi bi-lightning";
            span.title = "Optimisation";
        }else if(modData.category[i] == "soc"){
            span.className = "bi bi-megaphone";
            span.title = "Social";
        }else if(modData.category[i] == "tec"){
            span.className = "bi bi-wifi";
            span.title = "Technologie";
        }
        span.classList.add("fs-1","my-auto","mx-1");
        document.getElementById("modCats").appendChild(span);
    }
    /* 3b) Loaders du mod */
    for(let i=0;i<modData.loader.length;i++){
        let img = document.createElement("img");
        if(modData.loader[i] == "fabric"){
            img.src = "../img/fabric.png";
            img.alt = "Fabric";
            img.title = "Fabric";
        }else if(modData.loader[i] == "forge"){
            img.src = "../img/forge.png";
            img.alt = "Forge";
            img.title = "Forge";
        }else if(modData.loader[i] == "neoforge"){
            img.src = "../img/neoforged.png";
            img.alt = "NeoForge";
            img.title = "NeoForge";
        }else if(modData.loader[i] == "quilt"){
            img.src = "../img/quilt.webp";
            img.alt = "Quilt";
            img.title = "Quilt";
        }
        img.className = "mx-2 my-auto       max-width-2r max-height-2r max-width-lg-3r max-height-lg-3r";
        document.getElementById("modLoaders").appendChild(img);
    }

    /* 4) Nom du mod (encore) */
    document.getElementById("modName").innerText = modData.name;

    /* 5) Autheur(s) du mod */
    document.getElementById("modAuthor").innerText = modData.author;

    /* 6) Derniere MAJ du mod */
    let dateMAJ = String(new Date(modData.update * 1000));
    document.getElementById("modUpdate").innerText = dateMAJ.split("GMT")[0];

    /* 7) Nbr de downloads du mod */
    document.getElementById("modDownloads").innerText = modData.downloads;
    document.getElementById("modDownloads").innerText = modData.downloads;

    /* 8) Description du mod */
    document.getElementById("modDesc").innerHTML = createHTML(modData.desc_html);

    /* 9) Source du mod */
    document.getElementById("modSource").href = modData.source;

    /* 10a) Choix du ModLoader */
    if(modData.loader.includes("fabric")){
        let option = document.createElement("option");
        option.innerText = "Fabric";
        document.getElementById("downloadLoaderList").appendChild(option);
    }
    if(modData.loader.includes("forge")){
        let option = document.createElement("option");
        option.innerText = "Forge";
        document.getElementById("downloadLoaderList").appendChild(option);
    }
    if(modData.loader.includes("neoforge")){
        let option = document.createElement("option");
        option.innerText = "NeoForge";
        document.getElementById("downloadLoaderList").appendChild(option);
    }
    if(modData.loader.includes("quilt")){
        let option = document.createElement("option");
        option.innerText = "Quilt";
        document.getElementById("downloadLoaderList").appendChild(option);
    }
    /* 10b) Choix de la version */
    if(modData.version.includes("16")){
        let option = document.createElement("option");
        option.innerText = "MC 1.16.5";
        document.getElementById("downloadVersionList").appendChild(option);
    }
    if(modData.version.includes("18")){
        let option = document.createElement("option");
        option.innerText = "MC 1.18.2";
        document.getElementById("downloadVersionList").appendChild(option);
    }
    if(modData.version.includes("20")){
        let option = document.createElement("option");
        option.innerText = "MC 1.20.4";
        document.getElementById("downloadVersionList").appendChild(option);
    }
    if(modData.version.includes("21")){
        let option = document.createElement("option");
        option.innerText = "MC 1.21.4";
        document.getElementById("downloadVersionList").appendChild(option);
    }
    
}

function findMod(info) {
    for(let i=0;i<data.mods.length;i++){
        if(data.mods[i].id == info){
            return data.mods[i];
        }
    }
    /* si pas trouver */
    return null;
}

function createHTML(html){
    let newHTML = "";
    for(let i=0;i<html.length;i++){
        newHTML+=html[i];
    }
    return newHTML;
}

/* Run generateList on load */
generatePage();
