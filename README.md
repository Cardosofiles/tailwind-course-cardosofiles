<div align="center">

<h1 align="center">🚀 Curso Introdutório de TailwindCSS</h1>

### Informações

![Instituição](https://img.shields.io/badge/Instituição-Rocketseat-0078D4?style=for-the-badge&logo=azuredevops)
![Curso](https://img.shields.io/badge/Curso-TailwindCSS-4B8BBE?style=for-the-badge&logo=github)
![Professor](https://img.shields.io/badge/Professor-Diego%20Fernandes-FFCA28?style=for-the-badge&logo=linkedin)

**Instituição:** [Rocketseat](https://www.rocketseat.com.br/)  
**Curso:** Introdução ao TailwindCSS  
**Professor:** [Diego Schell Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)

Repositório com o código-fonte desenvolvido durante o curso introdutório de TailwindCSS. O objetivo é apresentar, de forma prática, conceitos essenciais do desenvolvimento frontend com TailwindCSS, incluindo design responsivo, componentes reutilizáveis e integração com frameworks JavaScript.

</div>

---

## 📋 Sobre o Projeto

Este projeto é uma **aplicação de dashboard moderno** desenvolvida durante o curso de TailwindCSS da Rocketseat. A aplicação demonstra conceitos avançados de design responsivo, componentização e acessibilidade, utilizando as melhores práticas do TailwindCSS em conjunto com React e Next.js.

### ✨ Funcionalidades

- 🏠 **Dashboard Interativo**: Interface principal com navegação intuitiva
- 👤 **Gerenciamento de Perfil**: Formulário completo para edição de dados pessoais
- 📁 **Upload de Arquivos**: Sistema de upload com preview de imagens
- 📊 **Múltiplas Páginas**: Dashboard, Projetos, Tarefas, Relatórios, Usuários, Suporte e Configurações
- 🌙 **Modo Escuro**: Interface adaptativa com tema claro e escuro
- 📱 **Design Responsivo**: Layout otimizado para desktop, tablet e mobile
- ♿ **Acessibilidade**: Componentes acessíveis usando Radix UI
- 🎨 **Animações Suaves**: Transições e animações com Framer Motion

### 🎯 Conceitos Aplicados

- **Utility-First**: Aplicação dos princípios utility-first do TailwindCSS
- **Design System**: Criação de componentes reutilizáveis e variantes
- **Grid Layout**: Uso avançado de CSS Grid para layouts complexos
- **Flexbox**: Layouts flexíveis e responsivos
- **Custom Theme**: Personalização de cores, espaçamentos e animações
- **Component Composition**: Padrão de composição de componentes
- **TypeScript**: Tipagem estática para maior segurança no desenvolvimento

## 🛠 Tecnologias Utilizadas

### Core

- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem com tipagem estática
- **[React 18](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[Next.js 14](https://nextjs.org/)** - Framework React com SSR e otimizações

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Tailwind Variants](https://www.tailwind-variants.org/)** - Variantes de componentes
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge de classes Tailwind
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis headless
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna

### Animation & Interaction

- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
- **[AutoAnimate](https://auto-animate.formkit.com/)** - Animações automáticas
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação e Execução

1. **Clone o repositório**

```bash
git clone https://github.com/Cardosofiles/tailwind-css-course.git
cd tailwind-css-course
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto em modo de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse no navegador**

```
http://localhost:3000
```

### Comandos Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera a build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js 14
│   ├── globals.css        # Estilos globais e configurações Tailwind
│   ├── layout.tsx         # Layout principal da aplicação
│   ├── page.tsx           # Página inicial (Settings/Profile)
│   └── routes/            # Páginas da aplicação
│       ├── dashboard/     # Dashboard principal
│       ├── projects/      # Gerenciamento de projetos
│       ├── tasks/         # Lista de tarefas
│       ├── reporting/     # Relatórios e analytics
│       ├── user/          # Gerenciamento de usuários
│       ├── support/       # Suporte e ajuda
│       └── settings/      # Configurações avançadas
├── components/            # Componentes reutilizáveis
│   ├── Button.tsx         # Componente de botão com variantes
│   ├── Input.tsx          # Sistema de input composto
│   ├── Form/              # Componentes de formulário
│   │   ├── Textarea.tsx   # Area de texto
│   │   ├── Select/        # Select customizado
│   │   └── FileInput/     # Sistema de upload
│   ├── Sidebar/           # Navegação lateral
│   └── SettingsTabs/      # Tabs de configurações
└── utils/                 # Funções utilitárias
    └── format-bytes.ts    # Formatação de tamanhos de arquivo
```

## 🎨 Customizações do Tailwind

O projeto inclui configurações customizadas no `tailwind.config.ts`:

- **Grid Layouts**: Templates personalizados para app e formulários
- **Cores Customizadas**: Paleta violet e error personalizadas
- **Animações**: Keyframes para slideDown e slideUp
- **Bordas**: Larguras customizadas de borda

## 📱 Responsividade

A aplicação foi desenvolvida com abordagem **mobile-first** e inclui:

- **Breakpoints**: Mobile (sm), Tablet (md), Desktop (lg, xl)
- **Navigation**: Menu hambúrguer no mobile, sidebar fixa no desktop
- **Forms**: Layout em coluna no mobile, grid no desktop
- **Components**: Adaptação automática de spacing e sizing

## ♿ Acessibilidade

Implementação de práticas de acessibilidade:

- **Semantic HTML**: Uso correto de elementos semânticos
- **ARIA Labels**: Labels descritivos para leitores de tela
- **Keyboard Navigation**: Navegação completa via teclado
- **Focus Management**: Estados de foco visíveis e lógicos
- **Color Contrast**: Contraste adequado em todos os temas

## 📚 Aprendizados do Curso

- Configuração e personalização do TailwindCSS
- Criação de design systems com utility classes
- Implementação de dark mode
- Desenvolvimento de componentes compostos
- Técnicas avançadas de layout responsivo
- Integração com bibliotecas de componentes
- Otimização de performance com TailwindCSS

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commitar suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Cardosofiles**

- GitHub: [Cardosofiles](https://github.com/Cardosofiles)
- LinkedIn: [Cardosofiles](https://www.linkedin.com/in/cardosofiles/)

---

<div align="center">

**⭐ Se este projeto te ajudou, não esqueça de deixar uma estrela!**

Desenvolvido com ❤️ durante o curso da [Rocketseat](https://www.rocketseat.com.br/)

</div>

---

<div align="right">

[⬆️ Voltar ao topo](#informações)

</div>
