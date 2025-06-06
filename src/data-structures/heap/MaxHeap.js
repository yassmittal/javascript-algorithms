import Heap from "./Heap"

export default class MaxHeap extends Heap {
  /**
   * Checks if pair of heap elements is in correct order.
   * for MinHeap the first element must be always smaller or equal
   * for MaxHeap the first element must be always bigger or equal
   * 
   * 
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   * 
   * */

  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement)
  }
}