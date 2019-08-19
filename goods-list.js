const GOODS_LIST = {
    template: `
<div>
<div class="controls" align="right">
<router-link v-bind:to="{name:'good-new'}">
<div class="btn btn-primary btn-sm" href="#myModal1" data-backdrop="static" data-keyboard="false" data-toggle="modal">Добавить</div>
</router-link>
</div>
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Наименование</th>
            <th scope="col">Категория</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Цена</th>
            <th scope="col">Цена</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="good in $store.state.goods">
            <th scope="row">{{good.id}}</th>
            <td>{{categoryName(good.category_id)}}</td>
            <td>{{category.name}}</td>
            <td>{{good.qty}}</td>
            <td>{{good.price}}</td>
            <td>
                <router-link v-bind:to="{name: 'good-form', params: {id: good.id}}">
                    <div href="#myModal1" data-toggle="modal" class="btn btn-danger btn-sm">Редактировать</div>
                </router-link>
                <router-link v-bind:to="{name: 'good-delete', params: {id: good.id}}">
                    <div href="#myModal2" data-toggle="modal" class="btn btn-danger btn-sm">Удалить</div>
                </router-link>
            </td>
        </tr>
        </tbody>
    </table>
    <router-link to="/" class="nav-link">На главную</router-link>
    <router-view    v-on:good-form-canceling="$router.push({name:'good-list'})"
                    v-on:good-form-submitted="goodFormSubmitted"
                                                                ></router-view>
</div>
    `,
    data: function () {
        return {
            editing_good_id: null
        }
    },
    computed: {
        editingGood: function () {
            if (this.editing_good_id === null) return;
            return this.goods.find(function (el) {return el.id === this.editing_good_id}.bind(this))
        }
    },
    methods: {
        categoryName: function (category_id) {
            var category = this.$store.getters.category(category_id);
            return category ? category.name : 'Категория не найдена'
        },
        editGood: function (id) {
            this.editing_good_id = id
        },
        goodFormSubmitted: function (data) {
            if (this.$route.name === 'good-new') {
                this.$store.commit('createGood', data);
            } else if (this.$route.name === 'good-delete') {
                this.$store.commit('deleteGood', data)
            } else {
                this.$store.commit('updateGood', data);
            }
            this.$router.push({name: 'goods-list'})
        }
    }
};

Vue.component('goods-list', GOODS_LIST);
