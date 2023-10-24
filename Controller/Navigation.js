import {item_db} from "../db/db.js";

$("#customer-nav").on('click',()=>{
    $("#customerForm").css('display','block');
    $("#storeForm").css('display','none');
    $("#placeOrderForm").css('display','none');
    $("#myTabContent").css('display','none');
    $("#OrderHistoryForm").css('display','none');
});

$("#store-nav").on('click',()=>{
    $("#customerForm").css('display','none');
    $("#storeForm").css('display','block');
    $("#placeOrderForm").css('display','none');
    $("#myTabContent").css('display','none');
    $("#OrderHistoryForm").css('display','none');
});

$("#place-order-nav").on('click',()=>{
    $("#customerForm").css('display','none');
    $("#storeForm").css('display','none');
    $("#placeOrderForm").css('display','block');
    $("#myTabContent").css('display','none');
    $("#OrderHistoryForm").css('display','none');

    $("#select").empty();
    $("#select").html(`<option className="options">Select Item ID</option>`);
    item_db.map((item,index) => {
        let recode = `<option class="options">${item.item_id}</option>`
        $("#select").append(recode);
    });

});

$("#OrderHistory-nav").on('click',()=>{
    $("#customerForm").css('display','none');
    $("#storeForm").css('display','none');
    $("#placeOrderForm").css('display','none');
    $("#myTabContent").css('display','none');
    $("#OrderHistoryForm").css('display','block');
});