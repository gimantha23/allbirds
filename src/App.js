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
      name: "Women's Wool Runner Mizzles",
      description: "This is a sample description",
      previewText: "This is the preview description",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/6INCwpyUzrCOJdwyHDmQwv/c09923e25b3226aacdecb252e5cc2c81/Womens_TR-PCT.jpg",
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

    {
      name: "Women's Tree Dashers",
      description: "This is another sample description",
      previewText: "This is the preview description",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/4MjEdiJHplh6HFH6iem6PC/6416efa47ca9775d4e9eaa7c7666c805/W_PCT_WRUM.jpg",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Savanna Night (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Black Sands (Beige Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Cardomon (Bright Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Dopple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1",
        },
      ],
    },

    {
      name: "Women's Tree Toppers",
      description: "Just another sample description",
      previewText: "This is the preview description",
      previewImage:
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/2uQxW5KGZdfyo0MsfSi3W6/7821933447f0bcd2b053d042f6bae08a/WDM_Parent_Collection_Tile__1_.jpg",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Savanna Night (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Black Sands (Beige Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Cardomon (Bright Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Dopple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3lzAaTjslhlCa7QeBt4WT5/1",
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
              <div className="text-lg font-bold text-gray-900 md:text-2xl">
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
            <div className="px-8 text-sm inline-flex space-x-5 md:px-12">
              {categories.map((category) => (
                <a
                  href="#"
                  key={category}
                  className="text-gray-800 whitespace-nowrap"
                >
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
          <div className="py-12 px-8 space-y-14">
            {products.map((product) => (
              <div>
                <div>
                  <div>
                    <h2 className="text-lg font-semibold md:text-xl">
                      {product.name}
                    </h2>
                    <p className="text-sm text-gray-800">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 md:grid md:grid-cols-2 md:gap-6 md:items-start">
                    <div className="shadow-lg">
                      <div className="shadow-lg">
                        <a href="#">
                          <div>
                            <img
                              className="w-full"
                              src={product.styles[0].image}
                              alt=""
                            />
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
                          <div className="mt-3 px-4 flex space-x-4 md:space-x-2">
                            {product.styles.slice(0, 5).map((style, i) => (
                              <span className="md:flex-1 md:min-w-0">
                                <button
                                  className={`h-6 w-6 flex flex-col border border-gray-200 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:outline-none ${
                                    i === 0
                                      ? "ring-2 ring-offset-1 ring-gray-200"
                                      : ""
                                  } md:rounded-none md:w-full md:flex-1 md:min-w-0 md:aspect-w-1 md:aspect-h-1 md:border-0 ${
                                    i === 0
                                      ? "md:ring-1 md:ring-offset-0 md:ring-gray-300"
                                      : ""
                                  }`}
                                >
                                  <span className="sr-only">{style.name}</span>
                                  <span className="h-full w-full flex flex-col transform -rotate-45 md:hidden">
                                    <span
                                      className="h-3 w-6"
                                      style={{
                                        backgroundColor: style.colors[0],
                                      }}
                                    ></span>
                                    <span
                                      className="h-3 w-6"
                                      style={{
                                        backgroundColor: style.colors[1],
                                      }}
                                    ></span>
                                  </span>
                                  <span className="hidden md:h-full md:w-full md:flex">
                                    <img src={style.image} alt="" />
                                  </span>
                                </button>
                              </span>
                            ))}
                            <button
                              type="button"
                              className="w-7 h-7 rounded-full flex items-center justify-center hover:border-gray-900"
                            >
                              <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="border-t">
                          <button className="px-4 py-3 text-sm flex w-full justify-between md:hidden">
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
                    <div className="hidden md:block md:pb-0">
                      <div className="relative">
                        <img
                          className="w-full"
                          src={product.previewImage}
                          alt=""
                        />
                        <div className="absolute bottom-0 right-0 left-0 right">
                          <div className="absolute bottom-0 right-0 left-0 top-1/2 bg-gradient-to-t from-gray-900 opacity-95"></div>
                          <div>
                            <p className="px-8 pb-8 font-bold text-lg text-white capitalize">
                              {product.previewText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-700 py-12">
        <div className="px-6">
          <form action="#" method="post">
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium"
              >
                Enter your email to stay in touch!
              </label>
              <div className="relative border-b-2 border-white">
                <input
                  type="text"
                  className="bg-gray-600 absolute-inset-0 block w-full border-2 border-transparent focus:border-white focus:ring-0 transition"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="block w-full px-4 py-2 rounded bg-gray-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
