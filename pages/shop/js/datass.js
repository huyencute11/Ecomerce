const allProduct = [
  {
    id: 1,
    img: "https://sneakerdaily.vn/wp-content/uploads/2022/11/ao-sweater-fear-of-god-essentials-knit-concrete.png",
    name: "FEAR OF GOD FOG ESSENTIALS",
    price: "520",
    sale: "-$20%",
    bestSaler: true,
    genner: "women",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 2,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_10-300x300.png",
    name: "Curabitur finibus sapien",
    price: "620",
    new: true,
    genner: "men",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 3,
    img: "../../assets/image/Crew.jpg",
    name: "Amirilo Logo Check Crew Yellow",
    price: "120",
    bestSaler: true,
    genner: "women",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 4,
    img: "https://censor.vn/wp-content/uploads/2022/09/1-ao-fear-of-god-essentials-t-shirt-coral-300x240.jpg",
    name: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
    price: "410",
    new: true,
    genner: "women",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 5,
    img: "https://censor.vn/wp-content/uploads/2022/06/1-ao-fear-of-god-essentials-ls-polo-stretch-limo-300x240.jpg",
    name: "Annanas",
    price: "180",
    new: true,
    bestSaler: true,
    genner: "women",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 6,
    img: "https://www.chanel.com/images//t_one/t_fashion9//b_rgb:F7F7F7,e_brightness:-3/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/square-eyeglasses-brown-tortoise-grey-acetate-acetate-packshot-default-a75275x08101v1727-9522086805534.jpg",
    name: "Glasses",
    price: "120",
    bestSaler: true,
    genner: "men",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 7,
    img: "../../assets/image/wallet.jpg",
    name: "Wallet",
    price: "320",
    isSale: true,
    genner: "men",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 8,
    img: "https://sneakerdaily.vn/wp-content/uploads/2023/05/ao-khoac-travis-scott-x-jordan-varsity-antique-brown-do4104-256-1.png",
    name: "Cadigan",
    price: "640",
    bestSaler: true,
    genner: "men",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 9,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_11-300x300.png",
    name: "Vivamus et massa massa",
    price: "920",
    genner: "men",
    accessories: false,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 10,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_12-300x300.png",
    name: "Nulla nibh sagittis augue",
    price: "350",
    isSale: true,
    genner: "women",
    accessories: true,
    detail:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    id: 11,
    img: "../../assets/image/wallet.jpg",
    name: "Silt LV",
    price: "520",
    sale: "30%",
  },
  {
    id: 12,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_2-300x300.png",
    name: "Curabitur finibus sapien",
    price: "760",
  },
  {
    id: 13,
    img: "https://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/product_8-300x300.png",
    name: "Curabitur finibus sapien",
    price: "760",
  },
];

localStorage.setItem("Products", JSON.stringify(allProduct));