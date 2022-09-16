import { createStore } from 'vuex'
export default createStore({
  state: {
    hospitais: [
      {
        id: 1,
        nome: "voluptatem minima",
        imagem: "https://loremflickr.com/1280/720/hospital?lock=10",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4072,
        lg: -22.9947
      },
      {
        id: 2,
        nome: "nam magni",
        imagem: "https://loremflickr.com/1280/720/hospital?lock=25",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4062,
        lg: -22.9937
      },
      {
        id: 3,
        nome: "illum earum",
        imagem: "https://loremflickr.com/1280/720/hospital?lock=35",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4052,
        lg: -22.9917
      },
      {
        id: 4,
        nome: "architecto",
        imagem: "https://loremflickr.com/1280/720/hospital?lock=15",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4083,
        lg: -22.9955
      },
      {
        id: 5,
        nome: "quia nostrum",
        imagem: "https://loremflickr.com/1280/720/hospital?lock=45",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4090,
        lg: -22.9940
      },
    ],
    eventos:[
      {
        id: 1,
        nome: "amet consectetur",
        imagem: "https://loremflickr.com/1280/720/events?lock=1",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4080,
        lg: -22.9945
      },
      {
        id: 2,
        nome: "Cumque facilis",
        imagem: "https://loremflickr.com/1280/720/events?lock=2",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4076,
        lg: -22.9945
      },
      {
        id: 3,
        nome: "officia ut",
        imagem: "https://loremflickr.com/1280/720/events?lock=71",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4033,
        lg: -22.9959
      },
      {
        id: 4,
        nome: "voluptatem minima",
        imagem: "https://loremflickr.com/1280/720/events?lock=14",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4086,
        lg: -22.9934
      },
      {
        id: 5,
        nome: "illum earum",
        imagem: "https://loremflickr.com/1280/720/events?lock=20",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4046,
        lg: -22.9966
      },
      
    ],
    banheiros: [
      {
        id: 1,
        nome: "suscipit",
        imagem: "https://loremflickr.com/1280/720/bathroom?lock=1",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4095,
        lg: -22.9944
      },
      {
        id: 2,
        nome: "consectetur",
        imagem: "https://loremflickr.com/1280/720/bathroom?lock=15",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4050,
        lg: -22.9930
      },
      {
        id: 3,
        nome: "doloremque",
        imagem: "https://loremflickr.com/1280/720/bathroom?lock=25",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4010,
        lg: -22.9911
      },
      {
        id: 4,
        nome: "voluptatem",
        imagem: "https://loremflickr.com/1280/720/bathroom?lock=30",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4030,
        lg: -22.9955
      },
      {
        id: 5,
        nome: "architecto",
        imagem: "https://loremflickr.com/1280/720/bathroom?lock=29",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4087,
        lg: -22.9999
      },
    ],
    restaurantes: [
      {
        id: 1,
        nome: "ima praesentiu",
        imagem: "https://loremflickr.com/1280/720/restaurant?lock=5",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4046,
        lg: -22.9966
      },
      {
        id: 2,
        nome: "magni dol",
        imagem: "https://loremflickr.com/1280/720/restaurant?lock=15",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4055,
        lg: -22.9948
      },
      {
        id: 3,
        nome: "uptatem mini",
        imagem: "https://loremflickr.com/1280/720/restaurant?lock=30",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4079,
        lg: -22.9997
      },
      {
        id: 4,
        nome: "sicing eli",
        imagem: "https://loremflickr.com/1280/720/restaurant?lock=45",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4056,
        lg: -22.9965
      },
      {
        id: 5,
        nome: "lit ratione",
        imagem: "https://loremflickr.com/1280/720/restaurant?lock=55",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4077,
        lg: -22.9944
      },
    ],
    delegacias: [
      {
        id: 1,
        nome: "maxime suscipit",
        imagem: "https://loremflickr.com/1280/720/police-precinct?lock=5",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4010,
        lg: -22.9923
      },
      {
        id: 2,
        nome: "ratione maxime",
        imagem: "https://loremflickr.com/1280/720/police-precinct?lock=15",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4094,
        lg: -22.9964
      },
      {
        id: 3,
        nome: "velit ratione",
        imagem: "https://loremflickr.com/1280/720/police-precinct?lock=25",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4076,
        lg: -22.9956
      },
      {
        id: 4,
        nome: "ducimus tenetur",
        imagem: "https://loremflickr.com/1280/720/police-precinct?lock=40",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4055,
        lg: -22.9945
      },
      {
        id: 5,
        nome: "itaque",
        imagem: "https://loremflickr.com/1280/720/police-precinct?lock=65",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4090,
        lg: -22.9940
      },
    ],
    turisticos: [
      {
        id: 1,
        nome: "met conse",
        imagem: "https://loremflickr.com/1280/720/monument?lock=5",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4165,
        lg: -22.9940
      },
      {
        id: 2,
        nome: "ore veli",
        imagem: "https://loremflickr.com/1280/720/monument?lock=15",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4054,
        lg: -22.9955
      },
      {
        id: 3,
        nome: "ione maxim",
        imagem: "https://loremflickr.com/1280/720/monument?lock=22",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4098,
        lg: -22.9956
      },
      {
        id: 4,
        nome: "cipit mag",
        imagem: "https://loremflickr.com/1280/720/monument?lock=14",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4064,
        lg: -22.9934
      },
      {
        id: 5,
        nome: "ut architec",
        imagem: "https://loremflickr.com/1280/720/monument?lock=45",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4097,
        lg: -22.9949
      },
    ],
    hoteis: [
      {
        id: 1,
        nome: "scipit mag",
        imagem: "https://loremflickr.com/1280/720/hotel?lock=44",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4022,
        lg: -22.9932
      },
      {
        id: 2,
        nome: "one maxi",
        imagem: "https://loremflickr.com/1280/720/hotel?lock=210",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4097,
        lg: -22.9988
      },
      {
        id: 3,
        nome: "uptatem mi",
        imagem: "https://loremflickr.com/1280/720/hotel?lock=99",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4064,
        lg: -22.9946
      },
      {
        id: 4,
        nome: "netur volup",
        imagem: "https://loremflickr.com/1280/720/hotel?lock=33",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4095,
        lg: -22.9945
      },
      {
        id: 5,
        nome: "elit ratio",
        imagem: "https://loremflickr.com/1280/720/hotel?lock=22",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4093,
        lg: -22.9943
      },
    ],
    praias: [
      {
        id: 1,
        nome: "tur volup",
        imagem: "https://loremflickr.com/1280/720/brazil,rio?lock=43",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4074,
        lg: -22.9945
      },
      {
        id: 2,
        nome: "amet co",
        imagem: "https://loremflickr.com/1280/720/brazil,rio?lock=13",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4064,
        lg: -22.9944
      },
      {
        id: 3,
        nome: "imus te",
        imagem: "https://loremflickr.com/1280/720/brazil,rio?lock=12",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4098,
        lg: -22.9948
      },
      {
        id: 4,
        nome: "nima prae",
        imagem: "https://loremflickr.com/1280/720/brazil,rio?lock=42",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4078,
        lg: -22.9987
      },
      {
        id: 5,
        nome: "quia nos",
        imagem: "https://loremflickr.com/1280/720/brazil,rio?lock=15",
        descricao: "amet consectetur adipisicing elit. Cumque facilis consectetur nobis minus ducimus tenetur voluptatem minima praesentium, nam magni doloremque illum earum dolore velit ratione maxime suscipit magnam quia nostrum itaque quisquam qui officia ut architecto.",
        lt: -43.4099,
        lg: -22.9989
      },
    ]

    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
