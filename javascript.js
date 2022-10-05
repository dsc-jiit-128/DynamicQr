var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  window.location.replace(
    'https://dsc-jiit-128.github.io/DynamicQr/',
  )
}

setTimeout(() => {
  redirect()
}, 5633)
