import Button from './button/button.vue';

export default {
  install: (app) => {
    app.component('MyButton', Button);
  },
};
export { Button };
