const createNoteTest = () => {
  const note = new Note();

  note.createNote('Test Note');

  if (note.text === ('Test Note')) {
    return ('Create Note Test ---> Passed');
  }
  else {
    return ('Create Note Test ---> Failed');
  };
};

const insertNoteTest = () => {
  const note = new Note();
  const list = new List();

  note.createNote('Test Note');
  list.insertNote(note);
  
  if (list.notes[0].text === 'Test Note') {
    return ('Insert Note Test ---> Passed')
  }
  else {
    return ('Insert Note Test ---> Failed')
  }
};

const displayNotesTest = () => {
  const noteOne = new Note();
  const noteTwo = new Note();
  const list = new List();
 
  noteOne.createNote('Test Note One');
  noteTwo.createNote('Test Note Two');
  
  list.insertNote(noteOne);
  list.insertNote(noteTwo);
  
  if (list.displayNotes() === ('Test Note One', 'Test Note Two')) {
    return ('Display Note Test ---> Passed');
  }
  else {
    return ('Display Note Test ---> Failed');
  }
};

const shortenNotesArrayTest = () => {

  const noteOne = new Note();
  const noteTwo = new Note();
  const list = new List();
 
  noteOne.createNote('This note is over twenty characters long');
  noteTwo.createNote('This note is also over 20 chars long');
  
  list.insertNote(noteOne);
  list.insertNote(noteTwo);
  
  const shortenedArray = list.shortenNotesArray()
  
  if (shortenedArray[0].length === 20 ) {
    return ('Shorten Notes Array Test ---> Passed')
  }
  else {
    return ('Shorten Notes Array Test ---> Failed')
  }
}

const displayOneNoteTest = () => {

  const noteOne = new Note();
  const noteTwo = new Note();
  const list = new List();

  noteOne.createNote('This is a test note');
  noteTwo.createNote('This is also a test note');
  list.insertNote(noteOne);
  list.insertNote(noteTwo);
  
  if (list.displayNote(0) === ('This is also a test note')) {
    return ('Display Specific Note Test ---> Passed')
  }
  else {
    return ('Display Specific Note Test ---> Failed')
  }
}

class TestOutput {

  runCreateNoteTest = () => {
    return createNoteTest()
  }

  runInsertNoteTest = () => {
    return insertNoteTest()
  }
  
  runDisplayNotesTest = () => {
    return displayNotesTest()
  }

  runShortenArrayTest = () => {
    return shortenNotesArrayTest()
  }

  runDisplayOneNoteTest = () => {
  return displayOneNoteTest()
  }

}
