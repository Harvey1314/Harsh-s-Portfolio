function toggleDetails(id) {
  var details = document.getElementById(id);
  details.style.display = details.style.display === "none" ? "block" : "none";
}

function showDummyDescription(companyId) {
  var descriptionElement = document.getElementById(
    "dummyDescription" + companyId
  );
  descriptionElement.innerText =
    "This is a dummy description for " + companyId + ".";
}
