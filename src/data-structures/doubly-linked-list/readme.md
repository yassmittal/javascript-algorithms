# Pseudocode for Basic Operations

## Insert

Add(value)
Pre: value is the value to add to the list
Post: value has been placed at the tail of the list

    n <- node(value);
    if head = %
        head <= n;
        tail <= n;
    else
        n.previous <= tail
        tail.next <= n
        tail <= n;
      end if
    end Add

## Delete

Remove(head, value)
Pre: head is the head node in the list
value is the value to remove from the list
Post: value is remove from list, true; otherwise false

    if head = %
        return false
    else if

    if value = head.value;
        if head = tail
            head = %;
            tail = %;
          else
            head <= head.next;
            head.previous <= %;
        end if
        return true;
    end if

    n <= head.next;

    while n != % and value !== n.value
      n <= n.next;
    end while;

    if n = tail;
        tail <= tail.previous;
        tail.next <= %;
        return true
      else if n != %
        n.previous.next = n.next;
        n.next.previous = n.previous;
        return true;
    end if
    return false

end Remove;

## Reverse Traversal

ReverseTraversal(tail)
Pre: tail is the node of the list to traverse
Post: the list has been traversed in reverse order

    n < tail

    while n != %;
        yield n.value;
        n <= n.previous;
    end while

end ReverseTraversal
