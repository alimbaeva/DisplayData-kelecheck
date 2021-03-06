const products = [
  {
    id: 1,
    title: "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
    category: "laptops",
    price: 19950,
    img: "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
    desc: "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть",
  },
  {
    id: 2,
    title: "Xiaomi Mi 11 Lite",
    category: "phones",
    price: 28700,
    img: "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
    desc: "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
  },
  {
    id: 3,
    title: "Helllo",
    category: "laptops",
    price: 60000,
    img: "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
    desc: "bla bla bla",
  },
  {
    id: 4,
    title: "Телевизор LG OLED65CXRLA",
    category: "tv",
    price: 219980,
    img: "https://www.kivano.kg/images/product/92929/full/1621780991_50190300.jpg",
    desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
  },
  {
    id: 5,
    title: "Телевизор LG LG OLED65CXRLA",
    category: "tv",
    price: 569980,
    img: "https://www.kivano.kg/images/product/92929/full/1621780991_50190300.jpg",
    desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
  },
  {
    id: 6,
    title: "Xiaomi Mi 1000 Lite",
    category: "phones",
    price: 90700,
    img: "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
    desc: "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
  }
];


window.addEventListener('load', function () {
  const productsInner = this.document.querySelector('.products__inner');
  const filtersContainer = this.document.querySelector('.products__btn');



  function displayProductsItems(products) {
    let displayProducts = products.map(function (item) {
      return `<article key="${item.id}" class="products__item">
            <img
              class="products__item-photo"
              src="${item.img}"
              alt=""
            />
            <div class="products__item-info">
              <header>
                <h3>${item.title}</h3>
                <span class="products__item-price">${item.price}сом</span>
              </header>
              <p class="products__item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayProducts = displayProducts.join("");
    productsInner.innerHTML = displayProducts;
  }

  function displayFilterBtns() {
    const categories = products.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ['all']
    );

    const categoryBtns = categories.map(function (category) {
      return `
    <button class="products__filters-btn" type="button" data-catigory="${category}">${category}</button>
    `;
    }).join('');

    filtersContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.products__filters-btn');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.catigory;
        const productCategory = products.filter(function (item) {
          if (item.category === category) {
            return item;
          }
        });
        if (category === 'all') {
          displayProductsItems(products);
        } else {
          displayProductsItems(productCategory);
        }
      });
    });
  }

  displayProductsItems(products);
  displayFilterBtns();
});

/*

//  Сдесь идет работа с методом перебор кнопок и вывод их на экран map()!
window.addEventListener("load", function () {
  const productsInner = document.querySelector(".products__inner");
  const productsBtn = document.querySelector(".products__btn");


  var numBtn = [];
  function funNumBtn() {
    products.map(function (item) {
      if (numBtn.indexOf(item.category) === -1) {
        numBtn.push(item.category)
        const button = this.document.createElement('button');
        button.classList = 'products__filters-btn';
        button.type = "button";
        button.dataset.catigory = `${item.category}`;
        button.textContent = `${item.category}`;
        productsBtn.append(button);
      }
    })
  }

  funNumBtn();
  const filterBtn = document.querySelectorAll(".products__filters-btn");


  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const categoryBtn = e.currentTarget.dataset.catigory;

      const productCategory = products.filter(function (item) {
        if (item.category === categoryBtn) {
          return item;
        }
      });

      if (categoryBtn === 'all') {
        displayProductsItems(products);
      } else {
        displayProductsItems(productCategory)
      }
    });
  });



  function displayProductsItems(products) {
    let displayProducts = products.map(function (item) {
      return `<article key="${item.id}" class="products__item">
            <img
              class="products__item-photo"
              src="${item.img}"
              alt=""
            />
            <div class="products__item-info">
              <header>
                <h3>${item.title}</h3>
                <span class="products__item-price">${item.price}сом</span>
              </header>
              <p class="products__item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    })
    displayProducts = displayProducts.join("");
    productsInner.innerHTML = displayProducts;
  }

  console.log(filterBtn);
  displayProductsItems(products);

});

*/


// window.addEventListener("load", function () {
//   const productsInner = document.querySelector(".products__inner");
//   const filterBtn = document.querySelectorAll(".products__filters-btn");

//   displayProductsItems(products);

//   filterBtn.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//       const categoryBtn = e.currentTarget.dataset.catigory;

//       const productCategory = products.filter(function (item) {
//         if (item.category === categoryBtn) {
//           return item;
//         }
//       });

//       if (categoryBtn === 'all') {
//         displayProductsItems(products);
//       } else {
//         displayProductsItems(productCategory)
//       }
//     });
//   });


//   function displayProductsItems(products) {
//     let displayProducts = products.map(function (item) {
//       return `<article key="${item.id}" class="products__item">
//         <img
//           class="products__item-photo"
//           src="${item.img}"
//           alt=""
//         />
//         <div class="products__item-info">
//           <header>
//             <h3>${item.title}</h3>
//             <span class="products__item-price">${item.price}сом</span>
//           </header>
//           <p class="products__item-text">
//             ${item.desc}
//           </p>
//         </div>
//       </article>`;
//     });

//     displayProducts = displayProducts.join("");
//     productsInner.innerHTML = displayProducts;
//   }
// });


// // -------------------------------------------------

// // Мы здесь берем кнопки по классу и сравкиваем категории итем по словам которое мы написали
// // и выводим результат на экран с помошью функции displayProductsItems. Это только 1 вариан решения но оно не эфективное.
// computerButton.addEventListener('click', () => {
//   const resultProducts = products.filter(items => items.category === 'laptops');
//   displayProductsItems(resultProducts);
// });

// allButton.addEventListener('click', () => {
//   displayProductsItems(products);
// });

// tvButton.addEventListener('click', () => {
//   const resultProducts = products.filter(items => items.category === "tv");
//   displayProductsItems(resultProducts);
// });

// phoneButton.addEventListener('click', () => {
//   const resultProducts = products.filter(items => items.category === "phones");
//   displayProductsItems(resultProducts);
// });

// // ----------------------------------------------------