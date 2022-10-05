var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  window.location.replace(
    'https://gdsc.community.dev/events/details/developer-student-clubs-jaypee-institute-of-information-technology-sector-128-noida-presents-compose-camp-session-1-history-of-android-development-kotlin-fundamentals/',
  )
}

setTimeout(() => {
  redirect()
}, 5633)
