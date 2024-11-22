export const testConfig = {
    environment: {
        hml: {
            url: 'http://localhost:3000'
        },
        ec2: {
            url: 'http://18.209.168.118:3000'
        }
    },

    options: {
        smokeThresholds: {
            vus: 1,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<1000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99'],
            }
        },
        
        loadThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<300'],
                http_reqs: ['rate>100'],
                http_req_failed: ['rate<0.01'],
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 0 }
            ]
        },

        spikeThresholds: {
            thresholds: {
                http_req_duration: ['max < 500'],
                http_req_failed: ['rate<0.01'],
            },
            stages: [
                { duration: '10s', target: 50 },
                { duration: '3s', target: 500 },
                { duration: '10s', target: 50 }
            ]
        },

        stressThresholds: {
            thresholds: {
                http_req_duration: ['max < 500'],
                http_req_failed: ['rate<0.05'],
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '1m', target: 500 },
                { duration: '5m', target: 0 }
            ]
        },

        soakThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<300'],
                http_req_failed: ['rate<0.01'],
            },
            stages: [
                { duration: '2m', target: 300 },
                { duration: '4m', target: 400 },
                { duration: '2m', target: 0 }
            ]
        },
        testesFuncionais: {
            vus: 1,
            iterations: 1
        }
    }
}
