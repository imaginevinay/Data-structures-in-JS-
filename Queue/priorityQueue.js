function PriorityQueue() {
    this.dataStore = [];
    
    this.isEmpty = () => {
        return this.dataStore.length === 0
    }
    
    this.enqueue = (element) => {
        if(this.isEmpty()) {
            this.dataStore.push(element)
        } else {
            let added = false;
            for(let i = 0; i < this.dataStore.length; i++) {
                if(element[1] < this.dataStore[i][1]) {
                    this.dataStore.splice(i, 0 , element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.dataStore.push(element)
            }
        }
    }

    this.dequeue = () => {
        return this.dataStore.shift();
    }

    this.front = () => {
        return this.dataStore[0]
    }

    this.size = () => {
        return this.dataStore.length;
    }

    this.printCollection = () => {
        console.log(this.dataStore);
    };
}


var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();