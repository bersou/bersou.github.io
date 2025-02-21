const ctx1 = document.getElementById('impactoMDF1').getContext('2d');
const impactoMDF1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Ventilador da Fibra', 'Queda de Energia', 'Rosca de Extração'],
        datasets: [{
            label: 'Impacto (M³)',
            data: [495, 265, 224],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('impactoMDF2').getContext('2d');
const impactoMDF2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Cinta da Prensa', 'Ventilador do Óleo', 'Transdutor de Distância'],
        datasets: [{
            label: 'Impacto (M³)',
            data: [880, 198, 190],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('paradasRepetidas').getContext('2d');
const paradasRepetidas = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Divert Valvule', 'Desalinhamento TC 45', 'Pressão Baixa na Usina', 'Pressão e Temperatura Baixa', 'Transdutor de Distância', 'Pressão Baixa nas Bombas'],
        datasets: [{
            label: 'Tempo de Parada (Horas)',
            data: [0.93, 4.25, 2.53, 10, 7, 1.03],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});
