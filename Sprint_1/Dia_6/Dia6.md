13/05/2024

# Dia 6: MasterClass
- Fundamentos do teste de software (Back-End)
- Pirâmide de teste

### Fundamentos do Teste de Software no Back-end:
   - O teste de software no back-end é crucial para garantir a qualidade e a robustez das aplicações.
   - Ele ocorre em paralelo com o ciclo de desenvolvimento, antecipando erros e aumentando a qualidade do produto final.

## Pirâmide de Testes:

<figure>
  <img src="https://1ee1ed924b.cbaul-cdnwnd.com/e5c4fe4592bf06fe7ef86a0e80f403f0/200000021-8d3c58d3c8/700/Test-Pyramid-Eximia-1024x765.png?ph=1ee1ed924b" width="50%">
</figure>

A pirâmide de testes é uma estratégia para distribuir os diferentes tipos de testes em relação à sua quantidade e complexidade. Define níveis de teste e quantos deveriam ser feitos em cada um. A base da pirâmide consiste em testes de unidade, seguidos por testes de integração e, no topo, testes end-to-end (E2E).

1. **Testes de Unidade**:
   - Realizados na menor unidade de código testável da aplicação, independentemente da integração.
   - São pequenos, rápidos e simples de fazer e manter.
   - Utilizam objetos "falsos" para isolar a unidade de código em teste.
   - São importantes porque são rápidos de rodar e identificam claramente onde estão os problemas se falharem.

2. **Testes de Integração**:
   - Testam módulos integrados para garantir que funcionem corretamente em conjunto.
   - São mais demorados e complexos que os testes de unidade, mas mais simples e rápidos que os testes E2E.
   - Garantem que as funcionalidades integradas ainda estejam operando conforme o esperado.

3. **Testes End-to-End (E2E)**:
   - Simulam o ambiente completo da aplicação e verificam se o comportamento esperado ocorre.
   - São executados em ambientes controlados e podem ser difíceis de escrever e demorados para serem executados.
   - Cobrem os fluxos principais da aplicação e podem identificar falhas não tão triviais.

Uma base sólida de testes unitários é crucial para garantir a estabilidade e a manutenibilidade do sistema, enquanto os testes de interface do usuário devem ser usados com moderação devido à sua fragilidade e custo de manutenção, além da necessidade de diferentes tipos de testes para obter uma cobertura abrangente e eficaz.