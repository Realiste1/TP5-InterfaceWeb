
/* https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/ */

import data from '../../mods.json' with { type: "json" };

export var modData = data;

console.log("Found ModList: ", data);


export function generateList(searchTerm, loader, version, categories) {
    const modList = document.getElementById("modList");
    const filterName = document.getElementById("inputSearch").value;
    const filterLoader = document.getElementById("filterModLoader").value;
    const filterVersion = document.getElementById("filterVersion").value;

    console.log("Nbr de mods:", data.mods.length)

    /* supprimer la vieille liste */
    while(modList.firstChild){
        modList.removeChild(modList.lastChild);
    }

/*     

STRUCTURE: 

<a href="mods/fabricapi.html" class="text-decoration-none">
    <div class="card mb-3 border border-2 border-gray">
        <div class="row g-0">
            <div class="col-md-1 my-auto">
                <img src="https://cdn.modrinth.com/data/P7dR8mSH/icon.png" class="img-fluid rounded-start" alt="Fabric API">
            </div>
            <div class="col-md-11">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between">
                        <p class="fs-5">Fabric API</p>
                        <div class="mod_cat me-2 fs-3">
                            <span class="bi bi-book" title="Libraries"></span>
                        </div>
                    </div>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. aaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa</p>
                </div>
            </div>
        </div>
    </div>
</a> 
*/
    console.group("Filtres Actifs");
    if(filterName){
        console.log("FILTER:", filterName.toUpperCase());
    }
    if(filterLoader){
        console.log("LOADER:", filterLoader);
    }
    if(filterVersion){
        console.log("VERSION:", filterVersion);
    }
    console.groupEnd();
    
    console.group("Info Generation");
    for(let i = 0; i < data.mods.length; i++){
        
        console.log("trouver mod", data.mods[i].id, "de la liste des mods, ajouter dans la recherche.");

        /* Check pour les filtres */
        /* filtre 1: Nom */
        if(filterName){
            let upperName = data.mods[i].name.toUpperCase();
            if(!upperName.includes(filterName.toUpperCase())){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name.toUpperCase(), "ne contient pas de \"", filterName.toUpperCase(), "\", skipping...");
                continue;
            }
        }

        /* filtre 2: Loader */
        if(filterLoader){
            if(!data.mods[i].loader.includes(filterLoader)){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"", filterLoader, "\", skipping...");
                continue;
            }
        }

        /* filtre 3: Version */
        if(filterLoader){
            /* TODO */
        }
        

        /* filtre 4: Categorie */
        if(document.getElementById("filterTypeAdventure").checked){
            if(!data.mods[i].category.includes("adv")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Aventure\", skipping...");
                continue;
            }
        }
        if(document.getElementById("filterTypeEquipment").checked){
            if(!data.mods[i].category.includes("equ")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Equipement\", skipping...");
                continue;
            }
        }
        if(document.getElementById("filterTypeGeneration").checked){
            if(!data.mods[i].category.includes("gen")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Generation\", skipping...");
                continue;
            }
        }
        if(document.getElementById("filterTypeLibrary").checked){
            if(!data.mods[i].category.includes("lib")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Librairies\", skipping...");
                continue;
            }
        }
        if(document.getElementById("filterTypeMagic").checked){
            if(!data.mods[i].category.includes("mag")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Magie\", skipping...");
                continue;
            }
        }
        if(document.getElementById("filterTypeOptimization").checked){
            if(!data.mods[i].category.includes("opt")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Optimisation\", skipping...");
                continue;
            }
        }
        if(document.getElementById("filterTypeSocial").checked){
            if(!data.mods[i].category.includes("soc")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Social\", skipping...");
                continue;
            }
        }
        if(document.getElementById("filterTypeTechnology").checked){
            if(!data.mods[i].category.includes("tec")){
                console.log("%c[FILTER]", "color: lime; background: #664400", data.mods[i].name, "n'est pas un mod de \"Technologie\", skipping...");
                continue;
            }
        }
        



        let newMod = document.createElement("a");

        /* Puisque JS s'en fiche, je vais indenter pour que se soit plus facile de reperer */

            let div1 = document.createElement("div");
            div1.className = "card mb-3 border border-2 border-gray";

                let div2 = document.createElement("div");
                div2.className = "row g-0";

                    let div3 = document.createElement("div");
                    div3.className = "col-md-1 my-auto border border-3 border-gray rounded-3";

                        let img = document.createElement("img");
                        img.className = "img-fluid rounded rounded-start w-100";
                        img.alt = data.mods[i].name
                        img.src = data.mods[i].img
                
                    div3.appendChild(img);

                div2.appendChild(div3);

                    let div4 = document.createElement("div");
                    div4.className = "col-md-11";

                        let div5 = document.createElement("div");
                        div5.className = "card-body";

                            let div6 = document.createElement("div");
                            div6.className = "card-title d-flex justify-content-between";

                                let pTitle = document.createElement("p");
                                pTitle.className = "fs-5";
                                pTitle.innerText = data.mods[i].name;
                        
                            div6.appendChild(pTitle);

                                let div7 = document.createElement("div");
                                div7.className = "mod_cat me-2 fs-3";

                                for(let j = 0; j < data.mods[i].category.length; j++){
                                    let span = document.createElement("span");

                                    /* Check quel(s) categorie(s) le mod a */
                                    if(data.mods[i].category[j] == "adv"){
                                        span.className = "bi bi-compass";
                                        span.title = "Aventure";
                                    }else if(data.mods[i].category[j] == "equ"){
                                        span.className = "bi bi-hammer";
                                        span.title = "Équipement";
                                    }else if(data.mods[i].category[j] == "gen"){
                                        span.className = "bi bi-globe-americas";
                                        span.title = "Génération";
                                    }else if(data.mods[i].category[j] == "lib"){
                                        span.className = "bi bi-book";
                                        span.title = "Librairies";
                                    }else if(data.mods[i].category[j] == "mag"){
                                        span.className = "bi bi-magic";
                                        span.title = "Magie";
                                    }else if(data.mods[i].category[j] == "opt"){
                                        span.className = "bi bi-lightning";
                                        span.title = "Optimisation";
                                    }else if(data.mods[i].category[j] == "soc"){
                                        span.className = "bi bi-megaphone";
                                        span.title = "Social";
                                    }else if(data.mods[i].category[j] == "tec"){
                                        span.className = "bi bi-wifi";
                                        span.title = "Technologie";
                                    }
                                    div7.appendChild(span);
                                }
                                
                                for(let j = 0; j < data.mods[i].loader.length; j++){
                                    let img2 = document.createElement("img");

                                    /* Check quel(s) loader(s) le mod a */
                                    if(data.mods[i].loader[j] == "fabric"){
                                        img2.src = "../img/fabric.png";
                                        img2.className = "max-width-2r mx-2";
                                        img2.alt = "Fabric";
                                        img2.title = "Fabric";
                                    }else if(data.mods[i].loader[j] == "forge"){
                                        img2.src = "../img/forge.png";
                                        img2.className = "max-width-2r mx-2";
                                        img2.alt = "Forge";
                                        img2.title = "Forge";
                                    }else if(data.mods[i].loader[j] == "neoforge"){
                                        img2.src = "../img/neoforged.png";
                                        img2.className = "max-width-2r mx-2";
                                        img2.alt = "NeoForge";
                                        img2.title = "NeoForge";
                                    }else if(data.mods[i].loader[j] == "quilt"){
                                        img2.src = "../img/quilt.webp";
                                        img2.className = "max-width-2r mx-2";
                                        img2.alt = "Quilt";
                                        img2.title = "Quilt";
                                        
                                    }
                                    div7.appendChild(img2);
                                }
                                
                        
                            div6.appendChild(div7);
                    
                        div5.appendChild(div6);
                                    

                            let pDesc = document.createElement("p");
                            pDesc.className = "card-text";
                            pDesc.innerText = data.mods[i].desc;
                        div5.appendChild(pDesc);
                                        
                
                    div4.appendChild(div5);
            
                div2.appendChild(div4);
        
            div1.appendChild(div2);

        newMod.appendChild(div1);
        newMod.href = "mods/" + data.mods[i].id + ".html";
        newMod.className = "text-decoration-none";
        newMod.id = data.mods[i].id
        modList.appendChild(newMod);
    }
    console.groupEnd();
}


/* Run generateList on load */
generateList();
