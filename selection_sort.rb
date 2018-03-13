require 'pry'

def selection_sort(arr)
  max_iterations = arr.size - 1

  # do this action once for every item in the array
  max_iterations.times do |i|
    p arr
    # move the last sorted index indicator to the latest-added num
    last_sorted_index = i

    # create the range of available indices for inspection
    (i + 1).upto(max_iterations) do |current_index|
      # i don't understadn this part
      last_sorted_index = current_index if arr[current_index] < arr[last_sorted_index]
    end

    # i don't understadn this part
    arr[i], arr[last_sorted_index] = arr[last_sorted_index], arr[i] if last_sorted_index != i
  end
  p arr
end

selection_sort([23, 42, 4, 16, 8, 15])
