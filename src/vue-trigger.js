Vue.directive('darken', {
  inserted: function (el) {
    return el.style.backgroundColor = "#000";
  }
});

new Vue({
  el: '#app'
});