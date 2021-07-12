document.addEventListener("DOMContentLoaded", () => {

  const tests = new TestOutput;

  const runTests = () => {
    document.querySelector('#tests').innerText = tests.runAllTests();
  }

  runTests();

})