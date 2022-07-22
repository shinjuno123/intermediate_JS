//JS Object
// When you make a single object
var houseKeeper = {
    name : "shin",
    age : 24,
    hasWorkPermit : true,
    cleaningRepertoir : ["bathroom","bedroom"]
}

//JS Object
// When you want to include a method in an object
var houseKeeper = {
    name : "shin",
    age : 24,
    hasWorkPermit : true,
    cleaningRepertoir : ["bathroom","bedroom"],
    clean : function(){
        alert("cleaning in progress");
    }
}



// Constructor Function
// When you want to make many objects in a frame( a factory of object)
// First word of First Letter has to be capitalized in this function
function HouseKeeper(name, age, hasWorkPermit, cleaningRepertoir){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.cleaningRepertoir = cleaningRepertoir;
}

// Constructor Function
// when you want to include a method in constructor function
function HouseKeeper(name, age, hasWorkPermit, cleaningRepertoir){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.cleaningRepertoir = cleaningRepertoir;
    this.clean = function(){
        alert("cleaning in progress");
    }
}

// Create new objects from a Constructor Function.
var houseKeeper1 = new HouseKeeper("kim",105,true,["bathroom","livingroom"]);
var houseKeeper2 = new HouseKeeper("kang",10,true,["bathroom","livingroom"]);


// Call a method from an object 
houseKeeper1.clean();