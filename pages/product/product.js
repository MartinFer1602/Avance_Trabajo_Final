function addProduct() {
    const product1 = {
        id: "12345",
        sku: "7202",
        name: "225/65R17 102H KENDA KR32 LLANTA PCR",
        img: "https://autoplanet.pe/wp-content/uploads/2022/07/7202.jpg",
        quantity: 4
    }

    const product2 = {
        id: "12346",
        sku: "4089",
        name: "225/40ZR18 92W KENDA KAISER KR20 LLANTA PCR",
        img: "https://autoplanet.pe/wp-content/uploads/2022/07/4089.jpg",
        quantity: 2
    }
    const product3 = {
        id: "12347",
        sku: "6157",
        name: "155R13C 91/89N 8PR KENDA KR06 LLANTA LTR",
        img: "https://autoplanet.pe/wp-content/uploads/2022/07/6157.jpg",
        quantity: 4
    }

    const product4 = {
        id: "12348",
        sku: "4045",
        name: "P265/65R17 112S KENDA KLEVER A/T KR28 LLANTA LTR",
        img: "https://autoplanet.pe/wp-content/uploads/2022/07/4045.jpg",
        quantity: 2
    }

    const product5 = {
        id: "12349",
        sku: "4046",
        name: "ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°14 X 6.0. MODELO B-1220",
        img: "https://autoplanet.pe/wp-content/uploads/2021/03/7872.jpg",
        quantity: 2
    }

    const product6 = {
        id: "12350",
        sku: "4047",
        name: "ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°15 X 6.5. MODELO D-5270",
        img: "https://autoplanet.pe/wp-content/uploads/2021/03/7900.jpg",
        quantity: 2
    }

    const product7 = {
        id: "12351",
        sku: "4048",
        name: "ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°15 X 7.0. MODELO B-768",
        img: "https://autoplanet.pe/wp-content/uploads/2021/03/7688.jpg",
        quantity: 2
    }

    const product8 = {
        id: "12352",
        sku: "4049",
        name: "ARO DE ALEACIÓN DEPORTIVO DARWIN RACING N°14 X 6.0. MODELO B-337",
        img: "https://autoplanet.pe/wp-content/uploads/2021/03/6008.jpg",
        quantity: 2
    }

    const product9 = {
        id: "12353",
        sku: "4049",
        name: "BATERÍA HANKOOK MF75D31R 75 AH 660CCA",
        img: "https://autoplanet.pe/wp-content/uploads/2021/03/AG00001375K00.jpg",
        quantity: 2
    }

    const product10 = {
        id: "12354",
        sku: "4050",
        name: "BATERIA BOSCH 80D23L (70AH/560A)",
        img: "https://autoplanet.pe/wp-content/uploads/2022/09/22.0.092.S47.028.jpg",
        quantity: 2
    }
     
    const product11 = {
        id: "12355",
        sku: "4051",
        name: "BATERÍA DGP MF56828 68AH 600CCA-BR",
        img: "https://autoplanet.pe/wp-content/uploads/2021/03/AG00006302DPSBR.jpg",
        quantity: 2
    }

    const product12 = {
        id: "12356",
        sku: "4052",
        name: "BATERÍA DGP MF105D31L 90AH 735CCA",
        img: "https://autoplanet.pe/wp-content/uploads/2020/11/AG00006344DPS.jpg",
        quantity: 2
    }

    const product13 = {
        id: "12357",
        sku: "4053",
        name: "ACEITE DE MOTOR SEMI-SINTÉTICO 15W-40 DE 1 GL",
        img: "https://autoplanet.pe/wp-content/uploads/2022/10/LUBULT08_GAL.jpg",
        quantity: 2
    }

    const product14 = {
        id: "12358",
        sku: "4054",
        name: "ACEITE DE MOTOR MINERAL 15W-40 DE 1 GL",
        img: "https://autoplanet.pe/wp-content/uploads/2022/10/LUBACTVE02_GAL.jpg",
        quantity: 2
    }

    const product15 = {
        id: "12359",
        sku: "4055",
        name: "ACEITE DE MOTOR SEMI-SINTÉTICO 10W-30 DE 1 GL",
        img: "https://autoplanet.pe/wp-content/uploads/2022/10/LUBEVO34_GAL.jpg",
        quantity: 2
    }

    const product16 = {
        id: "12360",
        sku: "4056",
        name: "ACEITE DE MOTOR SINTÉTICO 5W-40 BOTELLA DE 1/4 GL",
        img: "https://autoplanet.pe/wp-content/uploads/2022/10/LUBULT18_BOT.jpg",
        quantity: 2
    }

    const product17 = {
        id: "12361",
        sku: "4057",
        name: "ANTICONGELANTE Y REFRIGERANTE LUBRITEK 50%",
        img: "https://autoplanet.pe/wp-content/uploads/2022/10/LUBCOOLANT01.jpg",
        quantity: 2
    }

    const product18 = {
        id: "12362",
        sku: "4058",
        name: "REFRIGERANTE RADIADOR VERDE SIMONIZ GALÓN",
        img: "https://autoplanet.pe/wp-content/uploads/2021/06/SMA0015313.jpg",
        quantity: 2
    }

    const product19 = {
        id: "12363",
        sku: "4059",
        name: "REFRIGERANTE RADIADOR ROJO SIMONIZ GALÓN",
        img: "https://autoplanet.pe/wp-content/uploads/2021/06/SMA0015324.jpg",
        quantity: 2
    }

    const product20 = {
        id: "12364",
        sku: "4060",
        name: "REFRIGERANTE LUBRITEK 33 % LONG LIFE COOLANT (19L)",
        img: "https://autoplanet.pe/wp-content/uploads/2020/11/313070.jpg",
        quantity: 2
    }




    const cart = [product1, product2] //puede aumentar todos los productos que dese
    localStorage.setItem("cart", JSON.stringify(cart))

}