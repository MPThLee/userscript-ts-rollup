
Example GM4 Userscript With TypeScript 4 & Rollup
=======

Install & Run 
-------
```bash
$ npm install # or yarn/pnpm install

$ npm run build # or yarn/pnpm build
```

Header Configuration
------
See `config/meta.json`.

### @grant
If you using `@grant` for API, Just put the name of API you want, without namespace. e.g) `GM.setValue` to `setValue`

Also if you set `GM3Compat` to true, It also grant old API(GM3, starts with `GM_`). But, You will need `@require` field for API polyfill(s).