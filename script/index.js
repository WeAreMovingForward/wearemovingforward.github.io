function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

/* Join Us Page */
var joinVCIsOpen = false
var joinFounderIsOpen = false
var joinInvolveIsOpen = false

function toggleJoinVC() {
  if (joinVCIsOpen) {
    document.getElementById("join-vc").classList.remove("join-answer-active");
  } else {
    document.getElementById("join-vc").classList.add("join-answer-active");
  }
  joinVCIsOpen = !joinVCIsOpen;
}

function toggleJoinFounder() {
  if (joinFounderIsOpen) {
    document.getElementById("join-founder").classList.remove("join-answer-active");
  } else {
    document.getElementById("join-founder").classList.add("join-answer-active");
  }
  joinFounderIsOpen = !joinFounderIsOpen;
}

function toggleJoinInvolve() {
  if (joinInvolveIsOpen) {
    document.getElementById("join-involve").classList.remove("join-answer-active");
  } else {
    document.getElementById("join-involve").classList.add("join-answer-active");
  }
  joinInvolveIsOpen = !joinInvolveIsOpen;
}