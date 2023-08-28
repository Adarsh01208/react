class ProductService {


    static productList = [
        {
            id: "A001",
            name: 'Apple',
            price: 100,
            quantity: 45,
            image: 'https://th.bing.com/th?id=OIP.VCgRxWcTx836WafFitRx0AHaIn&w=231&h=269&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
        },
        {
            id: "A002",
            name: 'Banana',
            price: 60,
            quantity: 7,
            image: 'https://th.bing.com/th/id/OIP.emjzYKViT1SKMALrVmqujQHaE8?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            id: "A003",
            name: 'Promogranate',
            price: 140,
            quantity: 21,
            image: 'https://th.bing.com/th/id/OIP.sG4rK2tX46C2xSTceuPvnwHaF0?w=251&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            id: "A004",
            name: 'Orange',
            price: 80,
            quantity: 0,
            image: 'https://th.bing.com/th/id/OIP.oeAewWAXAhrf1OhGVQk2YwHaGr?w=215&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            id: "A005",
            name: 'Grapes',
            price: 100,
            quantity: 1,
            image: 'https://steptohealth.com/wp-content/uploads/2017/01/bunch-of-red-grapes.jpg'
        }
    ]
    
    static getProductList() {
        return this.productList;
    }

}

export default ProductService;