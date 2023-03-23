// First Labour : Heracles vs Nemean Lion
const Fighter = require("./src/Fighter");

const heraclette = new Fighter("🧔 Heracles", 20, 6);
const simba = new Fighter("🦁 Nemean Lion", 11, 13);

// use your Figher class here
console.log(`${heraclette.name} have ${heraclette.life} life points 💙`);
console.log(`${simba.name} have ${simba.life} life points 💙`);

let round = 1;

do {
  console.log(`🕛 Round #${round}`);
  heraclette.fight(simba);
  if (simba.isAlive()) simba.fight(heraclette);
  round++;
} while (heraclette.isAlive() && simba.isAlive());

// ternaire qui renvoi un objet avec le bon looser / winner. On l'assigne en déstructuration à la sortie
const { winner, looser } = heraclette.isAlive()
  ? { looser: simba, winner: heraclette }
  : { looser: heraclette, winner: simba };
// grâce à la méthode plus haut, on peut n'écrit qu'une seul fois le code si dessous.
console.log(`💀 ${looser.name} is dead`);
console.log(`🏆 ${winner.name} wins (${winner.life} 💙)`);

/*
if (heraclette.life === 0) {
  console.log(`💀 ${heraclette.name} is dead`);
  console.log(`🏆 ${simba.name} wins (${simba.life} 💙)`);
} else {
  console.log(`💀 ${simba.name} is dead`);
  console.log(`🏆 ${heraclette.name} wins (${heraclette.life} 💙)`);
}
*/
