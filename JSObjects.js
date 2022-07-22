// When you make a single object
var houseKeeper = {
    name : "shin",
    age : 24,
    hasWorkPermit : true,
    cleaningRepertoir : ["bathroom","bedroom"]
}


// When you want to make many objects in a frame( a factory of object)
// First word of First Letter has to be capitalized in this function
function HouseKeeper(name, age, hasWorkPermit, cleaningRepertoir){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.cleaningRepertoir = cleaningRepertoir;
}

// Create new objects from a frame of object
var houseKeeper1 = new HouseKeeper("kim",105,true,["bathroom","livingroom"]);
var houseKeeper2 = new HouseKeeper("kang",10,true,["bathroom","livingroom"]);