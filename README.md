# 🛒 Central de Achados & Ofertas — Vitrine Inteligente

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Uma aplicação web dinâmica, responsiva e otimizada para a exibição de produtos físicos e infoprodutos de plataformas de afiliados (**Mercado Livre**, **Kiwify** e **Kirvano**). 

O projeto conta com captura de demandas em tempo real enviadas para uma base de dados no **Google Sheets** via Webhook sem expor informações sensíveis do usuário/administrador.

---

## 🌟 Funcionalidades Principais

- 📱 **Layout 100% Responsivo:** Adaptado para Smartphones, Tablets e Desktops.
- ⚡ **Filtros em Tempo Real:** Pesquisa instantânea por nome, categoria ou palavra-chave.
- 🏷️ **Categorização Dinâmica:** Abas separadas por plataforma com geração automática de botões de categoria.
- ⏱️ **Gatilhos de Escassez (CRO):** Cronômetro regressivo de ofertas diárias e badges de prova social (avaliações ★★★★★ e contagem de vendas).
- 📊 **Inteligência de Mercado (Lead Capture):** Modal de solicitação de ofertas personalizadas que grava os pedidos diretamente no Google Sheets via Google Apps Script.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** HTML5, Tailwind CSS (CDN), FontAwesome Icons.
- **Lógica e Interatividade:** JavaScript (Vanilla JS ES6+).
- **Back-end / Base de Dados:** Google Apps Script (REST API / Webhook) + Google Sheets.
- **Hospedagem & Deploy:** Vercel.

---

## 📂 Estrutura do Projeto

```text
├── assents/
│   └── mercado_livre_files/   # Imagens locais otimizadas dos produtos
├── css/
│   └── styles.css             # Estilos personalizados complementares
├── js/
│   └── script.js              # Lógica principal, dados dos produtos e chamadas API
├── .gitignore                 # Arquivos ignorados pelo Git
├── index.html                 # Estrutura principal da aplicação
└── README.md                  # Documentação do repositório
