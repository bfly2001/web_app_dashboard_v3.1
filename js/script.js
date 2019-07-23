  let myChart1 = document.getElementById('myChart1').getContext('2d');

  let trafficChart = new Chart(myChart1, {
    type: 'line',
    data: {
      labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
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

  let myChart2 = document.getElementById('myChart2').getContext('2d');

  let dailyTrafficChart = new Chart(myChart2, {
    type: 'bar',
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
