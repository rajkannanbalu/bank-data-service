class UserTest {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get nameValue() {
    console.log(this._name);
      return this._name;
    }
  
    set name(value) {
        console.log("Setting " + value);
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }