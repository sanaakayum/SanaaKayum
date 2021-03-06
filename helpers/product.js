// get products
export const getProducts = (products, article, type, limit) => {
  
  const finalProducts = article
    ? products.filter(product => product.article==article)
    : products;

  if (type && type === "new") {
    const newProducts = finalProducts.filter(single => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type === "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalProducts.length);
  }
  if (type && type === "saleItems") {
    const saleItems = finalProducts.filter(
      single => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  
  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart =
    cartItems &&
    cartItems.filter(
      single =>
        single.serialNumber === product.serialNumber &&
        (single.selectedProductColor
          ? single.selectedProductColor === color
          : true) &&
        (single.selectedProductSize
          ? single.selectedProductSize === size
          : true)
    )[0];
  if (
    cartItems&&
    cartItems.length >= 1 &&
    productInCart
  ) {
    if (product.variation) {
      return cartItems.filter(
        single =>
          single.serialNumber === product.serialNumber &&
          single.selectedProductColor === color &&
          single.selectedProductSize === size
      )[0].quantity;
    } else {
      return cartItems.filter(single => product.serialNumber === single.serialNumber)[0].quantity;
    }
  } else {
    return 0;
  }
};
//get products based on category
export const getSortedProducts = (products, sortType, sortValue, lingerie) => {
  if (sortType === "filterSort"){
    let sortProducts = [...products]
    if (sortValue === "default") {
      return sortProducts;
    }
    if (sortValue === "priceHighToLow") {
      return sortProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sortValue === "priceLowToHigh") {
      return sortProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
  }
  if (products && lingerie && sortType && sortValue) {
    if (sortType === "query") {
      var searchKey = [];
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };

      if (sortValue.includes(" ")) {
        var sortValArr = sortValue.split(" ");

        // search if both are present
        searchKey.push(
          products.filter(
            product =>
              (product.description
                .toLowerCase()
                .includes(" " + sortValArr[0].toLowerCase() + " ") ||
                product.color.toLowerCase() === sortValArr[0].toLowerCase() ||
                product.article.toLowerCase() === sortValArr[0].toLowerCase() ||
                (product.tags &&
                  product.tags.filter(
                    single =>
                      single.toLowerCase() === sortValArr[0].toLowerCase()
                  )[0])) &&
              (product.description
                .toLowerCase()
                .includes(" " + sortValArr[1].toLowerCase() + " ") ||
                product.color.toLowerCase() === sortValArr[1].toLowerCase() ||
                product.article.toLowerCase() === sortValArr[1].toLowerCase() ||
                (product.tags &&
                  product.tags.filter(
                    single =>
                      single.toLowerCase() === sortValArr[1].toLowerCase()
                  )[0]))
          )
        );
        // now search individually
        sortValArr.map((sv, i) => {
          searchKey.push(
            products.filter(
              product =>
                product.collectionName.toLowerCase() === sv.toLowerCase()
            ),
            products.filter(
              product => product.article.toLowerCase() === sv.toLowerCase()
            ),
            products.filter(
              product => product.color.toLowerCase() === sv.toLowerCase()
            ),
            products.filter(product =>
              product.description
                .toLowerCase()
                .includes(" " + sv.toLowerCase() + " ")
            ),
            products.filter(product =>
              product.description.toLowerCase().includes(sv.toLowerCase())
            ),
            products.filter(
              product =>
                product.tags &&
                product.tags.filter(
                  single => single.toLowerCase() === sortValue.toLowerCase()
                )[0]
            ),
            lingerie.filter(
              lgr =>
                lgr.tags.filter(
                  single => single.toLowerCase() === sortValue.toLowerCase()
                )[0]
            )
          );
        });
      } else {
        searchKey.push(
          products.filter(
            product =>
              product.collectionName.toLowerCase() === sortValue.toLowerCase()
          ),
          products.filter(
            product => product.article.toLowerCase() === sortValue.toLowerCase()
          ),
          products.filter(
            product => product.color.toLowerCase() === sortValue.toLowerCase()
          ),
          products.filter(product =>
            product.description
              .toLowerCase()
              .includes(" " + sortValue.toLowerCase() + " ")
          ),
          products.filter(product =>
            product.description.toLowerCase().includes(sortValue.toLowerCase())
          ),
          products.filter(
            product =>
              product.tags &&
              product.tags.filter(
                single => single.toLowerCase() === sortValue.toLowerCase()
              )[0]
          ),
          lingerie.filter(
            lgr =>
              lgr.tags.filter(
                single => single.toLowerCase() === sortValue.toLowerCase()
              )[0]
          )
        );
      }

      searchKey = searchKey.flat().filter(unique);
      return searchKey;
    }
    if (sortType === "category") {
      return products.filter(
        product => product.article === sortValue
        // product => product.article.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "lingerie") {
      return lingerie.filter(
        ln => ln.article === sortValue
        // product => product.article.filter(single => single === sortValue)[0]
      );
    }

    if (sortType === "tag") {
      var tagKey = [];
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };

      lingerie.filter(
        lgr => lgr.tags.filter(single => single === sortValue)[0]
      );

      tagKey.push(
        products &&
          products.filter(
            product =>
              product.tags &&
              product.tags.filter(single => single === sortValue)[0]
          ),
        lingerie.filter(
          lgr => lgr.tags.filter(single => single === sortValue)[0]
        )
      );
      tagKey = tagKey.flat().filter(unique);

      return tagKey;
    }
    if (sortType === "color") {
      return products.filter(product => product.color === sortValue);
    }
    if (sortType === "size") {
      //We are doing 2 level filtering because size is an `inside` JSON object
      const identificationPackaging=products.map(product=>[product,product.size].flat())
      const result=identificationPackaging.filter(product=>product[1].name===sortValue).map(res=>res[0])
       return result
    }
    
  }
   
  return products;
};

// get individual element
const getIndividualItemArray = array => {
  let individualItemArray = array.filter(function(v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = products => {
  let productCategories = [];
  products &&
    products.map(product => {
      return productCategories.push(product.article);
    });
  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};
export const getIndividualLingerie = lingerie => {
  let productCategories = [];
  lingerie &&
    lingerie.map(lingerie => {
      return productCategories.push(lingerie.article);
    });
  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};

// get individual tags
export const getIndividualTags = products => {
  let productTags = [];
  products &&
    products.map(product => {
      return (
        product.tags &&
        product.tags.map(single => {
          return productTags.push(single);
        })
      );
    });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
};

// get individual colors
export const getIndividualColors = products => {
  let productColors = [];
  products &&
    products.map(product => {
      return productColors.push(product.color);
    });
  const individualProductColors = getIndividualItemArray(productColors);
  return individualProductColors;
};

// get individual sizes
export const getProductsIndividualSizes = products => {
  let productSizes = [];
  products &&
    products.map(product => {
      return (
        product.size &&
        product.size.map(single => {
          return productSizes.push(single.name);
        })
      );
    });
  const individualProductSizes = getIndividualItemArray(productSizes);
  return individualProductSizes;
};

// get product individual sizes
export const getIndividualSizes = product => {
  let productSizes = [];
  product.variation &&
    product.variation.map(singleVariation => {
      return (
        singleVariation.size &&
        singleVariation.size.map(singleSize => {
          return productSizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};

export const setActiveSort = e => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
  );
  filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  // gridSwitchBtn.map(item => {
  //   item.classList.remove("active");
  // });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = e => {
  const shopTopFilterWrapper = document.querySelector(
    "#product-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
