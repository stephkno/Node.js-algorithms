export function binarySearch(list, search){
  list = list.sort(function(a, b){
    return a - b
  })
  //get start index
  var low = 0
  var high = list.length
  var mid

  while(list[mid] != search){
    mid = Math.floor(low + (high-low)/2)

    if(low > high || low == high){
      return false
    }
    if(search > list[mid]){
      low = mid+1
      continue
    }
    if(search < list[mid]){
      high = mid-1
      continue
    }
  }
  //item has been found
  return true
}
