  let myChart1 = document.getElementById('myChart1').getContext('2d');

  let trafficChart = new Chart(myChart1, {
    type: 'line',
    data: {
      labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets:[{
        label: 'Hourly',
        backgroundColor: 	'rgba(230,230,250, 0.3)',
        borderWidth: 3,
        borderColor: 'lavender',
        pointBackgroundColor: 'white',
        pointRadius: 4,
        data:[0,750,1250,1000,1500,2000,1500,1750,1250,1750,2250],
      }, {
          label: 'Daily',
          backgroundColor: 	'rgba(400,230,250, 0.3)',
          borderWidth: 3,
          borderColor: 'lavender',
          pointBackgroundColor: 'white',
          pointRadius: 4,
          data:[0,750,1250,1000,1500,2000,1500,1750,1250,1750,2250],
        }, {
            label: 'Weekly',
            backgroundColor: 	'rgba(90, 205, 90, 0.3)',
            borderWidth: 3,
            borderColor: 'lavender',
            pointBackgroundColor: 'white',
            pointRadius: 4,
            data:[0,750,1250,1000,1500,2000,1500,1750,1250,1750,2250],
          }, {
              label: 'Monthly',
              backgroundColor: 	'rgba(205, 205, 90, 0.3)',
              borderWidth: 3,
              borderColor: 'lavender',
              pointBackgroundColor: 'white',
              pointRadius: 4,
              data:[0,750,1250,1000,1500,2000,1500,1750,1250,1750,2250],
            }
      ]
    },
    options: {
      elements: {
            line: {
                tension: 0 // disables bezier curves
            }
          },
      legend: {
              position: 'top',
           }
        }
  });

  let myChart2 = document.getElementById('myChart2').getContext('2d');

  let dailyTrafficChart = new Chart(myChart2, {
    type: 'bar',
    data: {
      labels:['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
      datasets:[{
        label:'traffic',
        data:[
          50,
          75,
          100,
          200,
          175,
          75,
        ],
        backgroundColor: 'lavender',
        borderWidth: 3,
        borderColor: 'lavendar',
      }]
    },
    options: {
      legend:{
        display: false,
      }
    }
  });

  let myChart3 = document.getElementById('myChart3').getContext('2d');

  let mobileUserChart = new Chart(myChart3, {
    type: 'doughnut',
    data: {
      labels:['Phones', 'Tablets', 'Desktops'],
      datasets:[{
        label:'Mobile Users',
        data:[
          70,
          15,
          15,
        ],
        backgroundColor: ["lavender","green","teal"],
        borderColor: ["lavender","green","teal"],
      }]
    },
    options: {
      title:{
        display: false,
        text: 'Traffic',
        horizontalAlign: 'left',
      },
      legend: {
      position: 'right'
     }
    }
  });

  var users = ["Victoria Chambers","Rob Lynn","Jane Michaels","Steve Johnson"];

  function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("userSearch"), users);
