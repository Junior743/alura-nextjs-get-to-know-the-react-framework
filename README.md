# Alura Next.js: Conheça o Framework React

Este projeto é uma aplicação Next.js desenvolvida para demonstrar as capacidades do framework React. Serve como uma plataforma de blog ou exibição de conteúdo, apresentando componentes para layout, avatares de usuário e cartões de postagem.

## Tecnologias Utilizadas

- **Next.js** (v14.2.33)
- **React**
- **TypeScript**
- **Winston** (para logging)

## Primeiros Passos

Siga estas etapas para configurar e executar o projeto localmente:

### Pré-requisitos

Certifique-se de ter o Node.js (v20.18.1) e o npm (v10.8.2) instalados.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd alura-nextjs-get-to-know-the-react-framework
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `src/app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

### Construindo o Projeto

Para construir a aplicação para produção:

```bash
npm run build
```

### Iniciando o Servidor de Produção

Para executar a aplicação construída em modo de produção:

```bash
npm run start
```

### Linting

Para executar o linter:

```bash
npm run lint
```

Para executar o linter e corrigir automaticamente os problemas:

```bash
npm run lint:fix
```

### Executando a API Mock

Para iniciar o servidor da API mock, que serve dados de `posts.json`:

```bash
npm run api
```

A API estará disponível em `http://localhost:3042`.

## Estrutura do Projeto

O projeto segue uma estrutura Next.js padrão com foco em componentes modulares:

- `src/app`: Contém as páginas principais da aplicação e o layout.
- `src/components`: Abriga componentes de UI reutilizáveis, como `Aside`, `Avatar` e `CardPost`.
- `public`: Para ativos estáticos, como imagens (`logo.png`, `favicon.ico`).
- `src/logger.ts`: Configura o Winston para o registro de logs da aplicação.

## Logging

Este projeto utiliza [Winston](https://github.com/winstonjs/winston) para um logging robusto. Os logs são configurados da seguinte forma:

- **`error.log`**: Contém logs com nível de importância `error` ou superior.
- **`combined.log`**: Contém todos os logs com nível de importância `info` ou superior.
- **Saída do Console**: Em ambientes de desenvolvimento (`NODE_ENV !== 'production'`), os logs também são exibidos no console.

## Saiba Mais

Para saber mais sobre Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório Next.js no GitHub](https://github.com/vercel/next.js/) - seu feedback e contribuições são bem-vindos!
