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




    }








}