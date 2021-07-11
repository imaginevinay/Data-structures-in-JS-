// set DS => FILO

function mySet() {
    this.dataStore = [];
    
    this.has = (element) => {
        return this.dataStore.indexOf(element) !== -1
    }

    this.values = () => {
        return this.dataStore;
    }

    this.add = (element) => {
        if(!this.has(element)) {
            this.dataStore.push(element);
            return true;
        }
        return false
    }

    this.remove = (element) => {
        if(this.has(element)) {
            this.dataStore.splice(this.position(element), 1);
            return true;
        }
        return false;
    }

    this.size = () => {
        return this.dataStore.length;
    }

    this.union = (otherSet) => {
        // return [...this.dataStore, ...otherSet]
        let union = new mySet();
        this.dataStore.forEach(e => union.add(e));
        otherSet.forEach(e => union.add(e));
        return union;
    }

    this.intersection = (otherSet) => {
        let intersect = new mySet();
        this.dataStore.forEach(e => {
            if(otherSet.has(e)) {
                intersect.add(e);
            }
        })
        return intersect;
    } 

    this.difference = (otherSet) => {
        let diff = new mySet();
        this.dataStore.forEach(e => {
            if(!otherSet.has(e)) {
                diff.add(e);
            }
        })
        return diff;
    } 

    this.subset = (otherSet) => {
        return this.dataStore.every(e => otherSet.has(e))
    }
}


var setA = new mySet();  
var setB = new mySet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());


// functionality present in es6 sets

var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));