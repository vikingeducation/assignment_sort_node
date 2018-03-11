def bubble_sort(arr)
  max_iterations = arr.length - 1
  swap_counter = 1

  while swap_counter > 0
    swap_counter = 0
    arr.each_with_index do |num, i|
      arg1 = i
      arg2 = i + 1
      if arr[arg2] != nil && num > arr[arg2]
        arr[arg1], arr[arg2] = arr[arg2], arr[arg1]
        swap_counter += 1
      end
    end
    p arr
  end
end

arr = [6, 5, 3, 1, 8, 7, 2, 4]
bubble_sort(arr)

# output
# [5, 3, 1, 6, 7, 2, 4, 8]
# [3, 1, 5, 6, 2, 4, 7, 8]
# [1, 3, 5, 2, 4, 6, 7, 8]
# [1, 3, 2, 4, 5, 6, 7, 8]
# [1, 2, 3, 4, 5, 6, 7, 8]
# [1, 2, 3, 4, 5, 6, 7, 8]
