let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

oddList.style.listStyle = "none"
evenList.style.listStyle = "none"
// oddList.classList.add("oddContainer")

function updateWord(element) {

    usersWord = element.value
    console.log(usersWord)
}

function handleSubmit() {
    if (usersWord.length <= 0) {
        window.alert("must enter value")
        return
    }

    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    console.log(oddList, evenList)
    console.log(newListItem)
    console.log(usersWord.length)

    if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
      } else {
        oddList.appendChild(newListItem)
      }

    console.log(evenList)

    usersWord = ""
    document.getElementById("even-odd-form").reset()

}

// document.getElementById('add').onclick = () => {
//     document.location.addWord();
//  }