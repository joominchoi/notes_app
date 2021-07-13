document.addEventListener("DOMContentLoaded", () => {

  const tests = new TestOutput;

  const runTests = () => {
    document.querySelector('#test-one').innerText = tests.runCreateNoteTest();
    document.querySelector('#test-two').innerText = tests.runInsertNoteTest();
    document.querySelector('#test-three').innerText = tests.runDisplayNotesTest();
    document.querySelector('#test-four').innerText = tests.runShortenArrayTest();
  }


  runTests();

})