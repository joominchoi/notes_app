document.addEventListener("DOMContentLoaded", () => {
  const list = new List();
  let noteNum = 1;

  document.querySelector('#note').addEventListener('submit', (event) => {
    event.preventDefault();
    const noteText = document.querySelector('#note-text').value;
    emojify(`${noteText}`, emojiNote);
  })

  document.querySelector('#clear-notes').addEventListener('click', () => {
    localStorage.clear()
    location.reload();
  })

  const emojify = (emojiText, emojiNote) => {
    const data = { text: `${emojiText}` };
    var jsonObj;
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => jsonObj = data)
    .then(() => emojiNote(jsonObj))
  }

  const emojiNote = (jsonObj) => {
  let noteText = jsonObj.emojified_text;
  saveToStorage(`#note-${noteNum.toString()}`, noteText);
  note = new Note();
  note.createNote(noteText);
  list.insertNote(note);
  createNoteElement();
  classEventListener();
  document.querySelector(`#note-${noteNum.toString()}`).innerText = list.displayNotes();
  document.querySelector((`#note-${noteNum.toString()}-full`)).innerText = list.displayNote(0);
  noteNum ++;
  }

  const createNoteElement = () => {
    let newDiv = document.createElement('div');
    let newButton = document.createElement('button');
    newButton.id = (`note-${noteNum.toString()}`);
    newButton.className = ('accordion');
    newDiv.appendChild(newButton);
    let newDivTwo = document.createElement('div');
    newDivTwo.id = (`note-${noteNum.toString()}-full`);
    newDivTwo.className = ('panel');
    let emptyP = document.createElement('p');
    newDivTwo.appendChild(emptyP);
    newDiv.appendChild(newDivTwo);
    let container = document.querySelector('.grid-container');
    container.insertAdjacentElement('beforeend', newDiv);
  }

  const saveToStorage = (noteNum, noteText) => {
    localStorage.setItem(noteNum, noteText)
  }

  const loadNotes = () => {
    for (let i = 0; i < localStorage.length ; i++ ) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      note = new Note();
      note.createNote(value);
      list.insertNote(note);
      createNoteElement();
      classEventListener();
      document.querySelector(`#note-${noteNum.toString()}`).innerText = list.displayNotes();
      document.querySelector((`#note-${noteNum.toString()}-full`)).innerText = list.displayNote(0);
      noteNum ++;
    }
  }

  const classEventListener = () => {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("mouseover", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  loadNotes();

})

// - Save each note as a key value pair when created to local storage, note1 : noteText
// - On start up of script it should loop through each note in the storage and create a html element for each one
// - increase NoteNum

// document.querySelector('#note').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const noteText = document.querySelector('#note-text').value;
//   // note = new Note();
//   // note.createNote(noteText);
//   // list.insertNote(note);
//   // createNoteElement();
//   // classEventListener();
//   // document.querySelector(`#note-${noteNum.toString()}`).innerText = list.displayNotes();
//   // document.querySelector((`#note-${noteNum.toString()}-full`)).innerText = list.displayNote(0);
//   // noteNum ++;
// })


