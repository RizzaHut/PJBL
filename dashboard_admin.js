
Chart.register(ChartDataLabels);
const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
const jumlahPengunjung = [529, 404, 374, 561, 398];
const ctx = document.getElementById('grafikPengunjung').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgb(95, 169, 95)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: hari,
        datasets: [{
            label: 'Jumlah Pengunjung',
            data: jumlahPengunjung,
            fill: true,
            backgroundColor: gradient,

        }]
    },
    options: {
        indexAxis: 'x',
        responsive: true,
        plugins: {
            datalabels: {
                color: 'white',
                font: {
                    weight: '500',
                },
                align: 'end',
                anchor: 'end',
                display: true,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100
                }
            }
        }
    }
});



