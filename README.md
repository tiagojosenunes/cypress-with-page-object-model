# Automacao E2E com Cypress, Page Object Model (POM) e GitHub Actions

Projetado e desenvolvido por Tiago José Nunes como suíte de automação de testes End-to-End (E2E) para a plataforma SauceDemo (https://www.saucedemo.com/). O projeto aplica boas práticas de Engenharia de Qualidade de Software (QA), utilizando a arquitetura Page Object Model (POM), integração contínua no GitHub Actions, relatórios gráficos e gestão segura de dados sensíveis com cy.env().

---

## Funcionalidades e Cobertura de Testes

### Módulo de Autenticação (login.cy.js)
* Login com Sucesso: Validação do fluxo completo de autenticação com redirecionamento de tela.
* Credenciais Inválidas: Tratamento e verificação de mensagens de erro nativas.
* Hooks de Ciclo de Vida: Uso de beforeEach e afterEach para reset de estado da aplicação e capturas de tela (screenshots).

### Módulo de Carrinho (carrinho.cy.js)
* Adição Dinâmica: Seleção e adição de produtos com formatação dinâmica de seletores (data-test).
* Validação do Carrinho: Verificação do contador no cabeçalho (Header Badge) e persistência dos produtos na página do carrinho.
* Remoção de Produtos: Fluxo de exclusão e atualização do estado do carrinho.

### Módulo de Checkout (checkout.cy.js)
* Jornada Completa (E2E): Login -> Adição ao carrinho -> Preenchimento de dados de entrega -> Resumo -> Confirmação de pedido com sucesso.
* Validação de Campos Obrigatórios: Verificação de mensagens de erro ao omitir dados no formulário (ex: CEP/Postal Code em branco).

---

## Tecnologias Utilizadas

* Framework de Testes: Cypress (v16.0.0)
* Linguagem: JavaScript (Node.js)
* Padrão Arquitetural: Page Object Model (POM)
* CI/CD: GitHub Actions
* Gestão de Ambientes: dotenv e GitHub Secrets (cy.env())
* Relatórios: cypress-mochawesome-reporter

---

## Estrutura do Projeto (POM)

```text
cypress/
├── e2e/                      # Arquivos de especificações de testes (.cy.js)
│   ├── carrinho.cy.js
│   ├── checkout.cy.js
│   └── login.cy.js
├── pages/                    # Page Objects (Ações e Seletores por página)
│   ├── cart/
│   ├── checkout/
│   ├── header/
│   ├── inventory/
│   └── login/
├── reports/                  # Relatórios gerados automaticamente (HTML)
├── screenshots/              # Evidências visuais de execuções
└── support/                  # Configurações globais e comandos customizados