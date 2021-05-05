import "./App.css";

function App() {
  const categories = [
    `Women's Running Shoes`,
    `Everyday Sneakers`,
    `Slip-Ons`,
    `Flats`,
    `Weather Repellent Shoes`,
  ];

  const products = [
    {
      name: "Womens Wool Runner Mizzles",
      description: "This is a sample description",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "Savanna Night (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "Black Sands (Beige Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "Cardomon (Bright Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "Dopple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png?v=1618597965",
        },
      ],
    },
  ];
  return (
    <div className="App">
      <div className="px-4 py-1 bg-lime-800 text-white">
        <p className="text-xs font-medium text-center">
          We're raising prices on all products by $1 today to support this
          planet.{" "}
          <a href="#" className="underline">
            Learn more
          </a>
        </p>
      </div>
      <header className="z-10 sticky top-0 px-6 py-3 flex items-center justify-between bg-white">
        {/* <div className="absolute inset-0 shadow-lg opacity-50"/> */}
        <div className="flex">
          <button className="h-8 w-8">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img
            className="h-9"
            src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
            alt="allbirds"
          />
        </div>
        <div className="flex">
          <button className="h-8 w-8">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </header>
      <main>
        <div>
          <div className="flex items-center justify-between px-6 py-4 pt-4 pb-3">
            <div>
              <div className="font-medium text-xs text-gray-900 space-x-2">
                <a href="#" className="underline">
                  Home
                </a>
                <span>/</span>
              </div>
              <div className="text-xg font-bold text-gray-900">
                Women's Shoes
              </div>
            </div>
            <div className="">
              <button className="block h-6 w-6">
                <svg
                  className="transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-2 overflow-x-auto scrollbar-hidden">
            <div className="px-8 text-sm inline-flex space-x-5">
              {categories.map((category) => (
                <a href="#" className="text-gray-800 whitespace-nowrap">
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="flex space-x-4 bg-green-700 bg-opacity-20 px-8 py-3">
            <h2 className="text-sm font-semibold text-gray-900">
              Pay it to the Planet.
            </h2>
          </div>
          <div className="py-12 px-8">
            {products.map((product) => (
              <div>
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-800">{product.description}</p>
                </div>
                <div className="mt-4 shadow-lg">
                  <div className="shadow-lg">
                    <a href="#">
                      <div>
                        <img src={product.styles[0].image} alt="" />
                      </div>
                      <div className="px-4 py-3">
                        <h3 className="text-sm font-semibold">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-800">
                          {product.styles[0].name}
                        </p>
                        <div></div>
                      </div>
                    </a>
                    <div className="mt-1 px-4 pb-4">
                      <p className="mt-1 text-sm text-gray-800">
                        {product.styles[0].price}
                      </p>
                      <div className="mt-3 px-4 flex space-x-4">
                        {product.styles.slice(0, 6).map((style, i) => (
                          <button
                            className={`h-6 w-6 flex flex-col border border-gray-200 transform -rotate-45 rounded-full overflow-hidden ${
                              i === 0
                                ? "ring-2 ring-offset-1 ring-gray-200"
                                : ""
                            } `}
                          >
                            <span className="sr-only">{style.name}</span>
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[0] }}
                            ></span>
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[1] }}
                            ></span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="border-t">
                      <button className="px-4 py-3 text-sm flex w-full justify-between">
                        <span className="font-semibold">Quick Add</span>
                        <span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
