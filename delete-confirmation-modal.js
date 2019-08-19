const DELETE_CONFIRMATION_MODAL = {
    template: `
    <div id="myModal3" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Подтверждение</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                  <h3>Удалить категорию?</h3>
                </div>
                    <div class="modal-footer">
                        <button v-on:click="submitDeleteClicked" data-dismiss="modal" type="button" class="btn btn-primary">Подтвердить</button>
                        <button v-on:click="$emit('delete-canceled')" type="button" class="btn btn-default btn-danger" data-dismiss="modal">Отменить</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
`,
props: ['id'],
    data: function () {
        return {
            name: null,
            status: null
        }
    },
    methods: {
        submitDeleteClicked: function () {
            this.$emit('category-form-delete', {id: this.id, name: this.name, status: this.status})
        }
    }
};

Vue.component('category-delete', DELETE_CONFIRMATION_MODAL);