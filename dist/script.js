function Cartx() {
  React.useEffect(() => {});
  let totalamount = 0;
  let cartItems = 0;
  const [total, setTotal] = React.useState({
    totalQty: 0,
    totalPrice: 0 });

  const [data, setdata] = React.useState([
  {
    productName: "Aurdino (UNO)",
    productUrl: "https://m.media-amazon.com/images/I/51FKBDpXEqL.jpg",
    productQty: 0,
    productPrice: 560,
    productTotal: 0 },

  {
    productName: "NIC",
    productUrl: "https://m.media-amazon.com/images/I/81xhxQ7qCbL._SX679_.jpg",
    productQty: 0,
    productPrice: 210,
    productTotal: 0 },

  {
    productName: "Cabinet",
    productUrl: "https://m.media-amazon.com/images/I/61-0HSm+zeL._SL1200_.jpg",
    productQty: 0,
    productPrice: 2990,
    productTotal: 0 },

  {
    productName: "Motherboard",
    productUrl: "https://m.media-amazon.com/images/I/818fDro1x9L._SL1500_.jpg",
    productQty: 0,
    productPrice: 7980,
    productTotal: 0 },

  {
    productName: "Router",
    productUrl: "https://m.media-amazon.com/images/I/51p2d9NML5L._SL1000_.jpg",
    productQty: 0,
    productPrice: 3450,
    productTotal: 0 },

  {
    productName: "Ram",
    productUrl: "https://m.media-amazon.com/images/I/51eb3VQyt4L._SL1000_.jpg",
    productQty: 0,
    productPrice: 13150,
    productTotal: 0 }]);


  const totalQtyAndPrice = () => {
    let qty = 0,
    price = 0;
    data.map(
    (item) => (
    qty = qty + item.productQty, price = price + item.productTotal));


    setTotal({ totalQty: qty, totalPrice: price });
  };
  const [eComList, setEComList] = React.useState(data);
  const Inc = index => {
    data[index].productQty = data[index].productQty + 1;
    data[index].productTotal =
    data[index].productPrice * data[index].productQty;
    setEComList(data);
    setdata(eComList);
    totalQtyAndPrice();
  };
  const Drc = index => {
    if (data[index].productQty > 0) {
      data[index].productQty = data[index].productQty - 1;
      data[index].productTotal =
      data[index].productPrice * data[index].productQty;
      setEComList(data);
      setdata(eComList);
      totalQtyAndPrice();
    }
  };
  const cartList = index => {
    if (data[index].productQty > 0) {
      return /*#__PURE__*/(
        React.createElement("tr", null, /*#__PURE__*/
        React.createElement("td", null, /*#__PURE__*/React.createElement("span", { class: "text-truncate" }, data[index].productName), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
        React.createElement("button", { class: "btn btn-sm bg-colord colorl", onClick: () => {Inc(index);} }, "+"), " ", data[index].productQty, " ", /*#__PURE__*/React.createElement("button", { class: "btn btn-sm bg-colord colorl", onClick: () => {Drc(index);} }, "-")), /*#__PURE__*/
        React.createElement("td", { class: "text-right w-25" }, data[index].productTotal, ".00")));


    }
  };
  const billing = () => {
    let grossamount = 0;
    let taxamount = 0;
    data.map(
    (item) =>
    grossamount = grossamount + item.productTotal);


    let tempx = grossamount;
    grossamount = grossamount.toFixed(2);
    taxamount = grossamount * 18 / 100;
    let tempy = taxamount;
    taxamount = (Math.round((taxamount + Number.EPSILON) * 100) / 100).toFixed(2);
    totalamount = tempx + tempy;
    if (cartItems > 0) {
      totalamount = totalamount + 40;
    }
    totalamount = totalamount.toFixed(2);
    return /*#__PURE__*/(
      React.createElement("table", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "Gross Amount"), /*#__PURE__*/
      React.createElement("td", null, ":"), /*#__PURE__*/
      React.createElement("td", { class: "w-25 text-right" }, grossamount)), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "Tax Amount (18%)"), /*#__PURE__*/
      React.createElement("td", null, ":"), /*#__PURE__*/
      React.createElement("td", { class: "w-25 text-right" }, taxamount)), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "Shipping Amount"), /*#__PURE__*/
      React.createElement("td", null, ":"), /*#__PURE__*/
      React.createElement("td", { class: "w-25 text-right" }, "40.00"))));



  };
  const cartCounter = () => {
    data.map(item => {
      if (item.productQty > 0) {
        cartItems = cartItems + 1;
      }
    });
    return cartItems;
  };
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { class: "container-fluid jumbotron rounded-0 text-center bg-colord mb-0" }, /*#__PURE__*/
    React.createElement("h1", { class: "colorl" }, "e-commerce cart")), /*#__PURE__*/

    React.createElement("div", { class: "bg-colorl" }, /*#__PURE__*/
    React.createElement("nav", { class: "container navbar navbar-expand-lg navbar-light colord bg-transparent" }, /*#__PURE__*/
    React.createElement("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" }, /*#__PURE__*/
    React.createElement("span", { class: "navbar-toggler-icon" })), /*#__PURE__*/


    React.createElement("div", { class: "collapse navbar-collapse", id: "navbarSupportedContent" }, /*#__PURE__*/
    React.createElement("ul", { class: "navbar-nav mr-auto" }, /*#__PURE__*/
    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { class: "nav-link", href: "#" }, "Home")), /*#__PURE__*/

    React.createElement("li", { class: "nav-item active" }, /*#__PURE__*/
    React.createElement("a", { class: "nav-link", href: "#" }, "Products")), /*#__PURE__*/

    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { class: "nav-link", href: "#" }, "About us")), /*#__PURE__*/

    React.createElement("li", { class: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { class: "nav-link", href: "#" }, "Contacts"))), /*#__PURE__*/


    React.createElement("div", { class: "form-inline my-2 my-lg-0" }, /*#__PURE__*/
    React.createElement("a", { href: "#", class: "colord mr-4" }, /*#__PURE__*/React.createElement("b", null, "Cart ", /*#__PURE__*/React.createElement("span", { class: "badge bg-colord colorl" }, cartCounter()))), /*#__PURE__*/
    React.createElement("button", { class: "btn bg-colord colorl btn-md" }, "Logout")))))), /*#__PURE__*/





    React.createElement("div", { class: "container-fluid content bg-colord" }, /*#__PURE__*/
    React.createElement("div", { class: "container p-5 colorl" }, /*#__PURE__*/
    React.createElement("h5", null, "All Products"), /*#__PURE__*/
    React.createElement("div", { class: "m-3 row" }, /*#__PURE__*/
    React.createElement("div", { class: "col-md-9" }, /*#__PURE__*/
    React.createElement("div", { class: "row" },
    data.map((item, index) => /*#__PURE__*/
    React.createElement("div", { class: "card col-md-3 m-4" }, /*#__PURE__*/
    React.createElement("div", { class: "card-image" }, /*#__PURE__*/
    React.createElement("img", { src: item.productUrl, height: "180", width: "100%" })), /*#__PURE__*/

    React.createElement("div", { class: "card-header text-center colord bg-transparent" },
    item.productName, /*#__PURE__*/
    React.createElement("br", null), "Price : ",
    item.productPrice, ".00"), /*#__PURE__*/

    React.createElement("button", { class: "btn bg-colord colorl mb-2", onClick: () => {Inc(index);} }, "Add To Cart"))))), /*#__PURE__*/




    React.createElement("div", { class: "col-md-3 mt-4" }, /*#__PURE__*/
    React.createElement("div", { class: "rounded-2 card p-2 colord" }, /*#__PURE__*/
    React.createElement("h5", null, "Cart"), /*#__PURE__*/
    React.createElement("div", { class: "border" }), /*#__PURE__*/
    React.createElement("div", { class: "cart-menu" }, /*#__PURE__*/
    React.createElement("table", null,
    data.map((item, index) =>
    cartList(index)))), /*#__PURE__*/



    React.createElement("div", { class: "border" }), /*#__PURE__*/
    React.createElement("div", { class: "" },
    billing()), /*#__PURE__*/

    React.createElement("div", { class: "border" }), /*#__PURE__*/
    React.createElement("div", { class: "" }, /*#__PURE__*/
    React.createElement("table", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, "Total Amount"), /*#__PURE__*/
    React.createElement("td", { class: "w-25 text-right" }, ":"), /*#__PURE__*/
    React.createElement("td", { class: "w-25 text-right" }, totalamount))))))))), /*#__PURE__*/








    React.createElement("div", { class: "p-3 text-center bg-colorl" }, /*#__PURE__*/
    React.createElement("span", null, "Assignment 7 [ Akshay Jangir ] "), /*#__PURE__*/
    React.createElement("span", { class: "bg-colord p-2 rounded" }, "\uD83D\uDE01 \uD83D\uDE0E \uD83D\uDD25"))));



}

ReactDOM.render( /*#__PURE__*/
React.createElement(Cartx, null),
document.getElementById('root'));
