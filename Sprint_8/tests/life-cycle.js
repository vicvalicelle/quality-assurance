import { sleep } from "k6";

// 1. init code
// (inicioliza variaveis, define options (VUS, duration, Tresholds))
let counter = 1

export function setup() {
    // 2. setup code (executa apenas 1 vez antes da função principal)
    console.log(`SETUP ${counter}`)
}

export default function () {
    // 3. VU code (Pontode entrada dos VUs, onde realizam os testes/chamadas na API)
    console.log(`FUNÇÃO PRINCIPAL - ${counter} VU = ${__VU} ITER = ${__ITER}`)
    counter = counter + 1
    sleep (1)
}

export function teardown() {
    // 4. teardown code (executa apenas 1 vez após a execucão da funcão principal)
    console.log(`TEARDWON - ${counter}`)
}
