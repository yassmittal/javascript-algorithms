import Comparator from "../../utils/comparator/Comparator"
/**
 * Parent class for Min and Max Heaps.
 * */
export default class Heap {
    /**
     * @constructs Heap
     * @param {Function} [comparatorFunction]
     * */

    constructor(comparatorFunction) {
        if (new.target === Heap) {
            throw new TypeError("cannot construct Heap instance directly");
        }

        // Array representation of the heap.
        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @param {number} parentIndex
     * @return {number}
     * */

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    /**
     * @param {number} parentIndex
     * @return {number}
    */

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    /**
     * @param {number} childIndex
     * @return {number}
     * */

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    /**
     * @param {number} childIndex
     * @return {boolean}
     * */

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     * */
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     * */
    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     * */
    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     * */
    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)]
    }

    /**
     * @param {number} childIndex
     * @return {*}
     * */
    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)]
    }

    /**
     * @param {number} indexOne
     * @param {number} indexTwo
     * */
    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    /**
     * @return {*}
     * */

    peek() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        return this.heapContainer[0]
    }

    /**
     * @return {*}
     * */
    poll() {
        if (this.heapContainer.length === 0) {
            return null;
        }
        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop()
        }

        const item = this.heapContainer[0];

        // Move the last element from the end of the head.
        this.heapContainer[0] = this.heapContainer.pop();
        // TODO: implement heapify down

        return item;
    }

    /**
     * @param {*} item
     * @return {Heap}
     * */
    add(item) {
        this.heapContainer.push(item);
        // TODO: Implement heapify up
        return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Heap}
     * */

    remove(item, comparator = this.compare) {
        // Find number of items to remove.
        const numberOfItemsToRemove = this.find(item, comparator).length;

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration++) {
            // We need to find item index to remove each time after removal since
            // indices are being changed after each heapfiy process.

            const indexToRemove = this.find(item, comparator).pop();

            // If we need to remove last child in the heap then just remove it.
            // There is no need to heapfiy the heap afterwards.

            if (indexToRemove === (this.heapContainer.length - 1)) {
                this.heapContainer.pop();
            } else {
                // Move last element in heap to the vacant(removed) position.
                this.heapContainer[indexToRemove] = this.heapContainer.pop();

                // GEt parent.
                const parentItem = this.parent(indexToRemove);

                // If there is no parent or parent is in correct order with the node
                // We're going to delete then heapify down. Otherwise heapfiy up

                if (
                    this.hasLeftChild(indexToRemove) &&
                    (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer(indexToRemove)))
                ) {
                    this.heapifyDown(indexToRemove)
                } else {
                    this.heapifyUp(indexToRemove)
                }
            }
        }

    }






}