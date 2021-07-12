const createNoteTest = () => {
  const note = new Note();
  
  if (note.createNote('Test Note') === ('Test Note')) {
    return ('Passed');
  }
  else {
    return ('Failed');
  };
};


console.log('Create Note Test ----', createNoteTest())