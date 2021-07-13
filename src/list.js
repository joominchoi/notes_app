class List {
  constructor() {
    this.notes = new Array;
  }

  insertNote(note) {
    this.notes.unshift(note);
  };

  shortenNotesArray() {
    const shortenedArray = this.notes.map(note => (note.text.slice(0, 20)))
    return shortenedArray;
   };

  displayNotes() {
    let shortenedArray = this.shortenNotesArray()
    for (let i = 0 ; i < shortenedArray.length ; i++ ) {
      return (shortenedArray[i])
    }
  };

  displayNote(id) {
    return this.notes[id].text
  }
};


// displayNotes() {
  //   for (let i = 0 ; i < this.notes.length ; i++ ) {
  //     return (this.notes[i].text)
  //   }
  // };