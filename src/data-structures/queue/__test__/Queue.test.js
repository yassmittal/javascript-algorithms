import Queue from '../Queue';

describe("Queue", () => {
    it("should create empty queue", () => {
        const queue = new Queue();
        expect(queue).not.toBeNull();
        expect(queue.linkedList).not.toBeNull()
    })


    it("should enqueue data to queue", () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.toString()).toBe("1,2")
    })
})