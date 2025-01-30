# Day 3: MasterClass

- Udemy Course: Getting Started with K6​​​​​​​

# First Steps with k6

## Types of Performance Tests on k6

- **Smoke Test:**
    - **Purpose:** Quick check of system health under minimum load.
    - **Scenario:** Execution with few virtual users (VUs) and short execution time.
    - **Metrics:** Response time, error rate.
- **Load Test:**
    - **Objective:** To evaluate performance under typical expected user load.
    - **Scenario:** Simulation of real traffic with realistic VUs and usage patterns.
    - **Metrics:** Response time, throughput, error rate.
- **Stress Test:**
    - **Objective:** Find the breaking point and identify bottlenecks under extreme load.
    - **Scenario:** Gradual increase in load beyond expectations, observing system behavior.
    - **Metrics:** Response time, throughput, error rate.
- **Spike Test:**
    - **Objective:** To assess the ability to handle sudden spikes in traffic.
    - **Scenario:** Sudden and temporary increase in VU load.
    - **Metrics:** Response time, error rate, recovery time.
- **Soak Test:**
    - **Objective:** Detect long-term problems such as memory leaks.
    - **Scenario:** Running for an extended period under moderate load.
    - **Metrics:** Response time, error rate.

**Metrics Concepts**

- **Metrics:** Numerical values that measure performance (e.g. `http_req_duration` , `http_reqs` , `iterations` ).
- **Checks:** Custom assertions about system behavior (e.g. checking HTTP status code).
- **Thresholds:** Acceptable limits for the metrics. The test fails if the limits are exceeded.

**Types of Metrics**

- **Metrics:**
    - **Counters:** add values.
    - **Gauges:** Track the lowest, highest, and most recent values.
    - **Rates:** Track how often a non-zero value occurs.
    - **Trends:** Calculates statistics for multiple values (such as mean, mode, or percentile).

**Metrics Practices**

- **Standard built-in metrics**

<div class="table-wrapper-module--table-wrapper--0fa35"><table>
<thead><tr>
<th>Metric Name</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>virus</td>
<td>Gauge</td>
<td>Current number of active virtual users</td>
</tr>
<tr>
<td>vus_max</td>
<td>Gauge</td>
<td>Max possible number of virtual users (VU resources are pre-allocated, to avoid affecting performance when scaling up load )</td>
</tr>
<tr>
<td>iterations</td>
<td>Counter</td>
<td>The aggregate number of times the VUs execute the JS script (the <span class="code-inline">default</span> function).</td>
</tr>
<tr>
<td>iteration_duration</td>
<td>Trend</td>
<td>The time to complete one full iteration, including time spent in <span class="code-inline">setup</span> and <span class="code-inline">teardown</span> . To calculate the duration of the iteration's function for the specific scenario.</td>
</tr>
<tr>
<td>dropped_iterations</td>
<td>Counter</td>
<td>The number of iterations that weren't started due to lack of VUs (for the arrival-rate executors) or lack of time (expired maxDuration in the iteration-based executors).</td>
</tr>
<tr>
<td>data_received</td>
<td>Counter</td>
<td>The amount of data received.</td>
</tr>
<tr>
<td>data_sent</td>
<td>Counter</td>
<td>The amount of data sent.</td>
</tr>
<tr>
<td>checks</td>
<td>Rate</td>
<td>The rate of successful checks.</td>
</tr>
</tbody>
</table></div>

- **HTTP-specific built-in metrics**

<div class="table-wrapper-module--table-wrapper--0fa35"><table>
<thead><tr>
<th>Metric Name</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>http_reqs</td>
<td>Counter</td>
<td>How many total HTTP requests k6 generated.</td>
</tr>
<tr>
<td>http_req_blocked</td>
<td>Trend</td>
<td>Time spent blocked (waiting for a free TCP connection slot) before initiating the request. <span class="code-inline">float</span>
</td>
</tr>
<tr>
<td>http_req_connecting</td>
<td>Trend</td>
<td>Time spent establishing TCP connection to the remote host. <span class="code-inline">float</span>
</td>
</tr>
<tr>
<td>http_req_tls_handshaking</td>
<td>Trend</td>
<td>Time spent handshaking TLS session with remote host</td>
</tr>
<tr>
<td>http_req_sending</td>
<td>Trend</td>
<td>Time spent sending data to the remote host. <span class="code-inline">float</span>
</td>
</tr>
<tr>
<td>http_req_waiting</td>
<td>Trend</td>
<td>Time spent waiting for response from remote host (aka “time to first byte”, or “TTFB”). <span class="code-inline">float</span>
</td>
</tr>
<tr>
<td>http_req_receiving</td>
<td>Trend</td>
<td>Time spent receiving response data from the remote host. <span class="code-inline">float</span>
</td>
</tr>
<tr>
<td>http_req_duration</td>
<td>Trend</td>
<td>Total time for the request. It's equal to <span class="code-inline">http_req_sending + http_req_waiting + http_req_receiving</span> (ie how long did the remote server take to process the request and respond, without the initial DNS lookup/connection times). <span class="code-inline">float</span>
</td>
</tr>
<tr>
<td>http_req_failed</td>
<td>Rate</td>
<td>The rate of failed requests according to setResponseCallback.</td>
</tr>
</tbody>
</table></div>