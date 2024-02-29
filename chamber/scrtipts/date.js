document.addEventListener("DOMContentLoaded", function() {
  function setCurrentDateTime() {
    var timestampField = document.getElementById('timestamp');
    var currentTimestamp = Date.now();
    timestampField.value = currentTimestamp;
  }

  setCurrentDateTime();
});
