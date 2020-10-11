import Vue from 'vue'
import Router from 'vue-router'
import paths from './paths'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: paths
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  if (to.matched.some(record => record.meta.guest)) {
    if (window.$cookies.get('izcToken') == null) {
      next()
    } else {
      if (to.name == 'Locator') {
        next({ name: 'Root' })
      } else {
        next()
      }
    }
  } else {
    if (window.$cookies.get('izcToken') == null) {
      next({ name: 'Locator' })
    } else {
      if (to.name == 'Locator') {
        next({ name: 'Root' })
      } else {
        // increse timeout by 1 hour
        window.$cookies.set('izcToken', window.$cookies.get('izcToken'))
        next()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done();
});

export default router;