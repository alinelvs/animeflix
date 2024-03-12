# animeflix

animeflix é um projeto empolgante que oferece uma experiência imersiva de streaming de anime. Neste README, vamos explorar as tecnologias e conceitos-chave por trás deste projeto, destacando seus pontos fortes e diferenciais.

## Funcionalidades Implementadas

### Cache e Memoização

Para garantir um desempenho otimizado, implementamos um sistema de cache e memoização. Isso significa que informações da API são armazenadas em cache e atualizadas apenas a cada hora. Isso não apenas melhora a velocidade de resposta, mas também reduz a carga nos servidores.

```javascript
const response = await api('/anime', {
next: {
revalidate: 60 * 60,
},
})
```

### Zod: Validação de Variáveis de Ambiente

Utilizamos o Zod para garantir a integridade das variáveis de ambiente necessárias para o funcionamento do aplicativo. Se houver algum problema com essas variáveis, uma exceção será lançada, garantindo que o aplicativo funcione corretamente.

```javascript
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parseEnv = envSchema.safeParse(process.env)
```

## Tecnologias Utilizadas

### Next.js

O AnimeFlix é construído com o Next.js, um framework React que oferece renderização do lado do servidor, geração estática e outras funcionalidades avançadas. Com o Next.js, conseguimos criar uma aplicação web rápida e escalável.

### Tailwind CSS

Para uma estilização eficiente e consistente, escolhemos o Tailwind CSS. Ele nos permite criar interfaces bonitas com uma abordagem baseada em componentes e classes utilitárias. Com o Tailwind, o desenvolvimento é ágil e flexível.

### TypeScript

Para melhorar a qualidade e a segurança do código, optamos pelo TypeScript. Com o TypeScript, podemos detectar erros em tempo de compilação, fornecendo uma base sólida para o desenvolvimento e manutenção do projeto.

## Estrutura do Projeto

```plaintext
animeflix/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── data/
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── prettier.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md

```
## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o aplicativo para produção.
- `start`: Inicia o aplicativo em modo de produção.
- `lint`: Executa a verificação de linting do código.

## Dependências Principais

- **lucide-react**: Biblioteca de ícones para uma interface elegante.
- **next**: Framework React para renderização avançada.
- **react**: Biblioteca principal para a construção de interfaces de usuário.
- **react-dom**: Manipulação do DOM para aplicativos React.
- **tailwind-merge**: Ferramenta para mesclar configurações Tailwind.
- **zod**: Biblioteca de validação de esquema para JavaScript e TypeScript.

## Dependências de Desenvolvimento

- **@rocketseat/eslint-config**: Configuração ESLint.
- **@types/node**: Tipos de declaração para Node.js.
- **@types/react**: Tipos de declaração para React.
- **@types/react-dom**: Tipos de declaração para ReactDOM.
- **autoprefixer**: Plugin PostCSS para adicionar prefixos de fornecedor automaticamente.
- **eslint**: Ferramenta de linting para JavaScript e TypeScript.
- **eslint-config-next**: Configuração ESLint para projetos Next.js.
- **postcss**: Ferramenta para transformação de CSS com JavaScript.
- **prettier-plugin-tailwindcss**: Plugin Prettier para Tailwind CSS.
- **tailwindcss**: Estrutura CSS utilitária para desenvolvimento ágil.
- **typescript**: Linguagem de programação TypeScript para desenvolvimento robusto.

---

animeflix é mais do que um simples projeto - é uma jornada para explorar o mundo dos animes de uma maneira nova e empolgante. Sinta-se à vontade para explorar o código-fonte e contribuir para tornar esta experiência ainda melhor!




