const input = document.getElementById("commandInput")
const output = document.getElementById("output")

// small typing sound file
const typingSoundFile = "typing.mp3"


async function boot() {

    await theMatrix("Wake up, visitor..")
    newLine()
    await theMatrix("It's Nero.")
    newLine()
    await theMatrix("known as nero404..")
    newLine()
    await theMatrix("The Matrix has you..")
    newLine()
    await theMatrix("Follow the white cat.")
    newLine()
    await theMatrix("Knock. Knock.")
    newLine()
    await theMatrix("Look behind your door.")
    await asciiArt(`
███╗   ██╗ ███████╗ ██████╗   ██████╗ 
████╗  ██║ ██╔════╝ ██╔══██╗ ██╔═══██╗
██╔██╗ ██║ █████╗   ██████╔╝ ██║   ██║
██║╚██╗██║ ██╔══╝   ██╔══██╗ ██║   ██║
██║ ╚████║ ███████╗ ██║  ██║ ╚██████╔╝
╚═╝  ╚═══╝ ╚══════╝ ╚═╝  ╚═╝  ╚═════╝ 
`)
    newLine()
    await typeLine("Booting NeroOS v3.0.404")
    await typeLine("Loading modules...")
    await typeLine("Initializing interface...")
    await typeLine("Connection established.")
    newLine()
    await typeLine("Type '/help' to see commands")
    newLine()
    await typeLine("Type '/portfolio'")
    await typeLine("to directly re-enter my portfolio!")
    newLine()

}

boot()

async function bootAfterClear() {

    await theMatrix("Don't ever..")
    newLine()
    await theMatrix("I mean EVER & NEVER !..")
    newLine()
    await theMatrix("re-think of hitting '/clear' again.")
    newLine()
    await theMatrix("or you'll face..")
    newLine()
    await theMatrix("the most serious consequences.")
    newLine()
    await theMatrix("So, Let's Start All Over Again !!")
    newLine()
    await theMatrix("I'm Nero known as nero404..")
    newLine()
    await theMatrix("Knock. Knock. Knock!")
    await asciiArt(`
███╗   ██╗ ███████╗ ██████╗   ██████╗ 
████╗  ██║ ██╔════╝ ██╔══██╗ ██╔═══██╗
██╔██╗ ██║ █████╗   ██████╔╝ ██║   ██║
██║╚██╗██║ ██╔══╝   ██╔══██╗ ██║   ██║
██║ ╚████║ ███████╗ ██║  ██║ ╚██████╔╝
╚═╝  ╚═══╝ ╚══════╝ ╚═╝  ╚═╝  ╚═════╝ 
`)
    newLine()
    await typeLine("Booting NeroOS v3.0.404")
    await typeLine("Loading modules...")
    await typeLine("Initializing interface...")
    await typeLine("Connection established.")
    newLine()
    await typeLine("Type '/help' to see commands")
    newLine()
    await typeLine("Type '/portfolio'")
    await typeLine("to directly re-enter my portfolio!")
    newLine()

}


input.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        const command = input.value.trim()

        printLine("visitor@site:~$ " + command)

        runCommand(command)

        input.value = ""

    }

})


function printLine(text) {

    const line = document.createElement("div")
    line.className = "line"
    line.textContent = text

    output.appendChild(line)

    window.scrollTo(0, document.body.scrollHeight)

}

function newLine(){

    const br = document.createElement("div")
    br.className = "line"
    br.innerHTML = "&nbsp;"

    output.appendChild(br)

}

// typing with synced sound
async function theMatrix(text) {

  const line = document.createElement("div")
  line.className = "line"

  output.appendChild(line)

  for (let char of text) {

      line.textContent += char

      // play sound exactly with character
      const sound = new Audio(typingSoundFile)
      sound.volume = 0.1
      sound.play()

      await new Promise(r => setTimeout(r, 70))

  }

  window.scrollTo(0, document.body.scrollHeight)

}

// typing with synced sound
async function asciiArt(text) {

    const line = document.createElement("div")
    line.className = "line"

    output.appendChild(line)

    for (let char of text) {

        line.textContent += char

        // play sound exactly with character
        const sound = new Audio(typingSoundFile)
        sound.volume = 0.01
        sound.play()

        await new Promise(r => setTimeout(r, 0.0000001))

    }

    window.scrollTo(0, document.body.scrollHeight)

}


// typing with synced sound
async function typeLine(text) {

    const line = document.createElement("div")
    line.className = "line"

    output.appendChild(line)

    for (let char of text) {

        line.textContent += char

        // play sound exactly with character
        const sound = new Audio(typingSoundFile)
        sound.volume = 0.05
        sound.play()

        await new Promise(r => setTimeout(r, 18))

    }

    window.scrollTo(0, document.body.scrollHeight)

}

function openPortfolio() {

    const terminal = document.getElementById("terminal-screen")
  
    terminal.style.opacity = "0"
  
    setTimeout(() => {
      document.body.style.background = "black"
      window.location.href = "index.html"
    }, 800)
  
  }

async function runCommand(cmd) {

    switch (cmd) {

        case "/help":

            await typeLine("Available commands:")
            await typeLine("/about")
            await typeLine("/contact")
            await typeLine("/portfolio")
            await typeLine("/clear")
            newLine()

            break

        case "/about":

            await typeLine("name: Nero")
            await typeLine("nickname: nero404")
            await typeLine("profession: Front-End Web Developer")
            newLine()

            break

        case "/contact":

            await typeLine("email: nero404.developer@gmail.com")
            await typeLine("phone: +961 76 134 251")
            newLine()

            break

        case "/portfolio":

            await typeLine("Access granted.")
            await typeLine("Launching portfolio interface...")
            await typeLine("")
    
            setTimeout(openPortfolio,800)
            newLine()

            break

        case "/clear":

            output.innerHTML = ""
            await bootAfterClear()
            newLine()
            break

        default:

            await typeLine("command not found")
            newLine()

    }

}
