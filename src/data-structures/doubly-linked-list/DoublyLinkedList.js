import Comparator from "../../utils/comparator/Comparator"
import DoublyLinkedListNode from "./DoublyLinkedListNode"
export default class DoublyLinkedList {
    /**
     * @param {Function} [comparatorFunction]
     * */

    constructor(comparatorFunction) {

        /**@var DoublyLinkedListNode*/
        this.head = null;

        /**@var DoublyLinkedListNode*/
        this.tail = null;

        this.compare = new Comparator(comparatorFunction)
    }



    /**
    * @param {*} value
    * @return {DoublyLinkedList}
    */

    prepend(value) {
        // Make new node to be a head.
        const newNode = new DoublyLinkedListNode(value, this.head);

        // If there is head, then it won't be head anymore.
        // Therefore, make its previous reference to be new node (new head)
        // Then mark the new node as head.

        if (this.head) {
            this.head.previous = newNode;
        }
        this.head = newNode;


        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }


    /**
     * @param {*} value
     * @return {DoublyLinkedList}  
     * */
    append(value) {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;

        newNode.previous = this.tail;
        this.tail = newNode;
        return this;

    }



    /**
     * @param {*} value
     * @return {DoublyLinkedListNode}
     * */


    delete(value) {
        if (!this.head) {
            return null
        }


        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (this.compare.equal(currentNode.value, value)) {
                deletedNode = currentNode;

                // If head is going to be deleted
                if (deletedNode === this.head) {

                    // set head to the second node, which will become new head
                    this.head = deletedNode.next;
                    // if head remains not null, means there are more than 1 node in the list 
                    if (this.head) {
                        this.head.previous = null
                    }

                    // If all the nodes in list has the same value that is passed as argument
                    // then all nodes will get deleted, therefore tail needs to be updated

                    // We have reached here because else condition will not run if we find the first element as the to delete element
                    // if we find the first element as to delete element then we are making our 2nd element as head
                    // Now in the 2nd loop we will find that new head is also the element that needs to be deleted
                    // and so on we will reach till the tail if all element are the same element that needs to be deleted
                    // if we reach to the tail from here then the else if condition will not run so we will also neeed to handle the case of tail here also
                    // that's why we are checking here that the deleted node is tail
                    if (deletedNode === this.tail) {
                        this.tail = null
                    }

                    // IF tail is going to be deleted
                } else if (deletedNode === this.tail) {

                    // set tail to the second last node, which will become new tail
                    this.tail = deletedNode.previous;
                    this.tail.next = null


                    // If somewhere from between node to be deleted
                } else {
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;

                }


            }

            currentNode = currentNode.next;
        }

        return deletedNode;

    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {DoublyLinkedListNode}
     * */

    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null
        }

        let currentNode = this.head;

        while (currentNode) {
            // If callback is specified then try to find node by callback
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            // If value is specified then try to compare by value..

            if (value != undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null
    }

    /**
     * @return {DoublyLinkedListNode}
     * */


    deleteTail() {
        if (!this.head) {
            return null
        }

        if (this.head === this.tail) {
            const deletedTail = this.tail;

            this.head = null;
            this.tail = null;
            return deletedTail
        }

        const deletedTail = this.tail;

        this.tail = this.tail.previous;
        this.tail.next = null;
        return deletedTail;
    }

    /**
     * @return {DoublyLinkedListNode}
     * */

    deleteHead() {
        if (!this.head) {
            return null
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null
        } else {
            this.head = null;
            this.tail = null
        }

        return deletedHead
    }


    /**
     * @return {DoublyLinkedListNode[]}
     * */

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next;
        }

        return nodes;

    }

    /**
     * @param {*[]} values - Array of values that need to be converted to linked list.
     * @return {DoublyLinkedList}
     * */


    fromArray(values) {
        values.forEach(value => this.append(value))
        return this;
    }

    /**
     * @param {function} [callback]
     * @return {string}
     * */

    toString(callback) {
        return this.toArray().map((node) => node.toString(callback)).toString()
    }

    /**
     * Reverse a linked list.
     * @returns {DoublyLinkedList}
     * */

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;


        while (currNode) {
            // Store next node
            nextNode = currNode.next;
            prevNode = currNode.previous;

            // Change next node of the current node so it would link to previous node.
            currNode.next = prevNode;
            currNode.previous = nextNode;


            // Move prevNode and currNode nodes one step forward
            prevNode = currNode;
            currNode = nextNode;

        }

        // resert head and tail
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }


}