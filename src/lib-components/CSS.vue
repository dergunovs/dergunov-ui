<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "CSS",
  });
</script>

<style>
  /* Шрифт */

  @font-face {
    font-family: "font";
    src: url("assets/400.woff2") format("woff2");
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "font";
    src: url("assets/700.woff2") format("woff2");
    font-weight: 700;
    font-display: swap;
  }

  /* Цвет */

  :root {
    --color-primary: #ff5050;
    --color-primary-dark: #ed0d0d;
    --color-primary-light: #db9090;

    --color-black: #000;
    --color-gray-dark: #444;
    --color-gray: #ccc;
    --color-gray-light: #eee;
    --color-white: #fff;
  }

  /* Общие стили */

  * {
    font-family: "font";
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }

  .center {
    width: calc(100% - 120px);
    margin: 0 auto;
    max-width: 1600px;
  }

  section {
    margin: 64px 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    margin: 32px 0;
  }

  h2 {
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    margin: 30px 0;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    text-align: left;
    margin: 24px 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 200ms ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Отступы */

  .m-0 {
    margin: 0;
  }

  .m-8 {
    margin: 8px;
  }

  .m-16 {
    margin: 16px;
  }

  .m-32 {
    margin: 32px;
  }

  .m-l0 {
    margin-left: 0;
  }

  .ml-8 {
    margin-left: 8px;
  }

  .ml-16 {
    margin-left: 16px;
  }

  .ml-32 {
    margin-left: 32px;
  }

  .mr-0 {
    margin-right: 0;
  }

  .mr-8 {
    margin-right: 8px;
  }

  .mr-16 {
    margin-right: 16px;
  }

  .mr-32 {
    margin-right: 32px;
  }

  .mt-0 {
    margin-top: 0;
  }

  .mt-8 {
    margin-top: 8px;
  }

  .mt-16 {
    margin-top: 16px;
  }

  .mt-32 {
    margin-top: 32px;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  .mb-8 {
    margin-bottom: 8px;
  }

  .mb-16 {
    margin-bottom: 16px;
  }

  .mb-32 {
    margin-bottom: 32px;
  }

  .p-0 {
    padding: 0;
  }

  .p-8 {
    padding: 8px;
  }

  .p-16 {
    padding: 16px;
  }

  .p-32 {
    padding: 32px;
  }

  .pl-0 {
    padding-left: 0;
  }

  .pl-8 {
    padding-left: 8px;
  }

  .pl-16 {
    padding-left: 16px;
  }

  .pl-32 {
    padding-left: 32px;
  }

  .pr-0 {
    padding-right: 0;
  }

  .pr-8 {
    padding-right: 8px;
  }

  .pr-16 {
    padding-right: 16px;
  }

  .pr-32 {
    padding-right: 32px;
  }

  .pt-0 {
    padding-top: 0;
  }

  .pt-8 {
    padding-top: 8px;
  }

  .pt-16 {
    padding-top: 16px;
  }

  .pt-32 {
    padding-top: 32px;
  }

  .pb-0 {
    padding-bottom: 0;
  }

  .pb-8 {
    padding-bottom: 8px;
  }

  .pb-16 {
    padding-bottom: 16px;
  }

  .pb-32 {
    padding-bottom: 32px;
  }

  /* Блоки */

  .flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-center {
    justify-content: center;
  }

  .flex-left {
    justify-content: flex-start;
  }

  .flex-right {
    justify-content: flex-end;
  }

  .flex-top {
    align-items: flex-start;
  }

  .flex-bottom {
    align-items: flex-end;
  }

  .flex-sb {
    justify-content: space-between;
  }

  .flex-se {
    justify-content: space-evenly;
  }

  .flex-column {
    flex-direction: column;
    align-items: flex-start;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .flex-shrink {
    flex-shrink: 1;
  }

  .flex-center {
    justify-content: center;
  }

  .flex-sb {
    justify-content: space-between;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .flex-shrink {
    flex-shrink: 1;
  }

  .gap-32 {
    gap: 32px;
  }

  .gap-16 {
    gap: 16px;
  }

  /* Ширина */

  .w-100 {
    width: 100%;
  }

  .w-80 {
    width: 80%;
  }

  .w-75 {
    width: 75%;
  }

  .w-66 {
    width: 66.666%;
  }

  .w-60 {
    width: 60%;
  }

  .w-50 {
    width: 50%;
  }

  .w-40 {
    width: 40%;
  }

  .w-33 {
    width: 33.333%;
  }

  .w-25 {
    width: 25%;
  }

  .w-20 {
    width: 20%;
  }

  .w-100-8 {
    width: calc(100% - 8px);
  }

  .w-80-8 {
    width: calc(80% - 8px);
  }

  .w-75-8 {
    width: calc(75% - 8px);
  }

  .w-66-8 {
    width: calc(66.666% - 8px);
  }

  .w-60-8 {
    width: calc(60% - 8px);
  }

  .w-50-8 {
    width: calc(50% - 8px);
  }

  .w-40-8 {
    width: calc(40% - 8px);
  }

  .w-33-8 {
    width: calc(33.333% - 8px);
  }

  .w-25-8 {
    width: calc(25% - 8px);
  }

  .w-20-8 {
    width: calc(20% - 8px);
  }

  .w-100-16 {
    width: calc(100% - 16px);
  }

  .w-80-16 {
    width: calc(80% - 16px);
  }

  .w-75-16 {
    width: calc(75% - 16px);
  }

  .w-66-16 {
    width: calc(66.666% - 16px);
  }

  .w-60-16 {
    width: calc(60% - 16px);
  }

  .w-50-16 {
    width: calc(50% - 16px);
  }

  .w-40-16 {
    width: calc(40% - 16px);
  }

  .w-33-16 {
    width: calc(33.333% - 16px);
  }

  .w-25-16 {
    width: calc(25% - 16px);
  }

  .w-20-16 {
    width: calc(20% - 16px);
  }

  .w-100-32 {
    width: calc(100% - 32px);
  }

  .w-80-32 {
    width: calc(80% - 32px);
  }

  .w-75-32 {
    width: calc(75% - 32px);
  }

  .w-66-32 {
    width: calc(66.666% - 32px);
  }

  .w-60-32 {
    width: calc(60% - 32px);
  }

  .w-50-32 {
    width: calc(50% - 32px);
  }

  .w-40-32 {
    width: calc(40% - 32px);
  }

  .w-33-32 {
    width: calc(33.333% - 32px);
  }

  .w-25-32 {
    width: calc(25% - 32px);
  }

  .w-20-32 {
    width: calc(20% - 32px);
  }

  /* Текст */

  p {
    margin: 0;
  }
  p + p {
    margin-top: 8px;
  }

  b,
  strong {
    font-weight: 700;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .text-small {
    font-size: 14px;
  }

  .text-medium {
    font-size: 18px;
  }

  .text-big {
    font-size: 24px;
  }

  .text-no-line {
    text-decoration: none;
  }

  .text-line {
    text-decoration: line-through;
  }

  .text-underline {
    border-bottom: 2px solid var(--color-primary);
  }

  .text-underline-bold {
    border-bottom: 8px solid var(--color-primary);
    padding-bottom: 4px;
  }

  a {
    color: var(--color-primary);
    text-decoration: underline;
    cursor: pointer;
  }

  a:hover {
    color: var(--color-primary-dark);
  }

  a.no-hover-color:hover {
    color: initial;
  }

  /* Фон, границы, прозрачность */

  .bg-primary {
    background-color: var(--color-primary);
  }

  .bg-primary-dark {
    background-color: var(--color-primary-dark);
  }

  .bg-primary-light {
    background-color: var(--color-primary-light);
  }

  .bg-black {
    background-color: var(--color-black);
  }

  .bg-gray-dark {
    background-color: var(--color-gray-dark);
  }

  .bg-gray {
    background-color: var(--color-gray);
  }

  .bg-gray-light {
    background-color: var(--color-gray-light);
  }

  .bg-white {
    background-color: var(--color-white);
  }

  .border-primary {
    border: 1px solid var(--color-primary);
  }

  .border-primary-dark {
    border: 1px solid var(--color-primary-dark);
  }

  .border-primary-light {
    border: 1px solid var(--color-primary-light);
  }

  .border-black {
    border: 1px solid var(--color-black);
  }

  .border-gray-dark {
    border: 1px solid var(--color-gray-dark);
  }

  .border-gray {
    border: 1px solid var(--color-gray);
  }

  .border-gray-light {
    border: 1px solid var(--color-gray-light);
  }

  .border-white {
    border: 1px solid var(--color-white);
  }

  .color-black {
    color: var(--color-black);
  }

  .color-gray-dark {
    color: var(--color-gray-dark);
  }

  .color-gray {
    color: var(--color-gray);
  }

  .color-gray-light {
    color: var(--color-gray-light);
  }

  .color-white {
    color: var(--color-white);
  }

  .opacity-0 {
    opacity: 0;
  }

  .opacity-25 {
    opacity: 0.25;
  }

  .opacity-50 {
    opacity: 0.5;
  }

  .opacity-100 {
    opacity: 1;
  }
</style>
