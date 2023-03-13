var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  window.location.replace(
    'https://chat.whatsapp.com/EfJPqRp2Wf4A4LfIgX6Ysr',
  )
}

setTimeout(() => {
  redirect()
}, 5633)
