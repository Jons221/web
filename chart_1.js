var ctx = document.getElementById('myChart').getContext('2d');

var myChart_1 = {
    datasets: [{
      data: [25.36, 21.56, 8.4, 7.63,7.31,6.4,4.01,3.21,2.96,2.06],
      backgroundColor: ['#4baad6', '#FB3640', '#fcc03f', '#0041ab','#9d4efc','#3f75cc', '#1a0080', '#0f6796', '#ff6f00', '#b06809']
    }],
    labels: ['Python', 'Java', 'Javascript', 'C#','PHP', 'C/C++', 'R','Objective-C', 'Swift','Matlab']
};

var myChart_2 = {
    datasets: [{
      data: [9.874, 16.661, 2.128, 3.399,1.863,5.635,1.944,1.840,15.205,3.291],
      backgroundColor: ['#4baad6', '#FB3640', '#fcc03f', '#0041ab','#9d4efc','#3f75cc', '#1a0080', '#0f6796', '#ff6f00', '#b06809']
    }],
    labels: ['Python', 'Java', 'Javascript', 'C#','PHP', 'C++', 'SQL','Objective-C', 'C','Visual Basic .Net']
};

var pieChartOptions_1 = {
    responsive: true,
    title: {
      display: true,
      text: 'Pypl Index',
      fontSize: 32
    },
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        align: 'start',
        offset: -100,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '14'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
};

var pieChartOptions_2 = {
  responsive: true,
  title: {
    display: true,
    text: 'Tiobe Index',
    fontSize: 32
  },
  legend: {
    position: 'bottom'
  },
  plugins: {
    datalabels: {
      color: '#fff',
      align: 'start',
      offset: -100,
      borderWidth: 2,
      borderColor: '#fff',
      borderRadius: 25,
      backgroundColor: (context) => {
        return context.dataset.backgroundColor;
      },
      font: {
        weight: 'bold',
        size: '14'
      },
      formatter: (value) => {
        return value + ' %';
      }
    }
  }
};

// let ctx1 = document.getElementById("chart1").getContext("2d");
// let labels_tiobe = ['Python', 'Java', 'Javascript', 'C#','PHP', 'C++', 'SQL','Objective-C', 'C','Visual Basic .Net'];
// let colorHex_tiobe = ['#4baad6', '#FB3640', '#fcc03f', '#0041ab','#9d4efc','#3f75cc', '#1a0080', '#0f6796', '#ff6f00', '#b06809'];
// let chart1 = new Chart(ctx1,{
//   type: 'pie',
//   data: {
//     datasets: [{
//       data: [9.874, 16.661, 2.128, 3.399,1.863,5.635,1.944,1.840,15.205,3.291],
//       backgroundColor: colorHex_tiobe
//     }],
//     labels: labels_tiobe
//   },
  
//   options: {
//     responsive: true,
//     legend: {
//       position: 'bottom'
//     },
//     title: {
//       display: true,
//       text: 'Tiobe Index',
//       fontSize: 32
//     },
//     plugins: {
//       datalabels: {
//         color: '#fff',
//         align: 'start',
//         offset: -100,
//         borderWidth: 2,
//         borderColor: '#fff',
//         borderRadius: 25,
//         backgroundColor: (context) => {
//           return context.dataset.backgroundColor;
//         },
//         font: {
//           weight: 'bold',
//           size: '14'
//         },
//         formatter: (value) => {
//           return value + ' %';
//         }
//       }
//     }
//   }
// });


$(document).ready(function(){
  $("#showcontext_pypl").click(function(){
    var x = document.getElementById("pypl_text");
    if (x.style.display === "none") {
      $("#pypl_text").show(500);
      $('#showcontext_pypl').toggleClass('fa-rotate-180');
    } else {
      $('#showcontext_pypl').toggleClass('fa-rotate-180');
      $("#pypl_text").hide(500);
    }
  });
  $("#showcontext_tiobe").click(function(){
    var x = document.getElementById("tiobe_text");
    if (x.style.display === "none") {
      $('#showcontext_tiobe').toggleClass('fa-rotate-180');
      $("#tiobe_text").show(1000);
    } else {
      $('#showcontext_tiobe').toggleClass('fa-rotate-180');
      $("#tiobe_text").hide(1000);
    }
  });
});

showChart1Data();




function manageCharts() {
  var button = document.getElementById("chartDataButton");

  if (button.textContent === 'Tiobe Index') {
    button.textContent = "Pypl Index";
    destroyChart();
    showChart2Data();
  } else if (button.textContent === 'Pypl Index') {
    button.textContent = "Tiobe Index";
    destroyChart();
    showChart1Data();
  }
}


function showChart2Data() {
  myChart = new Chart(ctx, {
    type: 'pie',
    data: myChart_2,
    options: pieChartOptions_2
  });
}

function showChart1Data() {
  myChart = new Chart(ctx, {
    type: 'pie',
    data: myChart_1,
    options: pieChartOptions_1
  });
}

function destroyChart() {
  if (myChart)
  myChart.destroy();
}

document.getElementById('chartDataButton').addEventListener('click', manageCharts);


// let ctx = document.getElementById('myChart').getContext('2d');
// let labels_pypl = ['Python', 'Java', 'Javascript', 'C#','PHP', 'C/C++', 'R','Objective-C', 'Swift','Matlab'];
// let colorHex_pypl = ['#4baad6', '#FB3640', '#fcc03f', '#0041ab','#9d4efc','#3f75cc', '#1a0080', '#0f6796', '#ff6f00', '#b06809'];

// let myChart = new Chart(ctx, {
  // type: 'pie',
  // data: {
  //   datasets: [{
  //     data: [25.36, 21.56, 8.4, 7.63,7.31,6.4,4.01,3.21,2.96,2.06],
  //     backgroundColor: colorHex_pypl
  //   }],
  //   labels: labels_pypl
  // },
  // options: {
  //   responsive: true,
  //   title: {
  //     display: true,
  //     text: 'Pypl Index',
  //     fontSize: 32
  //   },
  //   legend: {
  //     position: 'bottom'
  //   },
  //   plugins: {
  //     datalabels: {
  //       color: '#fff',
  //       align: 'start',
  //       offset: -100,
  //       borderWidth: 2,
  //       borderColor: '#fff',
  //       borderRadius: 25,
  //       backgroundColor: (context) => {
  //         return context.dataset.backgroundColor;
  //       },
  //       font: {
  //         weight: 'bold',
  //         size: '14'
  //       },
  //       formatter: (value) => {
  //         return value + ' %';
  //       }
  //     }
  //   }
  // }
// });