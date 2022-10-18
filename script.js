function affichage_cartes(){
    //image = []
    
        for(let i = 1; i < 53; i++){
            let img = document.createElement("img")
            img.src = "images/"+i+".png";
            img.setAttribute("width", "100")
            img.setAttribute("height", "100")        
            document.getElementById("etat").appendChild(img)
       // return img
    }
   
}

function brassage(){
    let img = document.createElement("img")
    img.src = "images/"+i+".png";
    let ensemble_cartes = img.length
    let index =ensemble_cartes.indexOf(img);
    let moitie1 = ensemble_cartes.slice(0,index);
    let moitie2 = ensemble_cartes.slice(index + 1);
   
   }
   
    for (let e = 0; i < ensemble_cartes.length /2; e++) {
      paquet.push(moitie1[e]);
      paquet.push(moitie2[e]);
    }
    