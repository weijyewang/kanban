// // IE required polyfill
// import es6Shim from 'es6-shim/es6-shim.min';
// import angular2Es6 from 'angular2/es6/dev/src/testing/shims_for_IE';
//
// import angularPolyfill from 'angular2/bundles/angular2-polyfills';
// import rxjs from 'rxjs/bundles/Rx.umd';
// import angular from 'angular2/bundles/angular2-all.umd';
// import appComponent from 'app.component';

(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));