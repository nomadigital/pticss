const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/demo', name: 'demo', component: Demo },
  { path: '*', redirect: '/' }
]