# Plano de Teste de Performance

## Cenários de Teste Individuais

| **Método**        | **Teste**       | **Options**                                                                                                                                                          | **Thresholds**                                                                                       |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **GET (POST - Login)** | **Spike Test**  | `stages: [{ duration: '10s', target: 50 }, { duration: '3s', target: 500 } { duration: '10s', target: 50 }],`                                                                                         | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.01'],`                              |
| **GET com ID (POST - Login)** | **Stress Test** | `stages: [{ duration: '1m', target: 100 }, { duration: '1m', target: 500 }, { duration: '1m', target: 700 }, { duration: '1m', target: 1000 }, { duration: '5m', target: 0 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.05'],`                              |
| **POST**          | **Soak Test**   | ` stages: [{{ duration: '3m', target: 500 }, { duration: '10m', target: 500 }, { duration: '3m', target: 0 },`                                                                                                                                           | `'http_req_duration': ['p(95)<300'], 'http_req_failed': ['rate<0.01'],`                              |
| **PUT (POST - Login)**           | **Load Test**   | `stages: [{ duration: '1m', target: 200 }, { duration: '1m', target: 200 }, { duration: '2m', target: 0 }],`                                                         | `'http_req_duration': ['p(95)<300'], 'http_reqs': ['rate>100'], 'http_req_failed': ['rate<0.01'],`   |
| **DELETE (POST - Login)**        | **Smoke Test**  | `vus: 1, duration: '1s',`                                                                                                                                             | `'http_req_failed': ['rate=0'], 'http_req_duration': ['p(100)<1000'],`                               |

## Cenários de Teste Fluxo

1. Criar um usuário, realizar login com o usuário e criar um produto.
2. Listar usuário, login com usuário, listar produto, excluir produto.

# Resultados
 ## **Spike Test:**

- LOGIN
    ![alt text](./imagens/image.png)
    
- PRODUTOS
    ![alt text](./imagens/image-1.png)
    
- USUARIOS
    ![alt text](./imagens/image-2.png)

## **Stress Test:**

- LOGIN
    ![alt text](./imagens/image-3.png)

- PRODUTOS
    ![alt text](./imagens/image-4.png)

- USUARIOS
    ![alt text](./imagens/image-5.png)

## **Load Test:**

- LOGIN
    ![alt text](./imagens/image-6.png)
    
- PRODUTO
    ![alt text](./imagens/image-7.png)
    
- USUARIO
    ![alt text](./imagens/image-8.png)
    

## **Smoke Test:**

- LOGIN
    ![alt text](./imagens/image-9.png)
    
- PRODUTO
    ![alt text](./imagens/image-10.png)
    
- USUARIO
    ![alt text](./imagens/image-11.png)

## **Soak Test:**

- LOGIN
    ![alt text](./imagens/image-14.png)

- PRODUTOS
    ![alt text](./imagens/image-12.png)

- USUARIOS
    ![alt text](./imagens/image-13.png)

## **Fluxos:**

1. 

![alt text](./imagens/image-15.png)

2. 
![alt text](./imagens/image-16.png)