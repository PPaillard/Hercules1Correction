/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(enemy) {
    // on prend un nombre random entre 1 et la force de l'enemi
    const randomDamage = Math.floor(Math.random() * this.strength) + 1;

    // on calcul les dommages final
    /*let finalDamage = randomDamage - enemy.dexterity;
    if(finalDamage< 0) finalDamage = 0*/
    const finalDamage = Math.max(randomDamage - enemy.dexterity, 0);

    // si les dommages sont inférieurs à 0, on met à 0
    enemy.life = Math.max(enemy.life - finalDamage, 0);
    console.log(
      `${this.name} attack ${enemy.name} doing ${finalDamage} damage.${enemy.name} have ${enemy.life} life points 💙`
    );
  }

  isAlive() {
    /*if(this.life>0) return true;
    else return false;*/
    return this.life > 0;
  }
}

module.exports = Fighter;
