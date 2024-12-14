
function removeRemoved(curStorage){
    let newTab = [];
    for(let i=0;i<curStorage.length;i++){
        if(curStorage[i] == "" || !curStorage[i]){
            continue;
        }
        newTab.push(curStorage[i]);
    }
    curStorage = newTab;
    
    if(curStorage[0] == null){
        curStorage.shift();
    }

    sessionStorage.setItem("modList", curStorage);
}


function removeMod(modID){
    let curStorage = Array(sessionStorage.getItem("modList"));
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
    }catch{ /* ne devrais pas se passer, mais au cas ou */
        document.getElementById("emptyList").classList.toggle("d-none");
        console.warn("Panier vide!");
    }
    for(let i=0;i<curStorage.length;i++){
        let curMod = "";
        for(let j=0;j<curStorage[i].length;j++){
            if(curStorage[i][j]=="|"){
                if(curMod==modID){
                    delete curStorage[i]; /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete */
                    console.log(curStorage)
                    if(curStorage==""){
                        sessionStorage.removeItem("modList");
                        return
                    }
                    removeRemoved(curStorage);
                    return;
                }else{
                    break;
                }
            }else{
                curMod+=curStorage[i][j];
            }
        }
    }
}

function wipeAllMods(){
    sessionStorage.removeItem("modList");
    window.location.reload();
}

function confirmSelection(){
    alert("Votre modpack sera prêt à être téléchargé dans NaN années.\n\nMerci d'avoir utilisé ModCraft.");
}