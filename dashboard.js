Vue.component('dashboard',{
    template: `
    <div class="widgets-container">
        <div class="card" style="width: 45%">
            <img src="https://picsum.photos/500/300" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">Товары</h5>
                <p class="card-text"><span class="badge badge-secondary">100</span></p>
                </div>
        </div>
        <div class="card" style="width: 45%">
            <img src="https://picsum.photos/500/300?a=4234324213" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">Категории</h5>
                <p class="card-text"><span class="badge badge-secondary">3</span></p>
                </div>
        </div>
    </div>
    `

})