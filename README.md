## Create project

Vite boilerplate project.
https://vitejs.dev/guide/

```sh
npm create vite@latest
✔ Project name: … 03-dt-money
✔ Select a framework: › React
✔ Select a variant: › TypeScript

cd 03-dt-money
npm i
```

## Github repository

Create a github repositry and push local project.

```sh
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:AlessandraMayumi/03-dt-money.git
git push -u origin main
```

## Design System - styled-components

- Figma: https://www.figma.com/community/file/1138814493269096792/dt-money
- Reference: https://styled-components.com/

Use a default theme for the entire project to have a visual identity.

First, install the styled-components and its type definitions.

```sh
npm i styled-components
npm i @types/styled-components
```

### Themes (colors)

Then create file with all themes (colors) defined in the design system.

`src/styles/themes/default.ts`
```js
export const defaultTheme = {
  'gray-100': '#E1E1E6',
  ...
} as const
```

In order to use this themes with TypeScript, create a type definition:

`src/styles/@types/styled.d.ts`
```js
import { defaultTheme } from "../themes/default";

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
```

### Styles (css body, margin)

Other styles such as body and margin used in the entire project are defined in:

`src/styles/global.ts`
```js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    ...
```

### Theme provider

Finally, add to the App.ts the provider context from the styled-components.

`src/App.tsx`
```js
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      ...
    </ThemeProvider>
  )
}
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
