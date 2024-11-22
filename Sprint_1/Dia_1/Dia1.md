06/05/2024

# Dia 1: Ágil

- Reunião Onboarding do Programa de Bolsas
- Reunião Kick-off do Programa de Bolsas
- Organização
- Git e GitLab
- README

## Organização

#### Matriz de Eisenhower

O que é?
A Matriz de Eisenhower é uma ferramenta de gestão do tempo que ajuda as pessoas a priorizarem suas tarefas em 4 quadrantes com base na importância e na urgência:

<figure>
  <img src="https://3.bp.blogspot.com/-jdBrguSJ1rs/W00Cc_zcTrI/AAAAAAAAfC8/xyDYrqALgJ8IB3qJQCHWRL8CjYVta9qDgCLcBGAs/s1600/3d0deff4-fb45-4f15-8128-4a309803781a-original.jpeg" width="60%">
</figure>

##### Para que serve?

A matriz ajuda as pessoas a gerenciarem seu tempo de forma mais eficiente, concentrando-se nas tarefas que realmente importam e eliminando aquelas que são desnecessárias ou que podem ser adiadas.

##### Como construir?

1. Liste todas as suas tarefas.
2. Classifique cada tarefa com base em sua importância e urgência.
3. Distribua nos quadrantes correspondentes: importante e urgente, importante mas não urgente, urgente mas não importante, não importante e não urgente.
4. Priorize as tarefas de acordo com os quadrantes, começando pelas importantes e urgentes.
5. Programe tarefas importantes mas não urgentes para o futuro, delegue tarefas urgentes mas não importantes, e elimine ou adie tarefas não importantes e não urgentes.

# Git e GitLab

## Git

<figure>
  <img src="https://static.javatpoint.com/tutorial/git/images/why-git.png" width="50%">
</figure>

O Git é um sistema distribuído para controle de versão de código-fonte e colaboração em projetos de desenvolvimento de software. Registra todas as mudanças feitas no código-fonte de um projeto, evitando que algo importante se perca no meio do caminho.

Ele é Opensource, possuí controle de versão de qualquer tipo de arquivo, histórico de alterações e rastreabilidade, facilidade de restauração e um desenvolvimento paralelo podendo criar versões diferentes de uma mesma coisa e podendo até mesclar essas ramificações.


**Instalação**: Primeiro, você precisa instalar o Git no seu sistema (https://git-scm.com/downloads).

**Configuração inicial**: Depois de instalar o Git, você precisa configurar seu nome de usuário e endereço de e-mail. Isso serve para saber quem está realizando essas mudanças e ter controle de acesso do repositório:

```
git config --global user.name "nome"
git config --global user.email "seu@email.com"
```

### Comandos Principais:

1. **git init**: Inicia um novo repositório Git no diretório atual, com nenhum, um ou vários arquivos dentro.

2. **git add [nome do arquivo]**: Adiciona arquivos ao stage, preparando-os para serem commitados.

3. **git add .** ou **git add -A** ou **git add --all**: Adiciona **TODOS** arquivos ao stage, preparando-os para serem commitados.

4. **git status**: Mostra o estado atual do seu repositório Git, incluindo quais arquivos foram modificados, quais estão no stage e quais não estão sendo rastreados pelo Git.

5. **git clone**: Clona um repositório Git existente para o seu diretório local.

6. **git commit -m " "**: Cria um novo commit com os arquivos no stage e uma mensagem associada.

7. **git diff**: Mostra as diferenças entre as alterações no seu diretório de trabalho e o stage.

8. **git diff --cached** ou **git diff --staged**: Mostra as diferenças entre as alterações dos arquivos preparados x comitados.

9. **git log**: Mostra o histórico de commits do seu repositório, exibindo informações como o autor do commit, a data e hora do commit e a mensagem associada.

10. **git branch**: Lista todas as branchs no repositório local.

11. **git branch [nome da branch]**: Cria a branch.

12. **git checkout**: Muda para a branch especificada.

13. **git push**: Envia os commits locais para um repositório remoto.

14. **git pull**: Atualiza seu repositório local com as alterações do repositório remoto.

15. **git merge**: Combina os commits de uma branch na branch atual.

<figure>
  <img src="https://cdn.nulab.com/learn-wp/app/uploads/2022/09/14212531/git_workflow_002.png" width="60%">
</figure>

### Outros Comandos:
 
#### Comandos de informações e configurações:

- **git --version**: Mostra a versão do Git instalada.
- **git config --list**: Lista todas as configurações do Git.
- **git config --global core.editor "code --wait"**: Define o editor padrão para o Visual Studio Code.
- **git config --global init.defaultBranch main**: Muda o nome padrão da branch principal para "main".

#### Comandos de visualização de logs:

- **git log --oneline**: Mostra o hash e a mensagem de cada commit em uma linha.
- **git log -N**: Mostra os últimos N commits.
- **git log --stat**: Mostra a lista de commits e os arquivos modificados.

#### Comandos de manipulação de commits:

- **git commit --amend**: Permite fazer correções em um commit anterior.
- **git checkout <commit_hash>**: Volta para o estado do projeto em um commit específico.
- **git checkout master**: Volta para a branch principal.

#### Comandos de manipulação de branches:

- **git checkout -b <nome_da_branch>**: Cria e muda para uma nova branch.
- **git checkout -f <nome_da_branch>**: Desfaz as alterações rastreadas e muda para uma branch.
- **git branch -d <nome_da_branch>**: Deleta uma branch localmente.
- **git branch -D <nome_da_branch>**: Força a deleção de uma branch local.
- **git branch -m <novo_nome>**: Renomeia a branch localmente.
- **git branch --no-merged**: Lista as branches não mergiadas.
- **git branch --merged**: Lista as branches já mergiadas.

#### Comandos de gerenciamento remoto:

- **git remote -v**: Mostra as URLs do repositório remoto.
- **git remote add origin <URL_do_repositorio>**: Adiciona um repositório remoto.
- **git remote set-url origin <nova_URL>**: Atualiza a URL do repositório remoto.
- **git push --set-upstream origin <nome_da_branch>**: Mapeia a branch local para o repositório remoto.
- **git push --delete origin <nome_da_branch>**: Apaga uma branch do repositório remoto.

#### Comandos de merge:

- **git merge <nome_da_branch>**: Mescla as alterações de uma branch na branch atual.
- **git merge --abort**: Cancela o merge em caso de conflitos.


# GitLab 🦊

É uma plataforma centralizadora de repositórios Git, permitindo hospedar projetos públicos ou privados.

Os repositórios podem ser criados com nome, descrição e visualização. O README fornece informações sobre o repositório.

Recursos como star, observe, fork e o pull request permitem salvar e interagir com projetos de outras pessoas. Issues, milestones e labels ajudam no gerenciamento de problemas e marcos do projeto.

# README
O README é um arquivo importante em um repositório. Ele fornece informações essenciais sobre o projeto para os usuários, ajudando-os a entender do que se trata o projeto e como começar a usá-lo. Geralmente, o README inclui:

**Título e Descrição**: Uma breve descrição do projeto e seu propósito.

**Instalação e Uso**: Instruções sobre como instalar e usar o projeto.

**Demonstração**: Se possível, exemplos de código ou imagens que demonstram o funcionamento do projeto.

**Contribuição**: Informações sobre como os usuários podem contribuir para o projeto, como regras para pull requests e guidelines de contribuição.

**Licença**: A licença de código aberto que o projeto utiliza.

**Suporte**: Informações de contato do mantenedor do projeto ou links para canais de suporte.