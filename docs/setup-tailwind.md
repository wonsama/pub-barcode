# setup tailwind

## 초기화

```bash
npx tailwindcss init
touch postcss.config.js
```

## postcss.config.js 작성

> /postcss.config.js

```js
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

## tailwind.css 작성

```bash
mkdir public
mkdir public/styles
touch public/styles/tailwind.css
touch public/styles/style.css
```

> public/styles/tailwind.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## package.json 수정

> package.json

```json
{
  "scripts": {
    "build:css": "postcss public/styles/tailwind.css -o public/styles/style.css"
  }
}
```

```bash
npm run build:css
```

위 내용을 실행하면 `public/styles/tailwind.css` 파일을 참조하여 `public/styles/style.css` 파일을 생성한다

## 참조링크

- [how-to-use-tailwindcss-with-node-js-express-and-pug](https://daily.dev/blog/how-to-use-tailwindcss-with-node-js-express-and-pug)
