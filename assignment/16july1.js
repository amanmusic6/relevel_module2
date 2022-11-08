
let petrol = [10,12]; // partol in bikes of A and B
let milage = [20,15]; // milage of A and B
let haltDist = [40,98,134,179,211,248];

let distCoveredByA = petrol[0]*milage[0];
let distCoveredByB = petrol[1]*milage[1];

for(let halt=0;halt<haltDist.length;halt++){
    if(haltDist[halt]>distCoveredByA){
        console.log(halt);
        break;
    }
}
for(let halt=0;halt<haltDist.length;halt++){
    if(haltDist[halt]>distCoveredByB){
        console.log(halt);
        break;
    }
}
