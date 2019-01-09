$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});
function openGraph(){
  window.location.assign("pages/graph.html")
}
// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('transparent');
    }

    else {
          $('nav').removeClass('black');
    }
})

function genGraph(){

  var ques1 = document.getElementsByName("ques1")[0].value;
  var ques2 = document.getElementsByName("ques2")[1].value;
  var ques3 = document.getElementsByName("ques3")[2].value;
  var ques4 = document.getElementsByName("ques4")[2].value;
  var ques5 = document.getElementsByName("ques5")[1].value;
  console.log(ques1);
  
  var charData = []
  
  charData.push(ques1,ques2,ques3,ques4,ques5)
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
var gender = document.getElementsByName("gender");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      console.log("radioButton " + i + ": " + gender[i].value);
      gender = gender[i].value;
      console.log(gender)

      if(gender.value >= 18) {
        window.location.assign("pages/graph.html")
      }
      else{
        alert("development in process");
      }
    }
  }