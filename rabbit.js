var birdShop = [
    {
      title: 'Carefresh Small Animal Bedding, Natural, 60-L',
      image: 'https://img.chewy.com/is/image/catalog/94694_MAIN._AC_SS348_V1542742652_.jpg',
      price: '17.99',
      description: 'Carefresh Small Animal Bedding, Natural, 60-L'
    },

    { 
        title: 'Ware Critter Pops Small Animal Fun Chew Treats, Large',
        image: 'https://img.chewy.com/is/image/catalog/96131_MAIN._AC_SS348_V1565797655_.jpg',
        price: '2.99',
        description: 'Ware Critter Pops Small Animal Fun Chew Treats, Large'
    },

    { 
        title: 'Kaytee Small Animal Pro-Nail Trimmer, 6.25-in',
        image: 'https://img.chewy.com/is/image/catalog/101515_MAIN._AC_SS348_V1513979998_.jpg',
        price: '4.88',
        description: 'Kaytee Small Animal Pro-Nail Trimmer, 6.25-in',
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
    document.getElementById('rabbitmarket').innerHTML = postHTML