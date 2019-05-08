
function setTableData(){
    let itemTr;
    let itemTbody = $("#tbICP > tbody");
    $(getData()).each(function(index,item) {
        itemTr = $("<tr>");
        $(itemTr).append($("<td>").text(item.Nombre));
        $(itemTr).append($("<td>").text(item.Edad));
        $(itemTr).append($("<td>").text(item.Altura));
        $(itemTbody).append($(itemTr));
    });
}

function getData(){
    let itemData =   [{"Nombre": "Nombre23",
                        "Edad": 35,
                        "Altura": 180},
                      {"Nombre": "Nombre43",
                        "Edad": 24,
                        "Altura": 156},
                      {"Nombre": "Nombre67",
                        "Edad": 2,
                        "Altura": 93},
                      {"Nombre": "Nombre78",
                        "Edad": 12,
                        "Altura": 145},
                      {"Nombre": "Nombre45",
                        "Edad": 57,
                        "Altura": 190},
                      {"Nombre": "Nombre21",
                        "Edad": 15,
                        "Altura": 175},
                      {"Nombre": "Nombre01",
                        "Edad": 32,
                        "Altura": 165},
                      {"Nombre": "Nombre52",
                        "Edad": 26,
                        "Altura": 174},
                      {"Nombre": "Nombre12",
                        "Edad": 28,
                        "Altura": 168},
                      {"Nombre": "Nombre10",
                        "Edad": 78,
                        "Altura": 165},
                      {"Nombre": "Nombre11",
                        "Edad": 14,
                        "Altura": 158}]
    return  itemData;           
    }

/*ICP-->06/05/2019 -- Metodos para ordenar una tabla por cada columna*/
function OrderTable(OrderItem) {
    let ItemToOrder = $(OrderItem)[0].cellIndex + 1;
    let OrderDirection = typeof $(OrderItem).attr("orderdir") !== 'undefined' ? ($(OrderItem).attr("orderdir") === 'true') : false;
    let tableName = $(OrderItem).closest('table').attr('id');
    let orderData = []; 
    let fnctCompare = function (rowA, rowb) {
        return ($(OrderItem).hasClass("orderNumber") ? ((OrderDirection === true) ? (parseInt(rowA, 10) > parseInt(rowb, 10)) ? -1:1 :
                                                                                    (parseInt(rowA, 10) < parseInt(rowb, 10)) ? -1:1 ) :
                                                       ((OrderDirection === true) ? (rowA.toUpperCase() > rowb.toUpperCase()) ? -1:1 :
                                                                                    (rowA.toUpperCase() < rowb.toUpperCase()) ? -1:1));
    }
    $(OrderItem).addClass("fa fa-spinner");
    orderData = [...$("#" + tableName + " tr:gt(0)")].sort(function (a, b) { 
        return fnctCompare($($("td:nth-child(" + ItemToOrder + ")", a)[0]).text(), $($("td:nth-child(" + ItemToOrder + ")", b)[0]).text()); 
    }); 
    if (orderData.length > 0){
        $("#" + tableName + " tbody").empty();
        $("#" + tableName + " tbody").append(orderData);
        $(OrderItem).attr("orderdir", (OrderDirection !== true));
        $("#" + tableName + " thead th").removeClass("fa fa-sort-alpha-up fa-sort-alpha-down fa-spinner");
        $(OrderItem).addClass((OrderDirection === true) ? "fa fa-sort-alpha-up" :"fa fa-sort-alpha-down");
    }
}
