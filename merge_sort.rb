require 'pry'

def merge_sort(unsorted_arr)
  unsorted_arr_length = unsorted_arr.length

  # if the array is one element long, just return it
  return unsorted_arr if unsorted_arr_length <= 1

  # divide array into halves
  index_at_half = (unsorted_arr_length / 2) -1
  left_half = unsorted_arr[0..index_at_half]
  right_half = unsorted_arr[(index_at_half + 1)..-1]

  # recursively divide the halves
  sorted_left_array = merge_sort(left_half)
  sorted_right_array = merge_sort(right_half)

  # merge the divided arrays
  merge(sorted_left_array, sorted_right_array)
end

def merge(left_half, right_half)

  # bail and return the other array if this array is empty
  return left_half if right_half.length == 0
  return right_half if left_half.length == 0

  merged_array = []

  # take the smaller number
  if left_half.first <= right_half.first
    merged_array << left_half.shift
  else
    merged_array << right_half.shift
  end

  # keep merging and adding to the merged array until
  # the return gate clauses above are met
  newly_merged_array = merge(left_half, right_half)
  merged_array + newly_merged_array
end

# arr = [3,2,4,1,5]
# arr = [6, 5, 3, 1, 8, 7, 2, 4]
arr = [4, 42, 23, 50, 16, 108, 15, 8]
p merge_sort(arr)

# sorted_array = [4, 8, 15, 16, 23, 42, 50, 108]


