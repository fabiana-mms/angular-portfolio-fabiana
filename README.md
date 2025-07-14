# Angular Portfolio Fabiana

Portfólio pessoal desenvolvido em Angular 19.

## Estrutura do Projeto

```
├── src/
│   ├── app/                # Componentes e configuração principal do app
│   ├── assets/             # Imagens e outros arquivos estáticos
│   ├── main.ts             # Entrada do app (browser)
│   ├── main.server.ts      # Entrada do app (SSR)
│   ├── server.ts           # Servidor Express para SSR
│   └── styles.scss         # Estilos globais
├── public/                 # Arquivos estáticos públicos (favicon, etc)
├── angular.json            # Configuração do Angular CLI
├── package.json            # Dependências e scripts npm
├── tsconfig*.json          # Configurações TypeScript
└── README.md
```

## CI/CD

O projeto possui integração contínua via GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)) para lint e build.

## Observações

- O projeto utiliza SCSS para estilos.
- Os componentes principais estão em `src/app/components/`.
- Para mais informações sobre Angular CLI, acesse a [documentação oficial](https://angular.dev/tools/cli).

---
Desenvolvido por Fabiana Monteiro
