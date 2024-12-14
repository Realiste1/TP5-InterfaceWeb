


function downloadLoaderChange(){
    document.getElementById("downloadVersionList").classList.remove("d-none");
}
function downloadVersionChange(){
    document.getElementById("downloadButton").disabled = false;
}


function downloadMod(){
    const form = document.getElementById("formDownload");
    let curStorage = Array(sessionStorage.getItem("modList"));
    const mod = window.location.href.split("#")[1]; /* Trouver le mod depuis l'anchor (#) de l'url */



    let valid = true
    /* https://stackoverflow.com/questions/60623126/how-to-allow-code-to-continue-executing-after-error-js */
    try{ /* Utiliser le try/catch/finally pour eviter que les erreurs de premiere generation fait tout planter */
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
        /* check si le mod est deja present */
        for(let i=0;i<curStorage.length;i++){
            let curMod = "";
            for(let j=0;j<curStorage[i].length;j++){
                if(curStorage[i][j]=="|"){
                    if(curMod == mod){
                        console.warn("Mod deja present");
                        valid =false
                        return; /* apparament return dans un try envoi l'execution dans le finally.... */
                    }
                }else{
                    curMod+=curStorage[i][j];
                }
            }
        }
    }catch{console.warn("Donnee non existante")}finally{
        if(!valid){
            document.getElementById("downloadButton").innerHTML = "<span class=\"bi bi-bag-x\"></span> Mod déjà ajouté.";
            return
        }

        /* Ajouter le nouveau mod */
        curStorage.push(mod + "|" + form.downloadLoaderList.value + "|" + form.downloadVersionList.value);

        if(curStorage[0] == null){
            curStorage.shift();
        }

        console.log(curStorage);
        sessionStorage.setItem("modList", curStorage);
        console.log("SessionStorage: " + sessionStorage.getItem("modList"));
        document.getElementById("downloadButton").innerHTML = "<span class=\"bi bi-bag-check\"></span> Mod ajouté.";
    }
}