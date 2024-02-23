const xValues = ["HTML", "CSS", "Python", "JavaScript"];
const yValues = [55, 55, 30, 20];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9"
];


new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
});

