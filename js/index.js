window.button = []

document.addEventListener("keypress", ev => {
  window.button.push(ev.key)
  console.log(window.button)
  if (window.button.join('').toLowerCase().indexOf("stoleon") + 1) {
    document.body.style.backgroundImage = "url(./engtganz.png)"
    document.body.style.backgroundColor = "#fff"
    document.getElementById("iceberg").style.display = "none"
  }
})