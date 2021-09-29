// Soldier
class Soldier {
  constructor(health, strenght) {
    this.health = health
    this.strenght = strenght
  }
  attack () {
    return this.strength;
  }
  receiveDamage (thedamage) {

     return `${thedamage}`
  }
};


// Viking
class Viking extends Soldier {
  constructor(name, health, strenght) {
    this.name = name
    this.health = health
    this.strenght = strenght
  }

  
  receiveDamage (thedamage) {
    this.health -= thedamage

  return `${thedamage}`
  } 
  batlleCry() {
  return "Odin Owns You All!" 
  }
}


// Saxon
class Saxon extends Soldier {
  this.health = health
  this.strenght = strenght
} 
attack () {
  return this.strength;
}
receiveDamage (thedamage) {
  this.health -= thedamage 

};


// War
class War {
  constructor(addViking(), addSaxon(), vikingAttack(), saxonAttack(), showStatus()) {

    // addViking()
    // addSaxon()
    // vikingAttack()
    // saxonAttack()
    // showStatus()

    War () {
      vikingArmy = 
    }

  }


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
