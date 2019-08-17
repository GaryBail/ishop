const ishop_routes = [
    {name: 'dashboard', path: '/', component: DASHBOARD},
    {
        name: 'goods-list', path: '/goods', component: GOODS_LIST,
        children: [
            {name: 'good-form', path: '/goods/:id/edit', component: GOOD_FORM, props: true}
        ]
    },
    {
        name: 'categories-list', path: '/categories', component: CATEGORIES_LIST,
        children: [
            {name: 'category-new', path: '/categories/new', component: CATEGORY_FORM},
            {name: 'category-form', path: '/categories/:id/edit', component: CATEGORY_FORM, props: true},
            {name: 'category-delete', path: '/categories/:id/delete', component: DELETE_CONFIRMATION_MODAL, props: true}
        ]
    },
];

const router_for_our_app = new VueRouter({
    routes: ishop_routes
});