export default [
  {
    path: '/Locator',
    meta: { layout: "default", guest: true, noScroll: true },
    name: 'Locator',
    component: () => import('@/pages/Locator.vue')
  }, {
    path: '/401',
    name: 'AccessDenied',
    meta: { layout: "default", guest: true, noScroll: true },
    component: () => import('@/pages/Deny.vue')
  }, {
    path: '/',
    meta: { layout: "default" },
    name: 'Root',
    redirect: {
      name: 'projects'
    }
  }, {
    path: '*',
    meta: { layout: "default", guest: true, noScroll: true },
    name: 'Deny',
    component: () => import('@/pages/Deny.vue')

  }
];