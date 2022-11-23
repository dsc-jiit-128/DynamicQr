var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  window.location.replace(
    'https://forms.gle/CP4MVpQMAKKx4kNj9',
  )
}

setTimeout(() => {
  redirect()
}, 5633)
