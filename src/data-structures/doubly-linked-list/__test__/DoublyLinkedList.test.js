import DoublyLinkedList from '../DoublyLinkedList';


describe("DoublyLinkedList", () => {
    it("should create empty linked list", () => {
        const linkedList = new DoublyLinkedList();
        expect(linkedList.toString()).toBe("")
    })


    it("should append node to linked list", () => {
        const linkedList = new DoublyLinkedList();
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()

        linkedList.append(1)
        linkedList.append(2)

        expect(linkedList.head.next.value).toBe(2)
        expect(linkedList.tail.previous.value).toBe(1)
        expect(linkedList.toString()).toBe("1,2")
    })
})