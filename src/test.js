let arr = [{ type: "123" }, { type: "456" }, { type: "789" }];

let newArr = arr.filter((n) => {
  return n.type == "123";
});

console.log(newArr);
