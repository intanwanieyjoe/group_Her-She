var products = [
  {
    product: "printedshawl",
    name: "Printed Shawl",
    royalprintedshawl: 18,
    beboldshawl: 20,
    hershemonoramshawl: 22,
    celinelongshawl: 20,
    dianprintedshawl: 18,
    royalprintedshawlpic:
      "./Images/Product/Printed Shawl/royalprintedshawl.png",
    beboldshawlpic: "./Images/Product/Printed Shawl/beboldhsawl.png",
    hershemonoramshawlpic:
      "./Images/Product/Printed Shawl/hershemonogramshawl.png",
    celinelongshawlpic: "./Images/Product/Printed Shawl/celinelongshawl.jpg",
    dianprintedshawlpic: "./Images/Product/Printed Shawl/dianprintedshawl.png",
  },
  {
    product: "plainshawl",
    name: "Plain Shawl",
    windypleatedshawl: 10,
    sophiapleatedshawl: 18,
    ixoralongshawl: 22,
    thalialongshawl: 20,
    inarapleatedshawl: 24,
    windypleatedshawlpic: "./Images/Product/Plain Shawl/windypleatedshawl.png",
    sophiapleatedshawlpic:
      "./Images/Product/Plain Shawl/sophiapleatedshawl.png",
    ixoralongshawlpic: "./Images/Product/Plain Shawl/ixoralongshawl.png",
    thalialongshawlpic: "./Images/Product/Plain Shawl/thalialongshawl.jpg",
    inarapleatedshawlpic: "./Images/Product/Plain Shawl/inarapleatedshawl.png",
  },
  {
    product: "squareedition",
    name: "Square Edition",
    tasneembasicsquare: 14,
    dahliaprintedsquare: 12,
    aurorabasicsquare: 12,
    mawareditionsquare: 12,
    wardabasicsquare: 10,
    tasneembasicsquarepic:
      "./Images/Product/Square Edition/tasneembasicsquare.png",
    dahliaprintedsquarepic:
      "./Images/Product/Square Edition/dahliaprintedsquare.png",
    aurorabasicsquarepic:
      "./Images/Product/Square Edition/aurorabasicsquare.png",
    mawareditionsquarepic:
      "./Images/Product/Square Edition/mawareditionsquare.png",
    wardabasicsquarepic: "./Images/Product/Square Edition/wardabasicsquare.png",
  },
];

function cart() {
  let eachCart = [];
  let eachItem = [];
  var price = 0;
  var priceEach = 0;
  var u = document.getElementById("cart-overflow");
  //console.log(sessionStorage.getItem("checkBoxID"));
  document.getElementById("no-order").innerHTML =
    "<h1>No order has been recorded. Please go to Product to add product to cart.</h1>";

  for (let num = 0; num < products.length; num++) {
    var product = JSON.parse(
      sessionStorage.getItem(products[num].product.toString())
    );
    console.log(product);

    if (product == 0 || product == null) {
      var zeroVal = [];
      document.getElementById(
        products[num].product.toString() + "details"
      ).style.display = "none";

      sessionStorage.setItem(
        products[num].product.toString(),
        JSON.stringify(zeroVal)
      );
    } else {
      const itemsBought = product.map((x) =>
        x.toLowerCase().split(" ").join("")
      );

      const bought = product.map((y) => y.split(" ").join(" "));

      document.getElementById("no-order").style.display = "none";

      //let display available
      document.getElementById("order-display").style.display = "table-row";
      document.getElementById("cart-display").style.display = "table-row";
      document.getElementById("order-page-title").style.display = "table-row";

      //create dynimacally content inside product details
      var takeTrID = document.getElementById(
        products[num].product.toString() + "details"
      );
      var tdFirst = document.createElement("td");
      var tdSecond = document.createElement("td");
      var tdThird = document.createElement("td");
      var br = document.createElement("br");
      var tdItems = document.createElement("div");
      tdItems.id = products[num].product + "items";
      var tdCart = document.createElement("div");
      tdCart.id = products[num].product + "cart";
      var tdPrice = document.createElement("div");
      tdPrice.id = products[num].product + "price";

      //append the child
      tdFirst.appendChild(tdItems);
      tdSecond.appendChild(br);
      tdSecond.appendChild(tdCart);
      tdThird.appendChild(tdPrice);
      takeTrID.appendChild(tdFirst);
      takeTrID.appendChild(tdSecond);
      takeTrID.appendChild(tdThird);
      console.log(takeTrID);

      for (let item = 0; item < itemsBought.length; item++) {
        var illiterateItem = itemsBought[item];
        var testbor = bought[item];
        console.log(illiterateItem);
        var cartItem = product[item];
        var priceChanges = products[num][illiterateItem];
        var objTo = document.getElementById(
          products[num].product.toString() + "cart"
        );

        //create outer div element into the html
        var div = document.createElement("div");
        div.className = "DivOuter";
        //create button add
        var buttonAdd = document.createElement("button");
        buttonAdd.id = products[num].product + illiterateItem + "add";
        buttonAdd.innerHTML = "+";
        buttonAdd.onclick = function () {
          add(this.id, this.parentNode.childNodes[1].id);
        };

        //create input
        var input = document.createElement("input");
        input.id = products[num].product + illiterateItem + "input";
        input.type = "number";
        input.disabled = "true";
        input.value =
          JSON.parse(
            sessionStorage.getItem(
              products[num].product + illiterateItem + "input"
            )
          ) + 1;

        if (input.value > 1) {
          input.value = JSON.parse(
            sessionStorage.getItem(
              products[num].product + illiterateItem + "input"
            )
          );
        } else if (input.value == 1) {
          sessionStorage.setItem(
            products[num].product + illiterateItem + "input",
            input.value
          );
        }

        //create button substract
        var buttonMinus = document.createElement("button");
        buttonMinus.id = products[num].product + illiterateItem + "subtract";
        buttonMinus.innerHTML = "-";
        buttonMinus.onclick = function () {
          substract(this.id, this.parentNode.childNodes[1].id);
        };

        //create delete button
        var deleteButton = document.createElement("button");
        deleteButton.id = products[num].product + illiterateItem + "delete";
        deleteButton.name = testbor;
        console.log(illiterateItem);
        deleteButton.innerHTML = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = function () {
          document.getElementById(itemsBought[item]).checked = false;
          save();
          deleteOrder(this.name, products[num].product);
          window.location.reload();
        };

        //create hidden checkbox
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "boxes";
        checkBox.id = illiterateItem;
        checkBox.style.display = "none";

        //create image
        var innerCart = document.createElement("div");
        innerCart.className = "inner-cart";
        var imageArr = products[num][illiterateItem + "pic"];
        var innerImage = document.createElement("img");
        innerImage.setAttribute("src", imageArr);
        var productName = document.createElement("h1");
        productName.appendChild(document.createTextNode(illiterateItem));
        //innerImage.id = products[num].product + illiterateItem + "pic";

        innerCart.appendChild(innerImage);
        innerCart.appendChild(productName);

        //appendchild to the element

        div.appendChild(buttonMinus);
        div.appendChild(input);
        div.appendChild(buttonAdd);
        div.appendChild(deleteButton);
        div.appendChild(checkBox);
        objTo.appendChild(div);
        u.appendChild(innerCart);
        console.log(u);

        //here need something confirmation if nk add product sama or not, priceChanges ni

        eachItem.push(priceChanges * input.value);
        eachCart.push(
          cartItem
          /*+
              " x " +
              JSON.parse(sessionStorage.getItem(illiterateItem + "input"))*/
        );
        var price = (price += eachItem[item]);
        var priceEach = (priceEach += priceChanges);
      }

      if (priceEach > 0) {
        document.getElementById(
          products[num].product.toString() + "items"
        ).innerHTML = products[num].name + "<br>" + eachCart.join("<br>");
        document.getElementById(
          products[num].product.toString() + "price"
        ).innerHTML = "<br>RM" + eachItem.join("<br>RM");
      } else if (product.length == 0) {
        document.getElementById(
          products[num].product.toString() + "details"
        ).style.display = "none";
      }

      priceEach = 0;
      eachItem = [];
      eachCart = [];

      if (price == 0) {
        document.getElementById("order-price").innerHTML = "RM 0";
      } else {
        document.getElementById("order-price").innerHTML = "RM" + price;
        //guna session utk tarik data from here, price value then guna this for form submit tu lol
        sessionStorage.setItem("total-order", JSON.stringify(price));
      }
    }
  }
}

function add(buttonID, inputID) {
  let input = document.querySelector("#" + inputID);
  //let btnadd = document.querySelector("#" + buttonID);
  input.value = parseInt(input.value) + 1;
  sessionStorage.setItem(inputID.toString(), input.value);

  document.getElementById("go-order").style.display = "none";

  /*
    fetch(url).then((res) => {
      element.innerHTML = res;
    });
    */
}

function substract(buttonID, inputID) {
  let input = document.querySelector("#" + inputID);
  //let btnsubs = document.querySelector("#" + buttonID);

  if (input.value == 1) {
    input.value = 1;
  } else {
    input.value = parseInt(input.value) - 1;
    sessionStorage.setItem(inputID.toString(), input.value);
  }

  document.getElementById("go-order").style.display = "none";
}

function deleteOrder(orderId, productName) {
  console.log(productName);
  var getLol = JSON.parse(sessionStorage.getItem(productName));
  console.log(orderId);
  console.log(getLol);
  let pos = getLol.indexOf(orderId);
  console.log(pos);
  let removedItem = getLol.splice(pos, 1);
  console.log(getLol);
  sessionStorage.setItem(productName, JSON.stringify(getLol.filter((x) => x)));
}
