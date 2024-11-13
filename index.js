class Tree {
    constructor(species) {
      this.species = species;
    }
  
    // Static method that provides a definition for all trees

    /**
     * definition of a tree (parent class)
     * @returns string
     */
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method that provides a specific definition for Deciduous trees
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method that provides a specific definition for Evergreen trees
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  