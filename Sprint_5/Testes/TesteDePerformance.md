# **Execução dos Testes de Performance**

## **Teste de Carga**

1. **Thread Group:**
    - Número de Threads: 500 (ou mais)
    - Ramp-Up Period: 25 (20 usuário a cada segundo)
    - Duração (segundos): 120 (2 minutos)
    - Startup Delay (segundos): 0
2. **Requisições HTTP (Samplers):**
    - **Página principal:**
        - Path: /login
        - Método: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Execução do Teste:**

![alt text](imagens/image-1.png)
![alt text](imagens/image-2.png)
![alt text](imagens/image-3.png)
![alt text](imagens/image-4.png)
![alt text](imagens/image-5.png)


## **Teste de Estresse**

1. **Thread Group:**
    - Número de Threads: 500 (ou mais)
    - Ramp-Up Period: 15 segundos (ou menos)
    - Duração: 6 minutos (ou mais)
2. **Requisições HTTP (Samplers):**
    - **Página principal:**
        - Path: /login
        - Método: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Execução do Teste de Estresse:**
![alt text](imagens/image-6.png)
![alt text](imagens/image-7.png)
![alt text](imagens/image-8.png)
![alt text](imagens/image-9.png)
![alt text](imagens/image-10.png)

## **Teste de Escalabilidade**

1. **Thread Group:**
    - Número de Threads (usuários): 600
    - Ramp-Up Period (segundos): 10
    - Loop Count: Infinito
2. **Requisições HTTP (Samplers):**
    - **Página principal:**
        - Path: /login
        - Método: POST
3. **Think Time (Timer):**
4. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Execução do Teste de Escalabilidade:**
![alt text](imagens/image-11.png)
![alt text](imagens/image-12.png)
![alt text](imagens/image-13.png)

## **Teste de Pico**

1. **Thread Group:**
    - Número de Threads: 500 (ou mais, dependendo do pico de tráfego esperado)
    - Ramp-Up Period: 1 segundos (ou um valor muito baixo)
    - Duração: 1 minuto (ou a duração esperada do pico de tráfego)
2. **Requisições HTTP (Samplers):**
    - **Página principal:**
        - Path: /login
        - Método: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Execução do Teste de Pico:**
![alt text](imagens/image-14.png)
![alt text](imagens/image-15.png)
![alt text](imagens/image-16.png)
![alt text](imagens/image-17.png)
fechou 😢

## **Teste de Resistência**

1. **Thread Group:**
    - Número de Threads: 500 (ou o número médio de usuários simultâneos)
    - Ramp-Up Period: 300 segundos (5 minutos)
    - Duração: 3600 segundos (1 hora)
2. **Requisições HTTP (Samplers):**
    - **Página principal:**
        - Path: /login
        - Método: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Execução do Teste de Resistência:**
![alt text](imagens/image-18.png)
![alt text](imagens/image-19.png)
![alt text](imagens/image-20.png)
![alt text](imagens/image-21.png)
![alt text](imagens/image-22.png)

## **Teste de Capacidade**

1. **Thread Group:**
    - Número de Threads: 500 (ou o número médio de usuários simultâneos)
    - Ramp-Up Period: 300 segundos (5 minutos)
    - Duração: 30 minutos
2. **Requisições HTTP (Samplers):**
    - **Página principal:**
        - Path: /login
        - Método: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Execução do Teste de Capacidade:**
![alt text](imagens/image-23.png)
![alt text](imagens/image-24.png)
![alt text](imagens/image-25.png)
![alt text](imagens/image-26.png)
![alt text](imagens/image-27.png)

## **Teste de Concorrência**

1. **Thread Group:**
    - Número de Threads: 500 (ou o número esperado de usuários simultâneos)
    - Ramp-Up Period: 1 segundo
    - Duração: 60 segundos (ou o tempo necessário para simular o acesso simultâneo)
    - Synchronizing Timer:
        - Number of Simulated Users to Group by: 100
        - Timeout in milliseconds: 0
2. **Requisições HTTP (Samplers):**
    - **Página principal:**
        - Path: /login
        - Método: POST
3. **Listeners:**
    - View Results Tree
    - Summary Report
    - Aggregate Report
    - Graph Results

**Execução do Teste de Concorrência:**
![alt text](imagens/image-28.png)
![alt text](imagens/image-29.png)
![alt text](imagens/image-30.png)
![alt text](imagens/image-31.png)
![alt text](imagens/image-32.png)
