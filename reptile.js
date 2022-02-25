var reptileShop = [
    {
      title: 'Zoo Med Forest Floor Natural Cypress Mulch Reptile Bedding, 24-qt bag',
      image: 'https://img.chewy.com/is/catalog/96208._SS190_V1455841009_.jpg',
      price: '33.99',
      description: 'Zoo Med Forest Floor Natural Cypress Mulch Reptile Bedding, 24-qt bag'
    },

    { 
        title: 'Zoo Med Repti Basking Reptile Spot Lamp, 100-watt, 2 count',
        image: 'https://img.chewy.com/is/catalog/99053._SS190_V1458161167_.jpg',
        price: '21.84',
        description: 'Zoo Med Repti Basking Reptile Spot Lamp, 100-watt, 2 count'
    },

    { 
        title: 'Zoo Med Repti Calcium with D3 Reptile Supplement, 3-oz jar',
        image: 'https://img.chewy.com/is/catalog/96831._SS190_V1456923089_.jpg',
        price: '7.99',
        description: 'Zoo Med Repti Calcium with D3 Reptile Supplement, 3-oz jar',
    }
    
    
    
  
    
    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < reptileShop.length; i++){
        var heading = '<div class="product ' + '"><h5 class="titles">' + reptileShop[i].title + '</h5>'+''

        var image = ' <img src="' + reptileShop[i].image + '"/>'

        var price = '<p> $' + reptileShop[i].price + '</p>'

        var description = '<div class=""><p>'+ reptileShop[i].description + '</p><button type="button" class="btn btn-warning"> Add to cart</button></div></div>'
        
        var concatThis = heading + image + price + description

        postHTML = postHTML + concatThis
    }
    document.getElementById('reptilemarket').innerHTML = postHTML