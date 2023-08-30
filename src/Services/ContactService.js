class  ContactService {

    static Contactlist= [
            {
                "id": "1",
                "name": "Macon Orr",
                "phone": "(881) 239-2883",
                "email": "arcu@hotmail.com",
                "address": "Ap #495 Ornare",
                "postalZip": "26-770",
                "country": "Norway",
                "region": "Nuevo León",
                "image" : "https://images.pexels.com/photos/7869562/pexels-photo-7869562.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "2",
                "name": "Kuame Watkins",
                "phone": "1-345-114-7874",
                "email": "fames@yahoo.com",
                "address": "2101 Turpis",
                "postalZip": "28788",
                "country": "Pakistan",
                "region": "Gävleborgs län",
                "image" : "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "3",
                "name": "Benjamin Lee",
                "phone": "(417) 571-6541",
                "email": "rutrum@aol.net",
                "address": "781-1269 Avenue",
                "postalZip": "45382",
                "country": "Peru",
                "region": "Illes Balears",
                "image" : "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "4",
                "name": "Dustin Preston",
                "phone": "(284) 123-8146",
                "email": "nec@yahoo.ca",
                "address": "8039 Conubia Rd.",
                "postalZip": "378325",
                "country": "Mexico",
                "region": "North Island",
                "image" : "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "5",
                "name": "Abraham Mathis",
                "phone": "(753) 866-9381",
                "email": "in@yahoo.couk",
                "address": "#494 Integer Road",
                "postalZip": "91S 5W6",
                "country": "Poland",
                "region": "Santa Catarina",
                "image" : "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "6",
                "name": "Bert Cotton",
                "phone": "(672) 427-5261",
                "email": "ut@icloud.net",
                "address": "1508 Egestas",
                "postalZip": "48116",
                "country": "Singapore",
                "region": "West Region",
                "image" : "https://images.pexels.com/photos/605207/pexels-photo-605207.jpeg?auto=compress&cs=tinysrgb&w=600"

            },
            {
                "id": "7",
                "name": "Elijah Barnett",
                "phone": "1-188-784-6394",
                "email": "cras@outlook.net",
                "address": "6431 Congue, Ave",
                "postalZip": "22447",
                "country": "United Kingdom",
                "region": "Western Cape",
                "image" : "https://images.pexels.com/photos/1121795/pexels-photo-1121795.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "8",
                "name": "Evelyn Peters",
                "phone": "(844) 688-8574",
                "email": "facilisis@hotmail.net",
                "address": "382-6522 Ipsum Rd.",
                "postalZip": "3200",
                "country": "Nigeria",
                "region": "Corse",
                "image": "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "9",
                "name": "Zena Bell",
                "phone": "1-901-625-6621",
                "email": "quis@google.couk",
                "address": "P.O 992 Avenue",
                "postalZip": "33754",
                "country": "New Zealand",
                "region": "Tabasco",
                "image" : "https://images.pexels.com/photos/590141/pexels-photo-590141.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": "10",
                "name": "Burton Briggs",
                "phone": "1-861-488-2721",
                "email": "mauris@icloud.couk",
                "address": "P.O 472,Eu Avenue",
                "postalZip": "l3E 6M2",
                "country": "South Africa",
                "region": "North Island",
                "image" : "https://images.pexels.com/photos/1011529/pexels-photo-1011529.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        ];

    static getContactList() {
        return this.Contactlist;
    }

}

export default ContactService;