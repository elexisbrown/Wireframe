var dogShop = [
    {
      title: 'Blue Buffalo Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food, 30-lb bag',
      image: 'https://img.chewy.com/is/image/catalog/46861_MAIN._AC_SS348_V1636150597_.jpg',
      price: '55.98',
      description: 'Kaytee Basic Blend Wild Bird Food, 20-Ib bag'
    },

    { 
        title: 'KONG Classic Dog Toy, Large',
        image: 'https://img.chewy.com/is/image/catalog/53352_MAIN._AC_SS348_V1534449201_.jpg',
        price: '13.99',
        description: 'Yaheetech 52-in Rolling Bird Cage, Hammered Black, Large'
    },

    { 
        title: 'Frisco Dog Training & Potty Pads, 22 x 23-in, 20 count, Unscented',
        image: 'https://img.chewy.com/is/image/catalog/227482_MAIN._AC_SY348_V1604672822_.jpg',
        price: '7.99',
        description: 'Yaheetech 52-in Rolling Bird Cage, Hammered Black, Large',
    }
    
    
    
  
    
    ]
    
    var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i=0; i < dogShop.length; i++){
        var heading = '<div class="product ' + '"><h5 class="titles">' + dogShop[i].title + '</h5>'+''
        var image = '<img src="' + dogShop[i].image + '"/'

        var price = '<p> $' + dogShop[i].price + '</p></span>'

        var description = '<div class=""><p>'+ dogShop[i].description + '</p><button type="button" class="btn btn-warning"> Add to cart</button></div></div>'
        
        var concatThis = heading + image + price + description

        postHTML = postHTML + concatThis
    }
    document.getElementById('dogmarket').innerHTML = postHTML