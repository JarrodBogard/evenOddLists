let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
const addWord = ""

function updateWord(element) {
    usersWord = element.value
    
    console.log(usersWord)
}

function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    if(usersWord.length % 2 === 0) {
        addWord = document.createTextNode(usersWord)
    //   } else {
    //     /*put word in odd list*/
    //     oddList.appendChild(newListItem)
    //   }
    
    oddList.appendChild(newListItem)

    usersWord = ""
    document.getElementById("even-odd-form").reset()
    handleSubmit()
}

// document.getElementById('add').onclick = () => {
//     document.location.addWord();
//  }