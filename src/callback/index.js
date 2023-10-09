function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2)
}

console.log(calc(5, 5, sum))

setTimeout(function () {
  console.log("Hello javascript")
}, 2000)

function gretting(name) {
  console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, "Leidys")