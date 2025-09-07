  for (var count = 0; count < 3; count++) {
    ;(function (i) {
      setTimeout(function () {
        console.log(i)
      }, 1000)
    })(count)
  }