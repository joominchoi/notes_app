const createNoteTest = () => {
  const note = new Note();
  
  if (note.createNote('Test Note') === ('Test Note')) {
    return ('Create Note Test ---> Passed');
  }
  else {
    return ('Create Note Test ---> Failed');
  };
};


class TestOutput {

  runAllTests() {
    return (createNoteTest())
  }
  
}
