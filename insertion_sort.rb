require 'pry'

def insertion_sort(array)

  max_index = array.length - 1

  for unsorted_index in 0..max_index
    current_num = array[unsorted_index]
    current_num_index = unsorted_index - 1
    while current_num_index >= 0 && array[current_num_index] > current_num
      array[current_num_index + 1] = array[current_num_index]
      current_num_index = current_num_index - 1
    end
    array[current_num_index + 1] = current_num
    p array
  end

end


insertion_sort([23, 42, 4, 16, 8, 15])

# [23, 42, 4, 16, 8, 15]
# [23, 42, 4, 16, 8, 15]
# [4, 23, 42, 16, 8, 15]
# [4, 16, 23, 42, 8, 15]
# [4, 8, 16, 23, 42, 15]
# [4, 8, 15, 16, 23, 42]
