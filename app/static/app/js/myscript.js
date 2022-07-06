$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})

$('.plus-cart').click(function(){
    var id =$(this).attr("pid").toString();
    var eml= this.parentNode.children[2]

    console.log(id)
    $.ajax({
        type:"GET",
        url:"/pluscart",
        date: {
            prod_id:id
        },
        success: function(data){
        eml.innnerText= data.quantity
        document.getElementById ("amount").innerText=data.amount
        document.getElementById("totalamount").innnerText=data.totalamount
        }
    })
})

$('.minus-cart').click(function(){
    var id =$(this).attr("pid").toString();
    var eml= this.parentNode.children[2]

    console.log(id)
    $.ajax({
        type:"GET",
        url:"/minuscart",
        date: {
            prod_id:id
        },
        success: function(data){
        eml.innnerText= data.quantity
        document.getElementById ("amount").innerText=data.amount
        document.getElementById("totalamount").innnerText=data.totalamount
        }
    })
})

$('.remove-cart').click(function(){
    var id =$(this).attr("pid").toString();
    var eml= this

    console.log(id)
    $.ajax({
        type:"GET",
        url:"/removecart",
        date: {
            prod_id:id
        },
        success: function(data){
            
        
        document.getElementById ("amount").innerText=data.amount
        document.getElementById("totalamount").innnerText=data.totalamount
        eml.parentNode.parentNode.parentNode.parentNode.remove()
        }
    })
})