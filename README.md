# assignment_sort_node

Insertion and Merge Sort assignment

[Anne Richardson](https://github.com/lortza)

Includes sort algorithms in ruby for:

- *Insertion Sort:* Insertion sort builds a sorted side (left side) of the array by looking at the next element in the array and placing it in the correct location in relation to the other sorted items on the left side. The intelligence in this sort comes from knowing that the left side is already sorted.
- *Selection Sort:* Selection sort build a sorted array by iterating over the array and moving the smallest number into position in the sorted side (left side). The intelligence in this sort comes from finding the lowest value of the unsorted portion and then inserting it after the lowest value of the sorted portion.
- *Bubble Sort:* Bubble sort iterated over an array, comparing 2 consecutive numbers at a time, switching the lower number to the left side of that pair. Generally, this is the slowest algorithm.
- *Merge Sort:* Merge sort divides an array into multiple arrays of pairs. Once parsed out, the mini arrays are merged together, making arrays of 4, 8, 16, etc by comparing the lowest values of each array.
