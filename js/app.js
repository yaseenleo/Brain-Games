$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});
function openGraph() {
  window.location.assign("pages/graph.html")
}
// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('transparent');
  }

  else {
    $('nav').removeClass('black');
  }
})

function genGraph() {

  var ques1 = document.getElementsByName("ques1")[0].value;
  var ques2 = document.getElementsByName("ques2")[1].value;
  var ques3 = document.getElementsByName("ques3")[2].value;
  var ques4 = document.getElementsByName("ques4")[2].value;
  var ques5 = document.getElementsByName("ques5")[1].value;
  console.log(ques1);

  var charData = []

  charData.push(ques1, ques2, ques3, ques4, ques5)
  console.log(charData);
  //line
  var ctxL = document.getElementById("lineChart").getContext('2d');
  var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [{
        label: "brain storm",
        data: charData,
        backgroundColor: [
          'rgba(105, 0, 132, .2)',
        ],
        borderColor: [
          'rgba(200, 99, 132, .7)',
        ],
        borderWidth: 2
      },
      {
        label: "thinking",
        data: [28, 48, 40, 19, 86],
        backgroundColor: [
          'rgba(0, 137, 132, .2)',
        ],
        borderColor: [
          'rgba(0, 10, 130, .7)',
        ],
        borderWidth: 2
      }
      ]
    },
    options: {
      responsive: true
    }
  });

}

// user data input

function gamepage() {

  // var gamepage = document.getElementById("gamepage");
  // gamepage.addEventListener('click', () => {

  let name = document.getElementById("name").value;
  let fatherName = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementsByName("gender");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      console.log("radioButton " + i + ": " + gender[i].value);
      gender = gender[i].value;
      console.log(gender)

    }
  }
  let age = document.getElementById("age").value;
  let phoneNumber = document.getElementById("phoneNumber").value;


  if ((name === "" || fatherName === "" || email === "") || (name === " " || fatherName === " " || email === " ") || age < 18) {
    swal("Sorry!", "Under 18 game is in develpment process", "info");
  }
  else {
    window.location.assign("pages/graph.html");

  }
  console.log(age)

  // })
}
// game start

var intro = document.getElementById("game-intro").style.display = "block"
var ques1 = document.getElementById("qsec1").style.display = "none"
function startGame() {
  intro = document.getElementById("game-intro").style.display = "none";
  ques1 = document.getElementById("qsec1").style.display = "block"


}