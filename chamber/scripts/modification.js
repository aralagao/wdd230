
  var lastModificationFooter = document.getElementById("last-modification");

  // Get the last modification date and time
  var lastModificationDate = new Date(document.lastModified);

  // Format the date and time as desired
  var formattedLastModification = lastModificationDate.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short"
  });

  // Update the content of the footer with the last modification date and time
  lastModificationFooter.textContent += formattedLastModification;

