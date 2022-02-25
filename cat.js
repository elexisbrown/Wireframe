var catShop = [
    {
      title: 'Frisco 33.5-in Sisal Cat Scratching Post, Gray',
      image: 'https://img.chewy.com/is/image/catalog/163749_MAIN._AC_SS348_V1584451079_.jpg',
      price: '34.99',
      description: 'Frisco 33.5-in Sisal Cat Scratching Post, Gra'
    },

    { 
        title: 'Friskies Pate Country Style Dinner Canned Cat Food, 5.5-oz, case of 24',
        image: 'https://img.chewy.com/is/image/catalog/76181_MAIN._AC_SS348_V1638493372_.jpg',
        price: '16.80',
        description: 'Friskies Pate Country Style Dinner Canned Cat Food, 5.5-oz, case of 24'
    },

    { 
        title: 'Tidy Cats Glade Tough Scented Clumping Clay Cat Litter, 20-lb jug',
        image: 'https://img.chewy.com/is/image/catalog/66923_MAIN._AC_SS348_V1617073918_.jpg',
        price: '25.99',
        description: 'Tidy Cats Glade Tough Scented Clumping Clay Cat Litter, 20-lb jug',
    }
    
    
    
  
    
    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < catShop.length; i++){
        var heading = '<div class="product ' + '"><h5 class="titles">' + catShop[i].title + '</h5>'+''

        var image = ' <img src="' + catShop[i].image + '"/>'

        var price = '<p> $' + catShop[i].price + '</p>'

        var description = '<div class=""><p>'+ catShop[i].description + '</p><button type="button" class="btn btn-warning"> Add to cart</button></div></div>'
        
        var concatThis = heading + image + price + description

        postHTML = postHTML + concatThis
    }
    document.getElementById('catmarket').innerHTML = postHTML