export const planetChartData = {
    type: 'bar',
    data: {
        labels: ["CURRENT MO", "NEXT MO", "FOLLOWING MO", "CURRENT Q", "NEXT Q"],
        datasets: [
            {
                label: "Label1",
                data: [[-15, -10], [5, 10], [0, 5], [-10, 0], [5, 15]],
                backgroundColor: "rgba(13,202,240,0.7)",
                borderColor: "#365d5d",
                borderWidth: 1,
                fill: false,
            },
            {
                label: "Label2",
                data: [[-10, -5], [10, 15], [5, 10], [0, 15], [15, 30]],
                backgroundColor: "rgba(255,193,7,0.7)",
                borderColor: "#ad8f01",
                borderWidth: 1,
                fill: false,
            },
            {
                label: "Label3",
                data: [[-5, 5], [15, 20], [10, 30], [15, 30], [30, 50]],
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
