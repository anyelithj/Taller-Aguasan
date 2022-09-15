var app = new Vue({
    el: '#app',
    data: {
        usuario: "",
        usuarios: [],
        estratos: [
            {estrato: "Estrato 1", cargo_fijo: 2300,valor_metro: 250, subsidio: 40  },
            {estrato: "Estrato 2", cargo_fijo: 3200,valor_metro: 350, subsidio: 30  },
            {estrato: "Estrato 3", cargo_fijo: 3900,valor_metro: 460, subsidio: 10  }
        ],
        opcionEstrato: null,
        metros: "", 
        errors: false
    },
    methods: {
        agregarUsuario() {
            this.usuarios.push({
                nombreUsuario: this.usuario,
                infoEstrato: this.estratos,
                metrosUsuario: this.metros
            })
            console.log(this.usuarios)
        },
        

    }
})