//array for all id

var countBoxes = [];

var pass = [];

function orderitem(items, index) {
  var toText = String(items);
  var items = document.forms[index];
  var txt = [];
  console.log(toText);

  for (i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      txt[i] = items[i].value;
      console.log(txt);
    }
    sessionStorage.setItem(toText, JSON.stringify(txt.filter((x) => x)));
  }
}

function getCheckboxItems(ArrID) {
  return ArrID.map(function (selector) {
    return {
      selector: selector,
      element: document.getElementById(selector),
    };
  });
}

function serializeCheckboxes(elements) {
  var container = elements.reduce(function (accumulator, item) {
    accumulator[item.selector] = item.element.checked;
    return accumulator;
  }, {});

  sessionStorage.setItem("container", JSON.stringify(container));
}

function readCheckboxes() {
  var itemChecked = [];
  var storage = sessionStorage.getItem("container"), //Your key
    container = storage ? JSON.parse(storage) : {};

  Object.keys(container).forEach(function (key) {
    var element = document.getElementById(key);
    //console.log(key);

    if (element) {
      element.checked = container[key];
      if (element.checked == true) {
        console.log(element.id);
        itemChecked.push(element.id);
      }
    }
  });
  console.log(itemChecked);
  sessionStorage.setItem("checkBoxID", JSON.stringify(itemChecked));
  console.log(JSON.parse(storage));
}

function save() {
  var getBoxes = document.getElementsByClassName("boxes");
  for (i = 0; i < getBoxes.length; i++) {
    var x = document.getElementsByClassName("boxes")[i].id;
    countBoxes[i] = x;
  }
  var passKeyID = countBoxes;
  console.log(passKeyID);
  var elements = getCheckboxItems(passKeyID);
  console.log(elements);
  serializeCheckboxes(elements);
}

function addCart(type, id, num) {
  document.getElementById(id).checked = true;
  save();
  orderitem(type, num);
}
