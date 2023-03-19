var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  console.log(window.location.search);

  if (window.location.search == nil){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "?chase=sahil"){

    window.location.replace(
      'https://github.com/Sandhu-Sahil',
    )
    return;

  } else if (window.location.search == "?chase=vishesh"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "?chase=tanay"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "?chase=sanat"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  }

  // window.location.replace(
  //   'https://gdsc.community.dev/e/m6ctmp/',
  // )
}

setTimeout(() => {
  redirect()
}, 5633)
