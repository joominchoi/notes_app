document.addEventListener("DOMContentLoaded", () => {
  const list = new List();

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  let noteNum = 1;

  document.querySelector('#note').addEventListener('submit', (event) => {
    event.preventDefault();
    const noteText = document.querySelector('#note-text').value;
    note = new Note();
    note.createNote(noteText);
    list.insertNote(note);
    document.querySelector(`#note-${noteNum.toString()}`).innerText = list.displayNotes();
    document.querySelector(`#note-${noteNum.toString()}-full`).innerText = list.displayNote(0);
    noteNum ++;
  })

  const getEmoji = () => {
    fetch('https://makers-emojify.herokuapp.com/')
    .then(function(res) {
      console.log(res);
    })
  }

  getEmoji();

})