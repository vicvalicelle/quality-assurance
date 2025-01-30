import { options } from "k6/http";

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
        testesFuncionais: {
            vus: 1,
            iterations: 1
        },
        testesFluxo: {
            vus: 50,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<300'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99']
            }
        }
    },

    ticketsOptions: {
        smokeThresholds: {
            vus: 5,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<300'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99']
            }
        },
    
        loadThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<300'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '30s', target: 20 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 0 }
            ]
        },
    
        spikeThresholds: {
            thresholds: {
                http_req_duration: ['max < 300'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '10s', target: 50 },
                { duration: '3s', target: 250 },
                { duration: '10s', target: 50 }
            ]
        },
    
        stressThresholds: {
            thresholds: {
                http_req_duration: ['max < 500'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '3m', target: 0 }
            ]
        },
    
        soakThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<300'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '3m', target: 200 },
                { duration: '1m', target: 0 }
            ]
        }
    },

    moviesGetOptions: {
        smokeThresholds: {
            vus: 5,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<100'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99']
            }
        },
    
        loadThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<100'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '30s', target: 20 },
                { duration: '1m', target: 100 },
                { duration: '30s', target: 0 }
            ]
        },
    
        spikeThresholds: {
            thresholds: {
                http_req_duration: ['max < 300'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '10s', target: 50 },
                { duration: '3s', target: 250 },
                { duration: '10s', target: 50 }
            ]
        },
    
        stressThresholds: {
            thresholds: {
                http_req_duration: ['max < 300'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '3m', target: 0 }
            ]
        },
    
        soakThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<100'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '3m', target: 200 },
                { duration: '1m', target: 0 }
            ]
        }
    },

    moviesPostOptions: {
        smokeThresholds: {
            vus: 5,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<200'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99']
            }
        },
    
        loadThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<200'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '30s', target: 20 },
                { duration: '1m', target: 100 },
                { duration: '30s', target: 0 }
            ]
        },
    
        spikeThresholds: {
            thresholds: {
                http_req_duration: ['max < 300'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '10s', target: 50 },
                { duration: '3s', target: 250 },
                { duration: '10s', target: 50 }
            ]
        },
    
        stressThresholds: {
            thresholds: {
                http_req_duration: ['max < 500'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '3m', target: 0 }
            ]
        },
    
        soakThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<200'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '3m', target: 200 },
                { duration: '1m', target: 0 }
            ]
        }
    },

    moviesGetIdOptions: {
        smokeThresholds: {
            vus: 5,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<50'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99']
            }
        },
    
        loadThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<50'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '30s', target: 20 },
                { duration: '1m', target: 100 },
                { duration: '30s', target: 0 }
            ]
        },
    
        spikeThresholds: {
            thresholds: {
                http_req_duration: ['max < 300'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '10s', target: 50 },
                { duration: '3s', target: 250 },
                { duration: '10s', target: 50 }
            ]
        },
    
        stressThresholds: {
            thresholds: {
                http_req_duration: ['max < 150'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '3m', target: 0 }
            ]
        },
    
        soakThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<50'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '3m', target: 200 },
                { duration: '1m', target: 0 }
            ]
        }
    },

    moviesPutOptions: {
        smokeThresholds: {
            vus: 5,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<300'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99']
            }
        },
    
        loadThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<300'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '30s', target: 20 },
                { duration: '1m', target: 100 },
                { duration: '30s', target: 0 }
            ]
        },
    
        spikeThresholds: {
            thresholds: {
                http_req_duration: ['max < 500'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '10s', target: 50 },
                { duration: '3s', target: 250 },
                { duration: '10s', target: 50 }
            ]
        },
    
        stressThresholds: {
            thresholds: {
                http_req_duration: ['max < 600'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '3m', target: 0 }
            ]
        },
    
        soakThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<300'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '3m', target: 200 },
                { duration: '1m', target: 0 }
            ]
        }
    },

    moviesDeleteOptions: {
        smokeThresholds: {
            vus: 5,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(100)<400'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.99']
            }
        },
    
        loadThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<400'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '30s', target: 20 },
                { duration: '1m', target: 100 },
                { duration: '30s', target: 0 },
            ]
        },
    
        spikeThresholds: {
            thresholds: {
                http_req_duration: ['max < 600'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '10s', target: 50 },
                { duration: '3s', target: 250 },
                { duration: '10s', target: 50 }
            ]
        },
    
        stressThresholds: {
            thresholds: {
                http_req_duration: ['max < 600'],
                http_req_failed: ['rate<0.05']
            },
            stages: [
                { duration: '1m', target: 50 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '3m', target: 0 }
            ]
        },
    
        soakThresholds: {
            thresholds: {
                http_req_duration: ['p(95)<400'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                { duration: '1m', target: 100 },
                { duration: '3m', target: 200 },
                { duration: '1m', target: 0 }
            ]
        }
    }
}
