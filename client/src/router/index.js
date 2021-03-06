import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Posts from '@/components/Posts.vue';
import NewPost from '@/components/NewPost.vue';
import EditPost from '@/components/EditPost.vue';
import Products from '@/components/Products.vue';
import NewProduct from '@/components/NewProduct.vue';
import EditProduct from '@/components/EditProduct.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost,
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/new',
    name: 'NewProduct',
    component: NewProduct,
  },
  {
    path: '/products/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
