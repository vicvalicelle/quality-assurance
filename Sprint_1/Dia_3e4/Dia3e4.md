08/05/2024 e 09/05/2024

# Dia 3 e Dia 4: MasterClass
- Resumo do curso: Início Rápido em Teste e QA

## Fundamentos do teste de software: 🖥️

#### Introdução ao Teste de Software:

Os defeitos cobram juros, então danos que os bugs podem causar incluem atrasos, prejuízos financeiros e danos à imagem da empresa. Portanto, devem ser tratados o quanto antes.

#### Os 7 fundamentos do teste (ISTQB):

1. **Teste demonstra a presença de defeitos**: Embora o teste identifique defeitos, não pode garantir que não haverá mais nenhum.
2. **Teste exaustivo não é possível**: É impraticável testar todas as combinações possíveis, portanto, é necessário focar em casos triviais e, principalmente, em riscos e prioridades, utilizando uma análise de prioridades.
3. **Teste antecipado**: Iniciar o teste o mais cedo possível é fundamental, pois é mais econômico identificar e corrigir defeitos no início do ciclo de desenvolvimento. Descobrir problemas mais tarde pode ser muito mais caro.
4. **Agrupamento de defeitos**: Geralmente, a maioria dos defeitos está concentrada em pequenos módulos do software. Embora eles possam estar distribuídos de forma heterogênea, é comum que defeitos semelhantes estejam agrupados em áreas específicas.
5. **Paradoxo do pesticida**: Testes repetidos podem não encontrar novos defeitos, então é essencial revisitar e atualizar os testes com frequência para aumentar a chance de identificar mais erros.
6. **Teste depende do contexto**: A quantidade e a abordagem dos testes dependem do contexto do projeto, incluindo os riscos envolvidos. Projetos com mais riscos geralmente exigem mais testes.
7. **A ilusão da ausência de erros**: Um software pode parecer não ter erros, mas isso não garante que atenda exatamente ao que o cliente pediu. É importante garantir que o software não apenas funcione corretamente, mas também atenda às necessidades e expectativas do cliente.

#### Teste x Qualidade:

O teste visa encontrar bugs no produto, enquanto o QA trabalha para melhorar o processo e, assim, o produto e prevenindo a reincidência de erros. 

#### Erro x Defeito x Falha:

Erros são reconhecidos pela pessoa que o comete, defeitos são esses erros encontrados por terceiros e falhas ocorrem quando os defeitos não são encontrados e corrigidos e acabam sendo executados ou chegam ao cliente.

#### Tipos de Testes (ISO 25010):

<figure>
  <img src="https://www.impresa24web.it/dev/wp-content/uploads/2020/03/iso-quality-software-768x645.jpg" width="70%">
</figure>

1. Adequação Funcional: Testa se o software faz o que deveria fazer, olhando para a completude, correção e adequação.

2. Usabilidade: Avalia a facilidade de uso do software, considerando aspectos como aprendizado, operação, navegação, acessiblidade e estética.

3. Compatibilidade: Verifica se o software é compatível e pode se comunicar com outros sistemas ou ambientes.

4. Confiança: Avalia a capacidade do software de prevenir falhas antes que aconteçam, sua disponibilidade e tolerância a falhas, bem como sua capacidade de recuperação.

5. Eficiência: Examina o desempenho do software, sua utilização de recursos e sua capacidade de atender às demandas.

6. Manutenibilidade: Analisa a facilidade com que o software pode ser modificado, reutilizado, analisado e testado.

7. Portabilidade: Avalia a capacidade do software de funcionar em diferentes contextos e sua facilidade de adaptação, instalação e substituição.

8. Segurança: Verifica se o software atende a requisitos de segurança, incluindo confidencialidade, integridade, autenticidade e responsabilidade.

### Testes Automatizados x Testes Manuais:
1. **Testes Automatizados**:
    - São executados por ferramentas de automação, como scripts ou frameworks de teste.
    - São repetitivos e consistentes, o que ajuda a identificar regressões (manter o que já está correto, mesmo quando novas funcionalidades são adicionadas).
    - Cobrem cenários específicos e são úteis para testar funcionalidades estáveis.
    - Benefícios: velocidade, consistência e escalabilidade.
2. **Testes Manuais**:
    - Realizados por testadores humanos.
    - São exploratórios e adaptáveis, adequados para testar novas funcionalidades e mudanças.
    - Incluem testes de confirmação (verificação de defeitos corrigidos).
    - Benefícios: capacidade de avaliar a experiência do usuário, criatividade e intuição.
    - Limitações: lentidão, inconsistência e dificuldade em cobrir todos os cenários.
    
Quanto maior a cobertura de testes (automatizados ou manuais), mais rápido os defeitos podem ser identificados.