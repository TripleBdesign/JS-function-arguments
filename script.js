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





/* meerdere arguments */
const muurVerven = function (kleur, plaats) {
    console.log ("De " + plaats + " muur is " + kleur + " geverfd.");
    console.log ("De " + plaats + " muur is " + kleur + " geverfd.");
};

const kleurcode = ("oranje", "aubergine");
const plaatscode = ("noord", "zuidoostelijke");

muurVerven (kleurcode, plaatscode);
