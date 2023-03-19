var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  console.log(window.location.search);

  if (window.location.search == "/DynamicQr/"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "/DynamicQr/sahil"){

    window.location.replace(
      'https://github.com/Sandhu-Sahil',
    )
    return;

  } else if (window.location.search == "/DynamicQr/vishesh"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "/DynamicQr/tanay"){

    window.location.replace(
      'https://gdsc.community.dev/e/m6ctmp/',
    )
    return;

  } else if (window.location.search == "/DynamicQr/sanat"){

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
