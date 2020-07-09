function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

/* Join Us Page */
var joinVCIsOpen = false
var joinFounderIsOpen = false

function toggleJoinVC() {
  if (joinVCIsOpen) {
    // document.getElementById("join-vc").style.display="none";
    document.getElementById("join-vc").classList.remove("join-answer-active");
  } else {
    // document.getElementById("join-vc").style.display="block";
    document.getElementById("join-vc").classList.add("join-answer-active");
  }
  joinVCIsOpen = !joinVCIsOpen;
}

function toggleJoinFounder() {
  if (joinFounderIsOpen) {
    // document.getElementById("join-vc").style.display="none";
    document.getElementById("join-founder").classList.remove("join-answer-active");
  } else {
    // document.getElementById("join-vc").style.display="block";
    document.getElementById("join-founder").classList.add("join-answer-active");
  }
  joinFounderIsOpen = !joinFounderIsOpen;
}