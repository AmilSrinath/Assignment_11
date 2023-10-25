import {item_db} from "../db/db.js";
import {PlaceOrderModel} from "../model/PlaceOrderModel.js";

let netTot = 0;
let ItemIndexElement;

//Combo Box Row Click
$(document).ready(function() {
    $('#select').change(function(){
        var selectedOption = $(this).find('option:selected');
        let item_id = selectedOption.val();

        let index= item_db.findIndex(item => item.item_id === item_id);
        let itemDbElement = item_db[index];

        ItemIndexElement = itemDbElement;

        $('#itemName').text(itemDbElement.item_name);
        $('#itemQut').text(itemDbElement.quantity);
        $('#itemPrice').text(itemDbElement.price);

        $('#quantity_placeOrder').focus();
    });
});
document.getElementById("select").addEventListener("change", function() {
    if($('#select').val() === "Select Item ID"){
        $('#itemName').text("______________________________");
        $('#itemQut').text("_____________");
        $('#itemPrice').text("___________");
    }
});

//Add Button
var itemList = [];
$("#placeOrderbtns>button[type='button']").eq(0).on("click", () => {
    let item_id = $("#select").val();
    let quantity = parseInt($("#quantity_placeOrder").val());
    let unit_price = ItemIndexElement.price;
    let total = quantity * unit_price;

    let existingRow = $(`#placeOrder-tbody tr[data-item-id="${item_id}"]`);

    if (existingRow.length) {
        let existingQuantity = parseInt(existingRow.find('.quantity').text());
        let newQuantity = existingQuantity + quantity;
        let newTotal = newQuantity * unit_price;

        existingRow.find('.quantity').text(newQuantity);
        existingRow.find('.price').text(newTotal);
    } else {
        let record = `
        <tr data-item-id="${item_id}">
            <td class="item_id">${item_id}</td>
            <td class="item_price">${unit_price}</td>
            <td class="quantity">${quantity}</td>
            <td class="price">${total}</td>
            <td class="button">
                <button class="removeButton" type="button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>`;

        $("#placeOrder-tbody").append(record);
    }

    let netTot = 0;
    $("#placeOrder-tbody tr").each(function() {
        netTot += parseFloat($(this).find('.price').text());
    });

    $("#tot").text(netTot);

    $(".removeButton").on("click", function() {
        $(this).closest('tr').remove();

        let newNetTot = 0;
        $("#placeOrder-tbody tr").each(function() {
            newNetTot += parseFloat($(this).find('.price').text());
        });

        $("#tot").text(newNetTot);
    });
});


//Reset Button
$("#placeOrderbtnResetbtn").eq(0).on("click", () => {
    $('#itemName').text("______________________________");
    $('#itemQut').text("_____________");
    $('#itemPrice').text("___________");
});

//Calculate Button
$("#cal").on("click", () => {
    let cash = $("#amount").val()-netTot;

    $("#cash2").text(cash);
});


//Row Delete With Calculate new NetTot
$(document).ready(function() {
    $('#tblPalceOrder').on('click', '.removeButton', function() {
        var deletedRow = $(this).closest('tr');
        var deletedRowValues = [];

        deletedRow.find('td').each(function() {
            deletedRowValues.push($(this).text());
        });
        deletedRow.remove();
        netTot=netTot-deletedRowValues[3]
        $("#tot").text(netTot);
    });
});


