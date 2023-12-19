let nameLst:string[] = new Array("fishda", "H2O","lahatNgKlase10","COJ","kekw","Tikoymasarap","kangkong chips","Book","Majin Buu","Gg","Tito Boyet","Bogart","kopi","uwianna","Bigblackhawk","kamote","Milk Tea","chalahedchala","Polaris Express");
let test = ["1" , "2", "3"];
let j = 0;
let collision = true;


function random(arr_nameLst:string[], collision){
    if(!collision){
        for(let i = arr_nameLst.length-1; i > 0 ; i--){
            j = Math.floor(Math.random() *(i + 1));
            [arr_nameLst[i], arr_nameLst[j]] = [arr_nameLst[j], arr_nameLst[i]];  
        }
    }  else {
        for(let i = arr_nameLst.length-1; i > 0 ; i--){
            do {
                j = Math.floor(Math.random() * (i + 1)); 
            } while (i == j); 
        [arr_nameLst[i] , arr_nameLst[j]] = [arr_nameLst[j], arr_nameLst[i]];  
    }
}
    for(let i = 0; i < arr_nameLst.length; i++){
    console.log(arr_nameLst[i]);
    }
} 

random(nameLst, true);