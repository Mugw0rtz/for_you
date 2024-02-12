const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const closeBtn = document.getElementById("close-btn");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const heartsRow = document.querySelectorAll(".hearts-row");
const heartBtn = document.getElementById("heart-btn");
const anchor = document.getElementById("myAnchor"); // Add this line to get the anchor element

function toggleEnvelope() {
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  
  heartsRow.forEach(element => element.classList.toggle("animated"));
  
  // Enable/disable the anchor tag based on the envelope's visibility
  if (message2.classList.contains("show")) {
    anchor.style.pointerEvents = "auto"; // Make anchor clickable
  } else {
    anchor.style.pointerEvents = "none"; // Disable anchor
  }
}
