// FIFO
function queue() {
    this.dataStore = [];

    this.print = () => {
        return this.dataStore;
    }

    this.enqueue = (element) => {
        this.dataStore.push(element)
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

    this.isEmpty = () => {
        return this.dataStore.length === 0
    }
}