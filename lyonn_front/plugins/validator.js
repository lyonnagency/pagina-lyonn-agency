import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';

const config = {
  aria: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  classes: true,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur',
  fieldsBagName: 'fields',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  inject: true,
  locale: 'es',
  validity: false,
  useConstraintAttrs: true
};

import * as rules from 'vee-validate/dist/rules';
import es from 'vee-validate/dist/locale/es.json';
import en from 'vee-validate/dist/locale/en.json';
// loop over all rules
for (let rule in rules) {
  // add the rule
  extend(rule,
    {
      ...rules[rule],
      // message: es.messages[rule]
      message: en.messages[rule]
    }
  );
}
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
