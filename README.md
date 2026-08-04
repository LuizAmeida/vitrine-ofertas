
---

# 🛒 Central de Achados & Cursos - Vitrine de Ofertas

> **Aplicação Web Full-Stack (Front-end & Serverless Integration)** desenvolvida para centralizar, filtrar e converter ofertas de infoprodutos e produtos físicos das principais plataformas do mercado (**Mercado Livre**, **Kiwify** e **Kirvano**), integrada a uma API de captura e validação em tempo real com **Google Sheets**.

![Status do Projeto](https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen?style=for-the-badge)
![Deploy Vercel](https://img.shields.io/badge/DEPLOY-VERCEL-black?style=for-the-badge&logo=vercel)
![Licença](https://img.shields.io/badge/LICEN%C3%87A-MIT-blue?style=for-the-badge)

---

## 🔗 Link do Projeto Online

🚀 **Acesse a aplicação rodando em produção:**  
👉 **[Central de Achados & Cursos na Vercel](https://vitrine-ofertas-nine.vercel.app/)**

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Arquitetura & Tecnologias Utilizadas](#-arquitetura--tecnologias-utilizadas)
- [Validação Rigorosa & Validador de Contato](#-validação-rigorosa--validador-de-contato)
- [Integração com Google Sheets (API Web App)](#-integração-com-google-sheets-api-web-app)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Como Rodar o Projeto Localmente](#-como-rodar-o-projeto-localmente)
- [Autor](#-autor)

---

## 🎯 Visão Geral

A **Central de Achados & Cursos** foi projetada para resolver a fragmentação de ofertas de afiliados. A plataforma entrega uma experiência de navegação fluida (*SPA - Single Page Application*), permitindo que o visitante navegue entre abas sem recarregar a página, filtre por categorias, pesquise por palavra-chave em tempo real e realize solicitações de produtos customizados.

### 📊 Cobertura da Vitrine:
- 📦 **Mercado Livre:** 35 Produtos Físicos selecionados.
- 🎓 **Kiwify:** 19 Infoprodutos / Cursos com links diretos de Sales Pages.
- 🚀 **Kirvano:** 16 Infoprodutos / Ferramentas validadas.

---

## ✨ Funcionalidades Principais

* **🔄 Troca Dinâmica de Abas (Plataformas):** Alternância instantânea entre Mercado Livre, Kiwify e Kirvano mantendo o estado global.
* **🏷️ Filtro Inteligente por Categorias:** Extração dinâmica das categorias ativas do array de produtos selecionado.
* **🔍 Busca em Tempo Real (`Instant Search`):** Filtragem ao digitar no campo de busca por título, vendedor ou categoria.
* **⏳ Cronômetro Regressivo de Ofertas:** Script em JavaScript puro que simula a contagem regressiva diária até a meia-noite.
* **🎯 Funil de Pedido Customizado:** Botão inteligente no banner que rola suavemente (`scrollIntoView`) e foca (`.focus()`) no campo de busca customizada.
* **📝 Modal de Captura de Leads:** Modal responsivo em Tailwind CSS para registrar solicitações de produtos não encontrados na vitrine.
* **📱 Responsividade Total:** Design adaptado para telas mobile, tablets e desktops.

---

## 🛠️ Arquitetura & Tecnologias Utilizadas

### **Front-end**
* **HTML5 Semantic & Accessibility:** Estrutura semântica com foco em SEO e acessibilidade visual.
* **Tailwind CSS (v3 via CDN):** Estilização moderna através de classes utilitárias, efeitos de vidro (`backdrop-blur`), gradientes e animações.
* **JavaScript ES6+ (Vanilla JS):** Lógica de manipulação do DOM, controle de estado global, filtragens de listas, cronômetro e tratamento de requisições assíncronas (`Fetch API`).
* **Font Awesome (v6.4.0):** Conjunto de ícones vetoriais interativos.

### **Back-end & Serverless**
* **Google Apps Script (`Code.gs`):** Web App Serverless atuando como endpoint HTTP POST para recebimento dos formulários.
* **Google Sheets API:** Banco de dados relacional simplificado para armazenamento automático de solicitações de leads.
* **Vercel:** Plataforma de hospedagem e deploy contínuo (CI/CD) integrado ao GitHub.

---

## 🛡️ Validação Rigorosa & Validador de Contato

Para garantir a qualidade da base de dados enviada à planilha do Google Sheets e evitar registros nulos ou falsos, a aplicação conta com uma camada de validação customizada no cliente:

```javascript
// Validação estrita de e-mails (apenas domínios comerciais válidos)
// E validação de números de WhatsApp/Telefone com verificação de DDD e DDI 55
function validarEFormatarContato(contatoBruto) { ... }
