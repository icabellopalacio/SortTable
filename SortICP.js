
function setTableData(){
    $(getData()).each(functio(item,index){
        $("<div>").addClass("")
    })
    $("tbICP")    
}

function getData(){
    let itemData =   [{"Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180},
                      {"Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180},
                      {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        },
                        {
                        "Nombre": "Column",
                        "Edad": 35,
                        "Altura": 180
                        }
                    ]
    return  itemData;           
    }

/*ICP-->06/05/2019 -- Metodos para ordenar una tabla por cada columna*/
//Método que ordena el listado
function OrderTable(OrderItem) {
    let ItemToOrder = $(OrderItem).context.cellIndex + 1;
    let OrderDirection = typeof $(OrderItem).attr("orderdir") !== 'undefined' ? ($(OrderItem).attr("orderdir") === 'true') : false;
    let tableName = $(OrderItem).closest('table').attr('id');
    let orderData = [];
    let fnctCompare = function (rowA, rowb) {
        return ($(OrderItem).hasClass("orderNumber") ? ((OrderDirection === true) ? (rowA + rowb) :
                                                                                    (rowA - rowb)) :
                                                       ((OrderDirection === true) ? (rowA.toUpperCase() < rowb.toUpperCase()) :
                                                                                    (rowA.toUpperCase() > rowb.toUpperCase())));
    }
    console.log("Entra");
    $(OrderItem).addClass("fa fa-spinner");
    orderData = $("#" + tableName + " tr:gt(0)").sort(function (a, b) { 
        return fnctCompare($("td:nth-child(" + ItemToOrder + ")", a).text(), $("td:nth-child(" + ItemToOrder + ")", b).text()); 
    }); 
    if (orderData.length > 0){
        $("#" + tableName + " tbody").empty();
        $("#" + tableName + " tbody").append(orderData);
        $(OrderItem).attr("orderdir", (OrderDirection !== true));
        $("#" + tableName + " thead td").removeClass("fa fa-sort-alpha-asc fa-sort-alpha-desc fa-sort-numeric-asc fa-sort-numeric-desc fa-spinner");
        $(OrderItem).addClass($(OrderItem).hasClass("orderNumber") ? (OrderDirection === true) ? "fa fa-sort-numeric-desc" :"fa fa-sort-numeric-asc" :
                                                                     (OrderDirection === true) ? "fa fa-sort-alpha-desc" :"fa fa-sort-alpha-asc");
    }
}
