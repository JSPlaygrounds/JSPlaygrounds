angular
  .module('app', [])
  .component('playground', {  
    bindings: {
    name: '@'
  },
  template: 'Hello, {{$ctrl.name}}',
  controller: () => {}
});
