# Insertion

## Blog

### Algorithm Overview:

The Insertion Sort algorithm works by iteratively building a sorted subarray within the original array. It starts with an empty "sorted" array and gradually inserts each element from the input array into the appropriate position in the "sorted" array. The algorithm performs the following steps:

Initialize an empty "sorted" array.
Iterate over each element in the input array.
Insert the current element into the correct position in the "sorted" array.
Return the "sorted" array.
Step-by-Step Example:
To better understand how the Insertion Sort algorithm works, let's step through an example using the input array [8, 4, 23, 42, 16, 15]. We will visualize the state of the "sorted" array after each iteration.

#### Step 1:

- Initially, the "sorted" array is empty.
- sorted: []

#### Step 2:

- Insert 8 into the "sorted" array.
- sorted: [8]

#### Step 3:

- Insert 4 into the "sorted" array.
- sorted: [4, 8]

#### Step 4:

- Insert 23 into the "sorted" array.
- sorted: [4, 8, 23]

#### Step 5:

- Insert 42 into the "sorted" array.
- sorted: [4, 8, 23, 42]

#### Step 6:

- Insert 16 into the "sorted" array.
- sorted: [4, 8, 16, 23, 42]

#### Step 7:

- Insert 15 into the "sorted" array.
- sorted: [4, 8, 15, 16, 23, 42]

 The final sorted array is [4, 8, 15, 16, 23, 42].
