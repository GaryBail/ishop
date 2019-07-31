Vue.component ('goods-list',{
        template: `
    <table class="table">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Цена</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Брюки мужские</td>
                        <td>40</td>
                        <td>2700</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Платье</td>
                        <td>10</td>
                        <td>3500</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Туфли</td>
                        <td>5</td>
                        <td>5000</td>
                    </tr>
                    </tbody>
                </table>
    `,
    props: {}
})