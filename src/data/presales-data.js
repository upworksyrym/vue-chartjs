export const planetChartData = {
    type: 'bar',
    data: {
        labels: ["CURRENT MO", "NEXT MO", "FOLLOWING MO", "CURRENT Q", "NEXT Q"],
        datasets: [
            {
                label: "Label1",
                data: [[0, 15], [5, 30], [10, 50], [-15, -5], [0, 10]],
                backgroundColor: "rgba(13,202,240,0.7)",
                borderColor: "#365d5d",
                borderWidth: 1,
                fill: false,
            },
            {
                label: "Label2",
                data: [[15, 30], [30, 55], [50, 70], [-5, 15], [10, 25]],
                backgroundColor: "rgba(255,193,7,0.7)",
                borderColor: "#ad8f01",
                borderWidth: 1,
                fill: false,
            },
            {
                label: "Label3",
                data: [[30, 40], [55, 70], [70, 90], [15, 25], [25, 35]],
                backgroundColor: "rgba(220,53,69,0.7)",
                borderColor: "#9b0202",
                borderWidth: 1,
                fill: false,
            }
        ]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: false,
                text: 'WHERE ARE WE GOING TO LAND'
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: false,
                ticks: {
                    callback: function (value) {
                        return '$' + value + ' M';
                    },
                    color: 'black'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: 'black'
                }
            }
        },
        layout: {
            padding: 50
        }
    }
};


export default planetChartData;
