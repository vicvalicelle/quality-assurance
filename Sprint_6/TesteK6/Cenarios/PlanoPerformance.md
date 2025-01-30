# Performance Test Plan

## Individual Test Scenarios

**Method** | **Test** | **Options** | **Thresholds**
--- | --- | --- | ---
**GET (POST - Login)** | **Spike Test** | `stages: [{ duration: '10s', target: 50 }, { duration: '3s', target: 500 } { duration: '10s', target: 50 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.01'],`
**GET with ID (POST - Login)** | **Stress Test** | `stages: [{ duration: '1m', target: 100 }, { duration: '1m', target: 500 }, { duration: '1m', target: 700 }, { duration: '1m', target: 1000 }, { duration: '5m', target: 0 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.05'],`
**POST** | **Soak Test** | ` stages: [{{ duration: '3m', target: 500 }, { duration: '10m', target: 500 }, { duration: '3m', target: 0 },` | `'http_req_duration': ['p(95)<300'], 'http_req_failed': ['rate<0.01'],`
**PUT (POST - Login)** | **Load Test** | `stages: [{ duration: '1m', target: 200 }, { duration: '1m', target: 200 }, { duration: '2m', target: 0 }],` | `'http_req_duration': ['p(95)<300'], 'http_reqs': ['rate>100'], 'http_req_failed': ['rate<0.01'],`
**DELETE (POST - Login)** | **Smoke Test** | `vus: 1, duration: '1s',` | `'http_req_failed': ['rate=0'], 'http_req_duration': ['p(100)<1000'],`

## Test Scenarios Flow

1. Create a user, log in with the user and create a product.
2. List user, login with user, list product, delete product.

# Results

## **Spike Test:**

- LOGIN![alt text](./imagens/image.png)

- PRODUCTS![alt text](./imagens/image-1.png)

- USERS![alt text](./imagens/image-2.png)

## **Stress Test:**

- LOGIN![alt text](./imagens/image-3.png)

- PRODUCTS![alt text](./imagens/image-4.png)

- USERS![alt text](./imagens/image-5.png)

## **Load Test:**

- LOGIN![alt text](./imagens/image-6.png)

- PRODUCT![alt text](./imagens/image-7.png)

- USER![alt text](./imagens/image-8.png)

## **Smoke Test:**

- LOGIN![alt text](./imagens/image-9.png)

- PRODUCT![alt text](./imagens/image-10.png)

- USER![alt text](./imagens/image-11.png)

## **Soak Test:**

- LOGIN![alt text](./imagens/image-14.png)

- PRODUCTS![alt text](./imagens/image-12.png)

- USERS![alt text](./imagens/image-13.png)

## **Flows:**

1.

![alt text](./imagens/image-15.png)

1.

![alt text](./imagens/image-16.png)