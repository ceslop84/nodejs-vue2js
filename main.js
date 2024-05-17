var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: "Master",
        image: './img/sock_green.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: false,
        inventory: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [{variantId: 2234, variantColor: "green", variantImage: "./img/sock_green.jpg"}, {variantid: 2235, variantColor: "blue", variantImage: "./img/sock_blue.jpg"}],
        cart: 0
    },
    methods: {
        addToCart: function (){
            this.cart += 1
        },
        updateImage: function (variantImage){
            this.image = variantImage
        },
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product                    
        }
    }
})