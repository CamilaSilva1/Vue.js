// Created by Camila Silva
// Since 27/05/2022
// Main project file

// Criado uma nova instancia de vue

// criando app
const MyNameApp = {
    // criando um objeto que retornará os dados na aplicação frontend
    data() {
        return{
            // todos os objetos que estarão aqui, retornarão no frontend
            name: "",
            idade: 23,
            input_name: ""
        }
    },
    // funções das aplicações
    methods: {
        submitForm(e){
            // não deixa o formulario ser enviado para o servidor
            e.preventDefault();

            // associando o name com input_name e atribuindo o valor digitado
            // ao name
            this.name = this.input_name;
        }
    }
}

// instanciando e criando o objeto criando MyNameApp
// Estou criando este objeto na div principal criada no index.html
// A mesma div que irá renderizar este meu app
Vue.createApp(MyNameApp).mount("#app");