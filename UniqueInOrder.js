/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder = function(iterable){
    const array = iterable.split("");
    array.map((e, i) => {
        console.log(i);
        console.log(array)
        console.log(e, array[i+1]);
        if(e === array[i+1])
            array.splice(i, i+1);
    });
};

uniqueInOrder('AAAABBBCCDAABBB');