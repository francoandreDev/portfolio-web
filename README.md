# Portfolio Web 💼

I'm a developer focused on the front-end of the web.
I have been studying programming for +4 years.
My main languages are JavaScript and TypeScript, but I also know HTML5, CSS3, Tailwind, CSS Modules, TDD using Vitest, Node, Python, C#, SQL.

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside the project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── assets/
    │   └── ...
    ├── components/
    │   └── ...
    ├── docs/
    │   └── ...
    ├── lib/
    │   └── ...
    ├── loaders/
    │   └── ...
    ├── middlewares/
    │   └── ...
    ├── modules/
    │   └── ...
    ├── pages/
    │   └── ...
    ├── routes/
    │    └── ...
    ├── styles/
    │   └── ...
    ├── tests/
    │   └── ...
    ├── types/
    │   └── ...
    ├── utils/
    │   └── ...
```

-   `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

-   `src/components`: Recommended directory for components.

-   `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

## Extra Docs⚡️

-   [Qwik Docs](https://qwik.builder.io/)
-   [Vite](https://vitejs.dev/)

---
