# Dia 3: MasterClass
- Curso da Udemy: Primeiros passos com K6​​​​​​​

# Primeiros Passos com k6

## Tipos de Teste de Performance no k6

- **Smoke Test:**
    - **Objetivo:** Verificação rápida da saúde do sistema sob carga mínima.
    - **Cenário:** Execução com poucos usuários virtuais (VUs) e tempo de execução curto.
    - **Métricas:** Tempo de resposta, taxa de erro.
- **Load Test:**
    - **Objetivo:** Avaliar o desempenho sob carga típica esperada de usuários.
    - **Cenário:** Simulação do tráfego real com VUs e padrões de uso realistas.
    - **Métricas:** Tempo de resposta, throughput, taxa de erro.
- **Stress Test:**
    - **Objetivo:** Encontrar o ponto de ruptura e identificar gargalos sob carga extrema.
    - **Cenário:** Aumento gradual da carga além do esperado, observando o comportamento do sistema.
    - **Métricas:** Tempo de resposta, throughput, taxa de erro.
- **Spike Test:**
    - **Objetivo:** Avaliar a capacidade de lidar com picos repentinos de tráfego.
    - **Cenário:** Aumento súbito e temporário da carga de VUs.
    - **Métricas:** Tempo de resposta, taxa de erro, tempo de recuperação.
- **Soak Test:**
    - **Objetivo:** Detectar problemas de longo prazo, como vazamentos de memória.
    - **Cenário:** Execução por um período prolongado sob carga moderada.
    - **Métricas:** Tempo de resposta, taxa de erro.

**Conceitos de Métricas**

- **Métricas:** Valores numéricos que medem o desempenho (ex: `http_req_duration`, `http_reqs`, `iterations`).
- **Checks:** Afirmações personalizadas sobre o comportamento do sistema (ex: verificar código de status HTTP).
- **Thresholds:** Limites aceitáveis para as métricas. O teste falha se os limites forem ultrapassados

**Tipos de Métricas**

- **Métricas:**
    - **Counters:** somam valores.
    - **Gauges:** rastreiam os valores menores, maiores e mais recentes.
    - **Rates:** rastreiam a frequência com que um valor diferente de zero ocorre.
    - **Trends:** calcula estatísticas para vários valores (como média, moda ou percentil).

**Práticas de Métricas**

- **Standard built-in metrics**
<div class="table-wrapper-module--table-wrapper--0fa35"><table><thead><tr><th>Metric Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>vus</td><td>Gauge</td><td>Current number of active virtual users</td></tr><tr><td>vus_max</td><td>Gauge</td><td>Max possible number of virtual users (VU resources are pre-allocated</a>, to avoid affecting performance when scaling up load )</td></tr><tr><td>iterations</td><td>Counter</td><td>The aggregate number of times the VUs execute the JS script (the <span class="code-inline">default</span> function).</td></tr><tr><td>iteration_duration</td><td>Trend</td><td>The time to complete one full iteration, including time spent in <span class="code-inline">setup</span> and <span class="code-inline">teardown</span>. To calculate the duration of the iteration's function for the specific scenario.</td></tr><tr><td>dropped_iterations</td><td>Counter</td><td>The number of iterations that weren't started due to lack of VUs (for the arrival-rate executors) or lack of time (expired maxDuration in the iteration-based executors).</td></tr><tr><td>data_received</td><td>Counter</td><td>The amount of received data.</td></tr><tr><td>data_sent</td><td>Counter</td><td>The amount of data sent.</td></tr><tr><td>checks</td><td>Rate</td><td>The rate of successful checks.</td></tr></tbody></table></div>

- **HTTP-specific built-in metrics**
<div class="table-wrapper-module--table-wrapper--0fa35"><table><thead><tr><th>Metric Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>http_reqs</td><td>Counter</td><td>How many total HTTP requests k6 generated.</td></tr><tr><td>http_req_blocked</td><td>Trend</td><td>Time spent blocked (waiting for a free TCP connection slot) before initiating the request. <span class="code-inline">float</span></td></tr><tr><td>http_req_connecting</td><td>Trend</td><td>Time spent establishing TCP connection to the remote host. <span class="code-inline">float</span></td></tr><tr><td>http_req_tls_handshaking</td><td>Trend</td><td>Time spent handshaking TLS session with remote host</td></tr><tr><td>http_req_sending</td><td>Trend</td><td>Time spent sending data to the remote host. <span class="code-inline">float</span></td></tr><tr><td>http_req_waiting</td><td>Trend</td><td>Time spent waiting for response from remote host (a.k.a. “time to first byte”, or “TTFB”). <span class="code-inline">float</span></td></tr><tr><td>http_req_receiving</td><td>Trend</td><td>Time spent receiving response data from the remote host. <span class="code-inline">float</span></td></tr><tr><td>http_req_duration</td><td>Trend</td><td>Total time for the request. It's equal to <span class="code-inline">http_req_sending + http_req_waiting + http_req_receiving</span> (i.e. how long did the remote server take to process the request and respond, without the initial DNS lookup/connection times). <span class="code-inline">float</span></td></tr><tr><td>http_req_failed</td><td>Rate</td><td>The rate of failed requests according to setResponseCallback.</td></tr></tbody></table></div>