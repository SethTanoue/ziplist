function zipList(list1, list2) {
  const combine = [];
  for (let i = 0; i < list2.length; i++) {
    combine.push(list1[i], list2[i]);
  }
  return combine;
}
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));
