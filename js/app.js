$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// $(function () {
//   $('[data-toggle="popover"]').popover()
// })
// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('transparent');
  }

  else {
    $('nav').removeClass('black');
  }
})


// graph
// function genGraph() {

//   var ques1 = document.getElementsByName("ques1")[0].value;
//   var ques2 = document.getElementsByName("ques2")[1].value;
//   var ques3 = document.getElementsByName("ques3")[2].value;
//   var ques4 = document.getElementsByName("ques4")[2].value;
//   var ques5 = document.getElementsByName("ques5")[1].value;
//   console.log(ques1);

//   var charData = []

//   charData.push(ques1, ques2, ques3, ques4, ques5)
//   console.log(charData);
//   //line
//   var ctxL = document.getElementById("lineChart").getContext('2d');
//   var myLineChart = new Chart(ctxL, {
//     type: 'line',
//     data: {
//       labels: ["1", "2", "3", "4", "5"],
//       datasets: [{
//         label: "brain storm",
//         data: charData,
//         backgroundColor: [
//           'rgba(105, 0, 132, .2)',
//         ],
//         borderColor: [
//           'rgba(200, 99, 132, .7)',
//         ],
//         borderWidth: 2
//       },
//       {
//         label: "thinking",
//         data: [28, 48, 40, 19, 86],
//         backgroundColor: [
//           'rgba(0, 137, 132, .2)',
//         ],
//         borderColor: [
//           'rgba(0, 10, 130, .7)',
//         ],
//         borderWidth: 2
//       }
//       ]
//     },
//     options: {
//       responsive: true
//     }
//   });

// }

// user data input

function gamepage() {

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


  if ((name === "" || fatherName === "" || email === "") || (name === " " || fatherName === " " || email === " " || phoneNumber === " ") || age < 18) {
    swal("Sorry!", "Under 18 game is in develpment process", "info");
  }
  else {
    window.location.assign("pages/graph.html");

  }
  console.log(age)

}
console.log(name)

// adult game first section popover
function pop() {
  let arr = ["Hello", "Its my first day in office", " I hope everything will be okay", "We have to follow some tasks", "some tasks maybe long,some shorts"];
  let i = 0;
  setInterval(() => {

    if (i < arr.length) {
      document.getElementById('dialogue').setAttribute('data-content', arr[i])
      i++;
      $('#dialogue').popover('show');
      setTimeout(() => {
        $('#dialogue').popover('hide');
      }, 3000)
    }

    if (i >= arr.length) {
      document.getElementById("option-list1").style.display = "block"
      document.getElementById("sub1").style.display = "block"
    }

    console.log(i)
  }, 4000)

  document.getElementById("start-btn").style.display = "none";
}

function pop1() {
  let arr = ["Hello", "you must be liza", " i was hoping you could help me ", "because its my first day"];
  let arr1 = ["Hello sir","sure i would love to help", "today you havce few work to take over", "in the desk there are few file please go through", "then in a hour you have to attend the meeting"];
  let i = 0;
  let j = 0;

  setInterval(() => {

    if (i < arr.length) {
      document.getElementById('dialogue1a').setAttribute('data-content', arr[i])
      i++;
      $('#dialogue1a').popover('show');
      setTimeout(() => {
        $('#dialogue1a').popover('hide');
      }, 3000)

      
    }
    console.log(i)

  }, 4000)

  setTimeout(()=>{
    setInterval(() => {

      if (j < arr1.length) {
        document.getElementById('dialogue1b').setAttribute('data-content', arr1[j])
        j++;
        $('#dialogue1b').popover('show');
        setTimeout(() => {
          $('#dialogue1b').popover('hide');
        }, 3000)
  
        
      }
      console.log(j)
      if (j >= arr1.length) {
        document.getElementById("option-list2").style.display = "block"
        document.getElementById("sub2").style.display = "block"
      }
  
    }, 4000)
  },16000)
  
  document.getElementById("start-btn1").style.display = "none";

}

function pop2() {
  let arr = ["Hello", "you must be liza", " i was hoping you could help me ", "because its my first day"];
  let arr1 = ["Hello sir","sure i would love to help", "today you havce few work to take over", "in the desk there are few file please go through", "then in a hour you have to attend the meeting"];
  let i = 0;
  let j = 0;

  setInterval(() => {

    if (i < arr.length) {
      document.getElementById('dialogue2a').setAttribute('data-content', arr[i])
      i++;
      $('#dialogue2a').popover('show');
      setTimeout(() => {
        $('#dialogue2a').popover('hide');
      }, 3000)

      
    }
    console.log(i)
    // if (i >= arr.length) {
    //   document.getElementById("option-list1").style.display = "block"
    //   document.getElementById("sub1").style.display = "block"
    // }

  }, 4000)

  setTimeout(()=>{
    setInterval(() => {

      if (j < arr1.length) {
        document.getElementById('dialogue2b').setAttribute('data-content', arr1[j])
        j++;
        $('#dialogue2b').popover('show');
        setTimeout(() => {
          $('#dialogue2b').popover('hide');
        }, 3000)
  
        
      }
      console.log(j)
      if (j >= arr1.length) {
        document.getElementById("option-list3").style.display = "block"
        document.getElementById("sub3").style.display = "block"
      }
  
    }, 4000)
  },16000)

  document.getElementById("start-btn2").style.display = "none";  

}

// game start

let intro = document.getElementById("game-intro");
intro.style.display = "block"
let ques1 = document.getElementById("qsec1");
ques1.style.display = "none"
let ques2 = document.getElementById("qsec2");
ques2.style.display = "none"
let ques3 = document.getElementById("qsec3");
ques3.style.display = "none"
// let ques2 = document.getElementById("qsec1").style.display = "none"

function startGame() {
  intro.style.display = "none";
  ques1.style.display = "block"

}

$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});

$('#modal3').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal3 iframe').attr("src", $("#modal3 iframe").attr("src"));
});



let submitOne = document.getElementById("sub1");
submitOne.addEventListener('click', () => {
  ques1.style.display = "none";
  ques2.style.display = "block";

})

let submitTwo = document.getElementById("sub2");
submitTwo.addEventListener('click', () => {
  ques2.style.display = "none";
  ques3.style.display = "block";

})

function submitResult() {
  let ques1Ans = document.getElementsByName("phaseOneQues");
  for (let i = 0; i < ques1Ans.length; i++) {
    if (ques1Ans[i].checked) {
      console.log("radioButton " + i + ": " + ques1Ans[i].value);
      ques1Ans = ques1Ans[i].value;
      console.log(ques1Ans)

    }
  }

  let ques2Ans = document.getElementsByName("phaseTwoQues");
  for (let i = 0; i < ques2Ans.length; i++) {
    if (ques2Ans[i].checked) {
      console.log("radioButton " + i + ": " + ques2Ans[i].value);
      ques2Ans = ques2Ans[i].value;
      console.log(ques2Ans)

    }
  }

  let ques3Ans = document.getElementsByName("phaseThreeQues");
  for (let i = 0; i < ques3Ans.length; i++) {
    if (ques3Ans[i].checked) {
      console.log("radioButton " + i + ": " + ques3Ans[i].value);
      ques3Ans = ques3Ans[i].value;
      console.log(ques3Ans)

    }
  }
// var calResult = ((ques1Ans + ques2Ans + ques3Ans) * 100 ) / 3 ;
  //radar
  var ctxR = document.getElementById("radarChart").getContext('2d');
  var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
      labels: ["Mental Health", "Drinking", "Sleeping",],
      datasets: [{
          label: "My First dataset",
          data: [ques1Ans, ques2Ans, ques3Ans],
          backgroundColor: [
            'rgba(105, 0, 132, .2)',
          ],
          borderColor: [
            'rgba(200, 99, 132, .7)',
          ],
          borderWidth: 2
        },
        {
          label: "My Second dataset",
          data: [28, 48, 40, 19, 96, 27, 100],
          backgroundColor: [
            'rgba(0, 250, 220, .2)',
          ],
          borderColor: [
            'rgba(0, 213, 132, .7)',
          ],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true
    }
  });
  console.log(myRadarChart);
  ques3.style.display = "none"
}