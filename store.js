Vue.use(Vuex);

const store_for_our_app = new Vuex.Store ({
    state: {
      goods: [
          {id: 1, name: 'Брюки мужские', qty: 35, price: 2650, category_id: 1},
          {id: 2, name: 'Платье женское', qty: 13, price: 7500, category_id: 2},
          {id: 3, name: 'Кеды', qty: 44, price: 1650, category_id: 3}
      ],
      categories: [
          {id: 1, name: 'Одежда мужская', status: 'active'},
          {id: 2, name: 'Одежда женская', status: 'active'},
          {id: 3, name: 'Обувь', status: 'active'}
      ]
    },
    getters: {
      category: state => id => {
         return state.categories.find(c => c.id === id)
      }
    },
    mutations: {
        createCategory: function(state, category) {
            var maxId = Math.max.apply(Math, state.categories.map(c=>c.id));
            category.id = maxId+1;
          state.categories.push(category)
        },
      updateGood: function (state, good) {
        var index = state.goods.findIndex(el => el.id === good.id);
        state.goods.splice(index, 1, good)
      },
      updateCategory:  function (state, category) {
        var index = state.categories.findIndex(el => el.id === category.id);
        if(index>=0) {
            state.categories.splice(index, 1, category)
        }
      },
      deleteCategory: function (state, category) {
          var index = state.categories.findIndex(el => el.id === category.id);
          if (index >= 0) {
              state.categories.splice(index, 1)
          }
      },
        createGood: function (state, good) {
            var maxId = Math.max.apply(Math, state.goods.map(c=>c.id));
            good.id = maxId + 1;
            state.goods.push(good)
        }
    }
});
