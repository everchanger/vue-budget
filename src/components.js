import Vue from 'vue';

// Font awesome component
import '../fa.config.js';

// Components
import navbar from './views/navbar.vue';
import sidebar from './views/sidebar.vue';
import modal from './components/modal.vue';
import toast from './components/toast.vue';

import budgetresult from './components/budget-result.vue';

import incomeform from './components/forms/income-form.vue';
import expenseform from './components/forms/expense-form.vue';
import loanform from './components/forms/loan-form.vue';
import savingsform from './components/forms/savings-form.vue';

import incomefield from './components/fields/income-field.vue';
import expensefield from './components/fields/expense-field.vue';
import loanfield from './components/fields/loan-field.vue';
import savingsfield from './components/fields/savings-field.vue';

Vue.component('navbar', navbar);
Vue.component('sidebar', sidebar);
Vue.component('modal', modal);
Vue.component('toast', toast);

Vue.component('budget-result', budgetresult);

Vue.component('income-form', incomeform);
Vue.component('expense-form', expenseform);
Vue.component('loan-form', loanform);
Vue.component('savings-form', savingsform);

Vue.component('income-field', incomefield);
Vue.component('expense-field', expensefield);
Vue.component('loan-field', loanfield);
Vue.component('savings-field', savingsfield);
