
/* https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/ */

import data from '../../mods.json' with { type: "json" };

export var modData = data;

console.log("Found ModList: ", data);


export function generatePanier() {
    let curStorage = Array(sessionStorage.getItem("modList"));
    let runStatus = null;
    try{
        let newTab = [];
        let tab = "";
        for(let i = 0;i<curStorage[0].length;i++){
            if(curStorage[0][i]==","){
                newTab.push(tab);
                tab = "";
            }else{
                tab+=curStorage[0][i];
            }
        }
        newTab.push(tab);
        curStorage = newTab;
        runStatus = 1;
    }catch{
        document.getElementById("emptyList").classList.toggle("d-none");
        console.warn("Panier vide!");
    }

    if(runStatus!=1){
        return
    }

    document.getElementById("panierListe").classList.toggle("d-none");

    /* Generer le panier */
    for(let i = 0; i < curStorage.length; i++){
        
        
        let idname = "";
        let loader = "";
        let version = "";
        let type=1;
        for(let j=0;j<curStorage[i].length;j++){
            if(type==1){
                if(curStorage[i][j]=="|"){
                    type=2;
                    continue
                }else{
                    idname+=curStorage[i][j];
                }
            }
            if(type==2){
                if(curStorage[i][j]=="|"){
                    type=3;
                    continue
                }else{
                    loader+=curStorage[i][j];
                }
            }
            if(type==3){
                version+=curStorage[i][j];
            }
        }
        let name = ""
        let desc = ""
        let category = ""
        let image = ""
        let loaders = ""
        let downloads = ""
        for(let j=0;j<data.mods.length;j++){
            if(data.mods[j].id == idname){
                name = data.mods[j].name
                desc = data.mods[j].desc
                category = data.mods[j].category
                image = data.mods[j].img
                loaders = data.mods[j].loader
                downloads = data.mods[j].downloads
            }
        }



        console.log("trouver mod", idname, "de session avec loader " + loader + " et version " + version, "ajouter dans le panier");


        let panier = document.getElementById("listeModsPanier");

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
                        img.alt = name;
                        img.src = image;
                
                    div3.appendChild(img);

                div2.appendChild(div3);

                    let div4 = document.createElement("div");
                    div4.className = "col-md-11";

                        let div5 = document.createElement("div");
                        div5.className = "card-body d-flex flex-column";

                            let div6 = document.createElement("div");
                            div6.className = "card-title d-flex justify-content-between";

                                let pTitle = document.createElement("p");
                                pTitle.className = "fs-5";
                                pTitle.innerText = name;
                        
                            div6.appendChild(pTitle);

                                let div7 = document.createElement("div");
                                div7.className = "mod_cat me-2 fs-3";

                                for(let j = 0; j < category.length; j++){
                                    let span = document.createElement("span");

                                    /* Check quel(s) categorie(s) le mod a */
                                    if(category[j] == "adv"){
                                        span.className = "bi bi-compass";
                                        span.title = "Aventure";
                                    }else if(category[j] == "equ"){
                                        span.className = "bi bi-hammer";
                                        span.title = "Équipement";
                                    }else if(category[j] == "gen"){
                                        span.className = "bi bi-globe-americas";
                                        span.title = "Génération";
                                    }else if(category[j] == "lib"){
                                        span.className = "bi bi-book";
                                        span.title = "Librairies";
                                    }else if(category[j] == "mag"){
                                        span.className = "bi bi-magic";
                                        span.title = "Magie";
                                    }else if(category[j] == "opt"){
                                        span.className = "bi bi-lightning";
                                        span.title = "Optimisation";
                                    }else if(category[j] == "soc"){
                                        span.className = "bi bi-megaphone";
                                        span.title = "Social";
                                    }else if(category[j] == "tec"){
                                        span.className = "bi bi-wifi";
                                        span.title = "Technologie";
                                    }
                                    span.classList.add("mx-1","text-end");
                                    div7.appendChild(span);
                                }
                                
                                for(let j = 0; j < loaders.length; j++){
                                    let img2 = document.createElement("img");

                                    /* Check quel(s) loader(s) le mod a */
                                    if(loaders[j] == "fabric"){
                                        img2.src = "https://realiste1.github.io/TP5-InterfaceWeb/img/fabric.png";
                                        img2.alt = "Fabric";
                                        img2.title = "Fabric";
                                    }else if(loaders[j] == "forge"){
                                        img2.src = "https://realiste1.github.io/TP5-InterfaceWeb/img/forge.png";
                                        img2.alt = "Forge";
                                        img2.title = "Forge";
                                    }else if(loaders[j] == "neoforge"){
                                        img2.src = "https://realiste1.github.io/TP5-InterfaceWeb/img/neoforged.png";
                                        img2.alt = "NeoForge";
                                        img2.title = "NeoForge";
                                    }else if(loaders[j] == "quilt"){
                                        img2.src = "https://realiste1.github.io/TP5-InterfaceWeb/img/quilt.webp";
                                        img2.alt = "Quilt";
                                        img2.title = "Quilt";
                                    }
                                    img2.className = "mx-2      max-width-2r";
                                    div7.appendChild(img2);
                                }
                                
                        
                            div6.appendChild(div7);
                    
                        div5.appendChild(div6);
                                    

                            let div8 = document.createElement("div");
                            div8.className = "card-text d-flex flex-column flex-lg-row justify-content-lg-between";

                                let pDesc = document.createElement("p");
                                pDesc.innerText = desc;
                            div8.appendChild(pDesc);
                                let pDwl = document.createElement("p");
                                pDwl.className = "text-lg-end";
                                pDwl.innerText = downloads + " téléchargements";
                            div8.appendChild(pDwl);
                        div5.appendChild(div8);
                
                    div4.appendChild(div5);
            
                div2.appendChild(div4);
        
            div1.appendChild(div2);

        newMod.appendChild(div1);
        newMod.href = "https://realiste1.github.io/TP5-InterfaceWeb/result.html#" + idname;
        newMod.className = "text-decoration-none";
        newMod.id = idname
        panier.appendChild(newMod);

        /* Panier - Side */
        let panierSideList = document.getElementById("panierSideList");
        
        let pModName = document.createElement("p");
        pModName.innerText = name;
        pModName.className = "m-0 ms-2 fs-4"

        let div10 = document.createElement("div");
        div10.className = "d-flex d-row justify-content-between row border-bottom border-1 border-gray align-items-center";
            let pModLoader = document.createElement("p");
            pModLoader.innerText = loader;
            pModLoader.className = "m-0 col col-4 ms-3 text-center"
        div10.appendChild(pModLoader);
            let pModVersion = document.createElement("p");
            pModVersion.innerText = version;
            pModVersion.className = "m-0 col col-4 text-center"
        div10.appendChild(pModVersion);
            let aTrash = document.createElement("a");
                let spanTrash = document.createElement("span");
                spanTrash.className = "bi bi-trash text-danger fs-2 text-center";
                aTrash.href = "";
                aTrash.addEventListener("click", (event) => {removeMod(idname);}); /* https://developer.mozilla.org/fr/docs/Web/API/Element/click_event#javascript */
                aTrash.className = "col col-2";
            aTrash.appendChild(spanTrash);
        div10.appendChild(aTrash);
    
        panierSideList.appendChild(pModName);

        panierSideList.appendChild(div10);
    }
    
}


generatePanier();