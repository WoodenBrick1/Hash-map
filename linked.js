export class Linkedlist {

    constructor () {
        this.head = null;
        this.tail = null;
    }

    append (key, value) {
    

        const node = new Node();
        node.value = value;
        node.key = key;

        if (!this.head) { this.head = node;}
        if (this.tail) { this.tail.nextNode = node;}

        this.tail = node;
    }

    prepend (key, value) {

        const node = new Node();
        node.value = value;
        node.key = key;


        if (this.head) { node.nextNode = this.head;}

        this.head = node;

        if (!this.tail) { this.tail = node;}

    }

    size () {
        let currentNode = this.head;
        let nodes = 0;
        while (currentNode) {
            nodes++;
            currentNode = currentNode.nextNode;
        }
        return nodes;
    }

    head () { return this.head };
    tail () { return this.tail };

    at (index) {

        if (index < 0) {  return null; }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) { 
            if (!currentNode) {return null};
            currentNode = currentNode.nextNode; 
        }
        
        return currentNode;
    }

    pop () {
        let currentNode = this.head;

        if (!currentNode ) {return};

        while (currentNode.nextNode != this.tail && currentNode != this.tail) {
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = null;
        this.tail = currentNode;
    }

    contains (value) {
        let currentNode = this.head;
        
        while (currentNode) {
            if (currentNode.value == value) {return true};
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find (value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value == value) {return index};
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString () {
        let currentNode = this.head;
        let string = "";
        while (currentNode) {
            
            string += `${( currentNode.value )} => `
            currentNode = currentNode.nextNode;
        }
      string += "null";
        return string;
    }

    insertAt (index, value) {

        const previous = this.at(index - 1);
        const next = this.at(index);

        if (!next) {
            this.append(value);
            return;
        }

        if (!previous) {
            this.prepend(value);
            return;
        }
     
        const node = new Node();
        node.value = value;

        previous.nextNode = node;
        node.nextNode = next;
    }

    removeAt (index) {
        const next = this.at(index + 1);
        const previous = this.at(index - 1);

        if (!next) {
            this.pop();
            return;
        }

        if (!previous) {
            this.head = next;
            return;
        }

        previous.nextNode = next;
    }

    
    changeValue(index, value) {
        this.at(index).value = value;
    }

    findKey (key) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.key == key) {return index};
            currentNode = currentNode.nextNode;
            index++;
        } 
        return null;
    }
}

class Node {
    constructor (){
        this.key = null;
        this.value = null;
        this.nextNode = null;
    }
}