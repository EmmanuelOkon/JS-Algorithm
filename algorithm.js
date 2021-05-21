function convertFahrToCelsius(x) {
  if (isNaN(x)) {
    let typeOfData = typeof x;
    if (typeOfData === "object") {
      if (Array.isArray(x)) {
        typeOfData = "array";
      } else {
        x = JSON.stringify(x);
        typeOfData = typeOfData;
      }
    }
    return `${x} is not a number but a/an ${typeOfData}`;
  }
  const converted = ((x - 32) / 1.8).toFixed(4);
  return `${converted} deg C`;
}

console.log(convertFahrToCelsius(0));


function checkYuGiOh (n) {
  const number = n;
  const inputNumber = JSON.stringify(number)
  let i = 1;
  let newArr = []

  if (typeof number === "number") {
      for (i; i <= number; i++) {
          let statement = "";

          if (i % 2 === 0) statement = "yu";
          if (i % 3 === 0) statement = "gi";
          if (i % 5 === 0) statement = "oh";
          if (i % 2 === 0 && i % 3 === 0) statement = "yu-gi";
          if (i % 3 === 0 && i % 5 === 0) statement = "gi-oh";
          if (i % 2 === 0 && i % 5 === 0) statement = "yu-oh";
          if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) statement = "yu-gi-oh";

          if (statement) newArr.push(statement);
          else newArr.push(i);

      }
      return console.log(newArr);
  } else if (typeof number === "string") {
      const inputData = Number(number);
      if (inputData.toString().match(/^[a-zA-Z() ]+$/)) {
          return console.log(`Invalid parameter: ${inputNumber}`)
      }
      else {
          for (i; i <= number; i++) {
              let statement = "";

              if (i % 2 === 0) statement = "yu";
              if (i % 3 === 0) statement = "gi";
              if (i % 5 === 0) statement = "oh";
              if (i % 2 === 0 && i % 3 === 0) statement = "yu-gi";
              if (i % 3 === 0 && i % 5 === 0) statement = "gi-oh";
              if (i % 2 === 0 && i % 5 === 0) statement = "yu-oh";
              if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) statement = "yu-gi-oh";

              if (statement) newArr.push(statement);
              else newArr.push(i);
          }
      }
      return console.log(newArr);
  }
  else {
      return console.log(`invalid parameter: ${inputNumber} `)
  }
}

console.log(checkYuGiOh(100));