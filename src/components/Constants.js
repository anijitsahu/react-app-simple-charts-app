const Constants = () => {

  // list of all the constants
  return {

    // all the colors as Array
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)'
    ],

    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],

    // labels and data related constants
    labels: ["Star Jalsha", "Star Sports", "National Geographic", "Others"],
    data: [6, 2, 5, 11],
    borderWidth: 1,

    datasetLabel: "Hourwise Channel watching distribution",
    title: "Hourwise channel watching distribution graph"
  }
}

export default Constants;
