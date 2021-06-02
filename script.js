/* Geen argument 
const muurVerven = function () {
   console.log ("De muur is rood geverfd"); 
};

muurVerven ();
*/





/* één argument 
const muurVerven = function (kleur) {
    console.log ("De muur is " + kleur + " geverfd.");

};

const woonkamer = "groen";
const slaapkamer = "aubergine";

muurVerven (woonkamer);
muurVerven (slaapkamer);
*/

/* één argument 
const muurVerven = function (kleur) {
    console.log ("De muur is " + kleur + " geverfd.");

};

muurVerven ("groen");
muurVerven ("aubergine");
*/







/* meerdere arguments  */
const muurVerven = function (plaats, kleur) {
    console.log ("De " + plaats + " muur is " + kleur + " geverfd.");
    console.log ("De " + plaats + " muur is " + kleur + " geverfd.");
};

muurVerven ("noord", "aubergine");
muurVerven ("zuidoostelijke", "groen");