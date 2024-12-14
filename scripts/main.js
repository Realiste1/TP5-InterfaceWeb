function updateModCount(){
    try{
        let curStorage = Array(sessionStorage.getItem("modList"));
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

        console.log("%c[MODCOUNT]", "color: lime; background: #664400");
        console.log(curStorage);
        document.getElementById("amtMods").innerText = curStorage.length;
    }catch{
        console.warn("Modlist est vide, j'ignore le nombre de mods!");
    }
}

updateModCount();