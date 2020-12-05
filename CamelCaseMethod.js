/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
All words must have their first letter capitalized without spaces.
*/

String.prototype.camelCase = function () {
  if (this === "") return "";
  let result = "";
  this.split(" ").map((word) => {
    if (word === "") {
      return;
    }
    result += word[0].toUpperCase();
    result += word.slice(1, word.length);
  });
  return result;
};

"test case".camelCase(); //"TestCase");
