// Find the element that was clicked
function getTarget(e) {
    if (!e) {
        e = window.event;
    }

    return e.target || e.srcElement;
}


// Open and close the instruction sections
var viewInfo = document.querySelector("main");

viewInfo.addEventListener("click", displayInfo, false);

function displayInfo(e) {
    var target = getTarget(e);

    if (target.tagName == "H2") {
        var tParent = target.parentNode;
        var parentDiv = tParent.children;

        if (parentDiv[1].style.display == "block") {
            parentDiv[1].style.display = "none";
        } else {
            parentDiv[1].style.display = "block";
        }
    }
}


// Select the list and Add Item button
var myList = document.querySelector("#codeList ul");
var addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addItem, false);


// Get the existing list items
var listItems = document.querySelectorAll("#codeList li");
var totalItems = listItems.length;


// Add trash icons to the existing items
for (var i = 0; i < totalItems; i++) {
    var trashIcon = document.createElement("img");

    trashIcon.setAttribute(
        "src",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
    );

    trashIcon.className = "listIcon";

    listItems[i].appendChild(trashIcon);
}


// Add a new item
function addItem() {
    var newItem = prompt("New Item:");

    if (newItem == null || newItem.trim() == "") {
        return;
    }

    var newLI = document.createElement("li");
    var newLIText = document.createTextNode(newItem);

    newLI.appendChild(newLIText);


    // Create the trash icon for the new item
    var trashIcon = document.createElement("img");

    trashIcon.setAttribute(
        "src",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
    );

    trashIcon.className = "listIcon";

    newLI.appendChild(trashIcon);
    myList.appendChild(newLI);
}


// Listen for clicks on the list
myList.addEventListener("click", changeProp, false);

function changeProp(e) {
    var target = getTarget(e);


    // Remove the item when its trash icon is clicked
    if (target.tagName == "IMG") {
        var listItem = target.parentNode;
        myList.removeChild(listItem);
    }


    // Gray out or restore an item when the LI is clicked
    else if (target.tagName == "LI") {
        if (target.classList.contains("selected")) {
            target.classList.remove("selected");
        } else {
            target.classList.add("selected");
        }
    }
}