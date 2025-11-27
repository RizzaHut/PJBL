document.addEventListener('DOMContentLoaded', function() {
    // Register plugin once at the beginning
    Chart.register(ChartDataLabels);

    // Chart 1: Pengunjung
    const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    const jumlahPengunjung = [529, 404, 374, 561, 398];

    const ctx1 = document.getElementById('grafikPengunjung').getContext('2d');
    const gradient = ctx1.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgb(95, 169, 95)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    const chart1 = new Chart(ctx1, {
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
            responsive: true,
            plugins: {
                datalabels: {
                    display: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 100
                    }
                },
            }
        }
    });

    // Chart 2: Terpopuler (Pie Chart)
    const cerita = ['To Dilaling', 'Bawang Merah dan Bawang Putih', 'Lutung Kasarung', 'Abo Mamongkuroit dan Tulap Si Raksasa'];
    const jumlahPembaca = [305, 239, 198, 83]; // Changed from strings to numbers

    const ctx2 = document.getElementById('grafikTerpopuler').getContext('2d');

    const chart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: cerita,
            datasets: [{
                label: 'Jumlah Pembaca',
                data: jumlahPembaca,
                backgroundColor: ['#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C'],
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Cerita Rakyat Terpopuler Bulan Ini',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    boxWidth: 60,
                    position: 'right',
                    labels: {
                        font: {
                            size: 10,
                        }
                    }
                },
                datalabels: {
                    color: 'white',
                    font: {
                        weight: '500',
                    },
                    align: 'center',
                    anchor: 'center',
                    display: true,
                },
            },
            scales: {
                y: {
                    display: false,
                },
                x: {
                    display: false,
                }
            }
        }
    });

    // Chart 3: Rating Tertinggi
    const judul = ['Lutung Kasarung', 'Timun Mas', 'Keong Mas', 'To Dilaling'];
    const dataRatings = [4.83, 4.71, 4.68, 4.52];

    const ctx3 = document.getElementById('grafikRatingTertinggi').getContext('2d');

    const ratingChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: judul,
            datasets: [{
                label: 'Jumlah Rating',
                data: dataRatings,
                backgroundColor: 'rgba(88, 129, 87, 0.8)',
                borderColor: 'rgba(88, 129, 87, 0.8)',
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Rating Tertinggi Cerita Rakyat',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                datalabels: {
                    anchor: 'center',
                    align: 'center',
                    color: 'white',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function(value) {
                        return value.toFixed(2);
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('id-ID', {
                                    minimumFractionDigits: 2
                                }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    min: 4,
                    max: 5,
                    ticks: {
                        stepSize: 0.2,
                        callback: function(value) {
                            return value.toFixed(1);
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
});