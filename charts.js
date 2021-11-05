function plotTimeline() {
	Highcharts.chart('timeline', {
		credits: {
			enabled: false
		},
		chart: {
      backgroundColor: 'rgba(0,0,0,0)',
			zoomType: 'x',
			type: 'timeline'},
		xAxis: {
			type: 'datetime',
			visible: false
		},
		yAxis: {
			gridLineWidth: 1,
			title: null,
			labels: {
				enabled: false
			}
		},
		legend: {
			enabled: false
		},
		title: {
      text: 'Release Timeline of PUBG'
		},
		subtitle: {
			text: 'Data Source: <a href="https://en.wikipedia.org/wiki/PlayerUnknown%27s_Battlegrounds#Release" target="_blank">www.wikipedia.org</a >'
		},
		tooltip: {
			useHTML: true,
			outside: true,
			style: {
				width: 150
			},
    },
		series: [{
			dataLabels: {
				enabled: true,
				outside: true,
				allowOverlap: false,
				format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
					'{point.x:%d %b %Y}</span><br/>{point.label}',
				connectorWidth: 3,
				width: 130
			},
			marker: {
				symbol: 'circle',
				lineWidth: 5,
				lineColor: null
			},
			data: [{
				x: Date.UTC(2017, 2, 23),
				name: 'PUBG early access on Stream',
				label: 'PUBG early access on Stream',
				color: "#FFA500"
			}, {
        		x: Date.UTC(2017, 11, 20),
        		name: 'PUBG full access on Stream',
				label: 'PUBG full access on Stream',
				color: "#FFA500"
			}, {
				x: Date.UTC(2018, 2, 19),
				name: 'PUBG Mobile release',
				label: 'PUBG Mobile release',
				color: "#FFA500"
			},  {
				x: Date.UTC(2019, 4, 8),
				name: 'PUBG renamed as Game for Peace in China',
				label: 'PUBG renamed as Game for Peace in China',
				color: "#FFA500"
			}, {
				x: Date.UTC(2020, 6, 30),
				name: 'PUBG release on Stadia',
				label: 'PUBG release on Stadia',
				color: "#FFA500"
			}, {
				x: Date.UTC(2020, 8, 2),
				name: 'PUBG ban in India',
				label: 'PUBG ban in India',
				color: "rgb(145, 143, 143)"
			}]
		}]
	});
}

function plotNumUsers() {
  let data = ['Apr-17','May-17','Jun-17','Jul-17','Aug-17','Sep-17','Oct-17','Nov-17','Dec-17','Jan-18','Feb-18','Mar-18','Apr-18','May-18','Jun-18','Jul-18','Aug-18','Sep-18','Oct-18','Nov-18','Dec-18','Jan-19','Feb-19','Mar-19','Apr-19','May-19','Jun-19','Jul-19','Aug-19','Sep-19','Oct-19','Nov-19','Dec-19','Jan-20','Feb-20','Mar-20','Apr-20','May-20','Jun-20','Jul-20','Aug-20','Sep-20','Oct-20','Nov-20'];
  let months = [140.1,189.46,267.19,481.29,874.17,1550.46,2390.95,2915.72,3080.77,3236.03,2934.76,2799.27,2456.36,2175.70,1750.22,1350.46,1260.89,1125.23,1048.66,895.65,1109.77,1084.61,931.75,931.41,886.26,817.6,745.96,745.22,750.94,660.86,637.87,695.92,686.24,645.41,606.69,562.03,913.07,553.12,546.36,469.57,443.39,403.69,381.08,438.92];
  let config = {
    chart: {
      type: 'line',
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "Number of peak concurrent players",
      style: { color: "#636363" }
    },

    subtitle: {
      text:
        'Data Source: <a href="https://www.statista.com/statistics/755111/pubg-number-players/" target="_blank">Statista</a>'
    },

    yAxis: {
      title: {
        text: "Number of players in thousands"
      }
    },

    xAxis: {
      categories: data
    },
    colors: ["#FFA500"],
    legend: {
      enabled: false
    },

    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false
        }
    },

    series: [
      {
        name: "Concurrent Players",
        data: months
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
  Highcharts.chart("chart-num-users", config);
}


function plotTotalDownload() {
  let data = [];
  let config = {
    chart: {
      type: "bar",
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "Top Battle Royale Game Downloads Total",
      style: { color: "#636363" }
    },
    subtitle: {
      text: 'Data Source: <a href="https://sensortower.com/blog/pubg-mobile-three-point-five-billion-revenue" target="_blank">SensorTower</a>'
    },

    xAxis: {
      categories: ["PUBG", "Garena", "Knives", "Fortnite", "COD"],
      labels: {
        useHTML: true,
        formatter: function() {
          return {
            PUBG: "<img src='./images/pubg.jpeg' style='width:35px'>",
            Garena: "<img src='./images/garena.jpeg' style='width:32px'>",
            Knives: "<img src='./images/knives.png' style='width:32px'>",
            Fortnite: "<img src='./images/fortnite.png' style='width:32px'>",
            COD: "<img src='./images/call.png' style='width:32px'>"
          }[this.value]; //'<img class="" src="http://dummyimage.com/60x60/ff6600/ffffff"/>';
        }
      },
      title: {
        text: null
      }
    },

    yAxis: {
      min: 0,
      title: {
        text: "Number of Downloads (in Million)"
      },
      labels: {
        overflow: "justify"
      }
    },
    tooltip: {
      valueSuffix: " millions",
      pointFormat: "Downloads: {point.y}"
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        data: [
          {
            name: "PUBG Mobile",
            y: 1600,
            color: "#f2a900"
          },
          {
            name: "Garena Free Fire",
            y: 395,
            color: "lightgrey"
          },
          {
            name: "Knives Out",
            y: 367,
            color: "lightgrey"
          },
          {
            name: "Fortnite",
            y: 293,
            color: "lightgrey"
          },
          { name: "Call of Duty: Mobile", 
            y: 277, 
            color: "lightgrey" }
        ]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
  Highcharts.chart("chart-total-download", config);
}



function plotGender() {
  let config = {
		chart: {
      type: 'pie',
      backgroundColor: "#f7f7f7"
		},
		title: {
      text: 'Gender Distribution of PUBG Mobile',
      style: { color: "#636363" }
    },
    subtitle: {
      text: 'Data Source: <a href="https://www.statista.com/statistics/988128/pubg-mobile-players-us-gender/" target="_blank">Statista</a>'
    },
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					format: '{point.percentage:.1f} %',
				},
				showInLegend: true
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			floating: true,
			borderWidth: 1
		},
		credits: {
			enabled: false
		},
		series: [{
			data: [{
				name: 'Male',
				y: 57.4,
				color: 'silver'
			}, {
				name: 'Female',
				y: 42.6,
				color: '#FFA500'
			}]
		}]
	};
  Highcharts.chart("chart-user-by-gender", config);
}

function plotGuns() {
  let config = {
    chart: {
      type: "bar",
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "Top 10 kills guns",
      style: { color: "#636363" }
    },
    subtitle: {
      text: 'Data Source: <a href="https://www.kaggle.com/skihikingkevin/pubg-match-deaths">Kaggle</a>'
    },

    xAxis: {
      categories: ["M416", "M16A4", "SCAR-L", "AKM", "UMP9","S1897","Mini-14","Kar98k","S686","SKS"],
      title: {
        text: null
      }
    },

    yAxis: {
      min: 0,
      title: {
        text: "Number of Kills"
      },
      labels: {
        overflow: "justify"
      }
    },
    tooltip: {
      pointFormat: "Kills: {point.y}"
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        data: [
          {
            name: "M416",
            y: 11313,
            color: "#f2a900"
          },
          {
            name: "M16A4",
            y: 9173,
            color: "lightgrey"
          },
          {
            name: "SCAR-L",
            y: 8896,
            color: "lightgrey"
          },
          {
            name: "AKM",
            y: 8056,
            color: "lightgrey"
          },
          {
            name: "UMP9",
            y: 5366,
            color: "lightgrey"
          },
          {
            name: "S1897",
            y: 4140,
            color: "lightgrey"
          },
          {
            name: "Mini-14",
            y: 3048,
            color: "lightgrey"
          },
          {
            name: "Kar98k",
            y: 2562,
            color: "lightgrey"
          },
          {
            name: "S686",
            y: 2398,
            color: "lightgrey"
          },
          {
            name: "SKS",
            y: 2301,
            color: "lightgrey"
          }
        ]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
  Highcharts.chart("kills", config);
}



function plotGunDist() {
  let config = {
    chart: {
      type: "bar",
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "Top 10 guns average shot distance",
      style: { color: "#636363" }
    },
    subtitle: {
      text: 'Data Source: <a href="https://gosu.ai/pubg/weapons">Gosu</a>'
    },

    xAxis: {
      categories: ["M416", "M16A4", "SCAR-L", "AKM", "UMP9","S1897","Mini-14","Kar98k","S686","SKS"],
      title: {
        text: null
      }
    },

    yAxis: {
      min: 0,
      title: {
        text: "Average Shot Distance"
      },
      labels: {
        overflow: "justify"
      }
    },
    tooltip: {
      valueSuffix: " m",
      pointFormat: "distance: {point.y}"
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        data: [
          {
            name: "M416",
            y: 19.23,
            color: "lightgrey"
          },
          {
            name: "M16A4",
            y: 23.6,
            color: "lightgrey"
          },
          {
            name: "SCAR-L",
            y: 18.23,
            color: "lightgrey"
          },
          {
            name: "AKM",
            y: 14.21,
            color: "lightgrey"
          },
          {
            name: "UMP9",
            y: 10.75,
            color: "lightgrey"
          },
          {
            name: "S1897",
            y: 6.61,
            color: "lightgrey"
          },
          {
            name: "Mini-14",
            y: 82.11,
            color: "lightgrey"
          },
          {
            name: "Kar98k",
            y: 111.13,
            color: "#f2a900"
          },
          {
            name: "S686",
            y: 4.92,
            color: "lightgrey"
          },
          {
            name: "SKS",
            y: 96.08,
            color: "lightgrey"
          }
        ]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
  Highcharts.chart("dists", config);
}

function init() {
  plotNumUsers();
  plotTotalDownload();
  plotTimeline();
  plotGender();
  plotGuns();
  plotGunDist();
}

document.addEventListener("DOMContentLoaded", init, false);