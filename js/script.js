  let myChart1 = document.getElementById('myChart1').getContext('2d');

  let trafficChart = new Chart(myChart1, {
    type: 'line',
    data: {
      labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets:[{
        label:'weekly',
        data:[
          0,
          750,
          1250,
          1000,
          1500,
          2000,
          1500,
          1750,
          1250,
          1750,
          2250,
        ],
        backgroundColor: 	'rgba(230,230,250, 0.3)',
        borderWidth: 3,
        borderColor: 'lavender',
        pointBackgroundColor: 'white',
        pointRadius: 4,
      }]
    },
    options: {
      title:{
        display: false,
        text: 'Traffic',
        horizontalAlign: 'left',
      },
      elements: {
            line: {
                tension: 0 // disables bezier curves
            }
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
      title:{
        display: true,
        text: 'Traffic',
        horizontalAlign: 'left',
      }
    }
  });

  let myChart3 = document.getElementById('myChart3').getContext('2d');

  let mobileUserChart = new Chart(myChart3, {
    type: 'doughnut',
    data: {
      labels:['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
      datasets:[{
        label:'traffic',
        data:[
          500,
          1000,
          1500,
          2000,
          2500,
        ],
        backgroundColor: 'lavender',
        borderWidth: 3,
        borderColor: 'lavendar',
      }]
    },
    options: {
      title:{
        display: true,
        text: 'Traffic',
        horizontalAlign: 'left',
      }
    }
  });
