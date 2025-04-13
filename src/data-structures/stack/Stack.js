import LinkedList from "../linked-list/LinkedList"

export default class Stack {
    constructor() {
        // We're going to implement Stack based on LinkedList
        // Since these structures are quire similar.
        // Compare push/pop operations of the  Stack with prepend/deleteHead 
        // operations of LinkedList.

        this.linkedList = new LinkedList()
    }


    /**
     * @return {boolean}
     * */

    isEmpty() {
        // The stack is empty if its linked list doesn't have a head.
        return (!this.linkedList.head)
    }


    /**
     * @return {*}
     * */

    peek() {
        if (this.isEmpty()) {
            // If the linked list is empty then there is nothing to peek from.
            return null
        }

        // Just read the value from the start of the linked list without deleting it.
        return this.linkedList.head.value;

    }

    /**
     * @param {*} value
     * */


    push(value) {
        // Pushing means to lay the value on the top of stack. Therefore let's just add the new value at the start of the linked list.
        this.linkedList.prepend(value);
    }

    /**
     * @return {*}
     * */

    pop() {

        // Let's try to delete the first node (the head) from the linked list.
        // If there is no head (the linked list is empty) just return null
        const removedHead = this.linkedList.deleteHead()
        return removedHead ? removedHead.value : null
    }

    /**
     * @return {*[]}
     * */

    toArray() {
        return this.linkedList.toArray().map((linkedlistNode) => linkedlistNode.value)
    }


    /**
     * @param {function} [callback]
     * @return {string}
     * */

    toString(callback) {
        return this.linkedList.toString(callback)
    }

}