import MaxHeap from "../MaxHeap"
import Comparator from "../../../utils/comparator/Comparator"

describe("MaxHeap", () => {
  it("should create an empty max heap", () => {
    const maxHeap = new MaxHeap();

    expect(maxHeap).toBeDefined()
    expect(maxHeap.peek()).toBeNull()
    expect(maxHeap.isEmpty()).toBe(true)
  })


  it("should add items to the heap and heapify it up", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe("5");

    maxHeap.add(3);
    expect(maxHeap.peek()).toBe(5)
    expect(maxHeap.toString()).toBe("5,3");

    maxHeap.add(10);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe("10,3,5")



  })


})