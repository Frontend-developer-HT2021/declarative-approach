let ourData = [];
render();

const ourForm = document.querySelector("#ourForm");

function loadData() {
  if (localStorage.getItem("ourData")) {
    ourData = JSON.parse(localStorage.getItem("ourData"));
  }
}

loadData();
render();

function render() {}
