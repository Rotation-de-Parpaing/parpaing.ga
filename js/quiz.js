
function getAnswers() {
  let answers = ""
  for (i=0;i<8;i++) {
    document.getElementById('q'+(i+1) + "-outer").style.borderColor = "rgb(88, 88, 88)"
    let e = 0
    for (j=0;j<document.getElementById('q'+(i+1)).children.length;j++) {
      if (document.getElementById('q'+(i+1)).children[j].tagName == "LABEL") {
        if (document.getElementById('q'+(i+1)).children[j].children[0].checked) {
          answers += (4-e).toString()
          break;
        }
        e++
        if (e==4) {
          document.getElementById('q'+(i+1) + "-outer").style.borderColor = "red"
        }
      }
    }
  }
  return answers
}

document.getElementById('submit').addEventListener("click", async (ev) => {
  if (document.getElementById("result-img")) {
    document.getElementById("result-img").remove()
  }
  if (document.getElementById("result-text")) {
    document.getElementById("result-text").remove()
  }
  ev.preventDefault()
  let answers = getAnswers()
  if (answers.length != 8) return;
  let res = await (await fetch("https://parpaing-bot.thatcookie.repl.co/website/quiz?quiz=" + answers)).text()
  if (res == "error") {
    for (i=0;i<8;i++) {
      document.getElementById('q'+(i+1) + "-outer").style.borderColor = "yellow"
    }
    return;
  }
  console.log(res)
  let image = document.createElement("img")
  image.src = res
  image.id = "result-img"
  let title = document.createElement("h1")
  title.className = "title is-3 headtitle"
  title.innerText = "Vous êtes:"
  title.id = "result-text"
  document.getElementById("results").appendChild(title)
  document.getElementById("results").appendChild(image)
  return;
})