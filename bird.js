var birdShop = [
    {
      title: 'Kaytee Basic Blend Wild Bird Food, 20-Ib bag',
      image: 'https://img.chewy.com/is/image/catalog/255437_PT3._SS190_V1602707496_.jpg',
      price: '13.99',
      description: 'Kaytee Basic Blend Wild Bird Food, 20-Ib bag'
    },

    { 
        title: 'Yaheetech 52-in Rolling Bird Cage, Hammered Black, Large',
        image: 'https://img.chewy.com/is/image/catalog/242683_MAIN._AC_SS348_V1637102225_.jpg',
        price: '135.99',
        description: 'Yaheetech 52-in Rolling Bird Cage, Hammered Black, Large'
    },

    { 
        title: 'Harvest Seed & Supply SongBird Wild Bird Food, 10-lb bag',
        image: 'https://img.chewy.com/is/image/catalog/217686_main._SS190_V1579645992_.jpg',
        price: '23.99',
        description: 'Harvest Seed & Supply SongBird Wild Bird Food, 10-lb bag',
    }
    
    
    
  
    
    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < birdShop.length; i++){
        var heading = '<div class="product ' + '"><h5 class="titles">' + birdShop[i].title + '</h5>'+''

        var image = ' <img src="' + birdShop[i].image + '"/>'

        var price = '<p> $' + birdShop[i].price + '</p>'

        var description = '<div class=""><p>'+ birdShop[i].description + '</p><button type="button" class="btn btn-warning"> Add to cart</button></div></div>'
        
        var concatThis = heading + image + price + description

        postHTML = postHTML + concatThis
    }
    document.getElementById('birdmarket').innerHTML = postHTML