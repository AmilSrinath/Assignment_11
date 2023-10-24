import {item_db} from "../db/db.js";

let netTot = 0;

$(document).ready(function() {
    $('#select').change(function() {
        var selectedOption = $(this).find('option:selected');
        let item_id = selectedOption.val();

        let index= item_db.findIndex(item => item.item_id === item_id);
        let itemDbElement = item_db[index];
        $('#itemName').text(itemDbElement.item_name);
        $('#itemQut').text(itemDbElement.quantity);
        $('#itemPrice').text(itemDbElement.price);

        $('#quantity_placeOrder').focus();
    });
});

$("#placeOrderbtns>button[type='button']").eq(0).on("click", () => {
    let item_id = $("#item_id_placeOrder").val();
    let quantity = $("#quantity_placeOrder").val();
    let total = quantity*100;

    let record = `<tr><td class="item_id">${item_id}</td><td class="quantity">${quantity}</td><td class="price">${total}</td></tr>`;
    $("#placeOrder-tbody").append(record);

    netTot+=total;

    $("#tot").text(netTot);
});

//Calculate
$("#cal").on("click", () => {
    let cash = $("#amount").val()-netTot;

    $("#cash2").text(cash);
});