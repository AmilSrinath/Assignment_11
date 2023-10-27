import {customer_db, item_db} from "../db/db.js";

const loadStudentData = () =>{
    $("#customer-tbl-body").empty();
    customer_db.map((customer,index) => {
        let recode = `<tr><td class='customer_id'>${customer.cus_id}</td><td class='name'>${customer.name}</td><td class='nic'>${customer.nic}</td><td class='address'>${customer.address}</td></tr>`
        $("#customer-tbl-body").append(recode);
    })
}

$("#customer-nav").on('click',()=>{
    $("#customerForm").css('display','block');
    $("#storeForm").css('display','none');
    $("#placeOrderForm").css('display','none');
    $("#myTabContent").css('display','none');
    $("#OrderHistoryForm").css('display','none');
    loadStudentData();
    //ID Generate
    /*if (customer_db.length === 0){
        $('#cus_id').val(1);
    }else {
        let lastElement = customer_db[customer_db.length - 1];
        $('#cus_id').val((parseInt(lastElement.cus_id))+1);
    }*/

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

    $("#selectCus_ID").empty();
    $("#selectCus_ID").html(`<option className="options">Select Customer ID</option>`);
    customer_db.map((customer,index) => {
        let recode = `<option class="options">${customer.cus_id}</option>`
        $("#selectCus_ID").append(recode);
    });

    $('#itemName').text("______________________________");
    $('#itemQut').text("_____________");
    $('#itemPrice').text("___________");
});

$("#OrderHistory-nav").on('click',()=>{
    $("#customerForm").css('display','none');
    $("#storeForm").css('display','none');
    $("#placeOrderForm").css('display','none');
    $("#myTabContent").css('display','none');
    $("#OrderHistoryForm").css('display','block');
});