var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  console.log(window.location.search);

  if (window.location.search == ""){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "?hunt=sahil"){

    window.location.replace(
      'https://github.com/Sandhu-Sahil',
    )
    return;

  } else if (window.location.search == "?hunt=vishesh"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "?hunt=tanay"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "?hunt=sanat"){

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
