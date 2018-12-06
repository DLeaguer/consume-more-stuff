
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bobbles').del()
  .then(function () {
    // Inserts seed entries
    return knex('bobbles').insert([
      {
        title: "President Obama",
        description: "Prez Obama bobble head",
        price: 15,
        image: "http://2.bp.blogspot.com/-adgrscmCXE0/TkQZfcNvsII/AAAAAAAADZ4/zVuhxKU2h3w/s1600/obama+-+-bobblehead.gif",
        condition: "Excellent",
        category: "Presidents",
        status: true,
        user_id: 1
        },
      {
        title: "Michael Jackson",
        description: "Michael Jackson bobble head",
        price: 10,
        image: "http://blog.swagbucks.com/wp-content/uploads/2012/02/71o-800ojqL._AA1500_.jpg",
        condition: "Good",
        category: "Singers",
        status: true,
        user_id: 2
        },
      {
        title: "Angelina Jolie",
        description: "Maleficent bobble head",
        price: 12,
        image: "https://experiencethemistress.com/wp-content/uploads/2016/06/2014-Funko-Maleficent-Movie-Wacky-Wobbler-Bobble-Head-Vinyl-Figure-Unreleased-Prototype-002.jpg",
        condition: "Poor",
        category: "Actors",
        status: true,
        user_id: 3
        },
      {
        title:'SuperMan',
        description: 'Its a bird.. its a plane... its SUPER MANNN',
        price: 25,
        image: 'https://cdn.shopify.com/s/files/1/0049/0872/products/FOCO_DC_Justice_League_Superman_Bobble_Head_Figure.jpg?v=1537485859	Excellent	Actors	true		2018-12-04 21:35:23	2018-12-04 21:35:23',
        condition: 'Good',
        category: 'Actors',
        status: true,
        user_id: 2

        },
      { title: 'Wonder Woman',	
        description: "It's Gal Gadot",	
        price: 45,	
        image: 'https://images-na.ssl-images-amazon.com/images/I/716xy9pos3L._SL1000_.jpg',	
        condition: 'Excellent',
        category: 'Actors',
        status: true, 
        user_id: 2
        },
      { title: 'Jerry Garcia',	
        description: 'Leader of the Grateful Dead!',
        price: 35,	
        image: 'https://www.picclickimg.com/d/w1600/pict/152805157267_/Grateful-Dead-BOBBLEHEAD-Jerry-Garcia-PHISH-FURTHUR.jpg',
        condition: 'Excellent',
        category: 'Singers',
        status: true,
        user_id: 1
        },
      { title:'President Barack Obama',	
        description: '44th President of the United States of America',
        price:	30,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51fFEQtSnhL.jpg',	
        condition: 'Good',
        category: 'Presidents',
        status: true,
        user_id: 2
        },
      { title: 'President Lincoln',	
        description: '16th President of the United States of America',
        price: 45,	
        image: 'https://target.scene7.com/is/image/Target/GUEST_ad6d6c43-9b4a-49f4-b861-4c1e1d046e87?wid=1400',	
        condition: 'Excellent',
        category: 'Presidents',
        status: true,
        user_id: 3
        },
      { title: 'Elton John',	
        description: 'Official Goodbye Yellow Brick Road Bobbble',
        price: 45,	
        image: 'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fXasbzGW/SharedImage-79378.png?t=f0b25743a08e61be6e8c',
        condition: 'Good',
        category: 'Singers',
        status: true,
        user_id: 2
        },
      { title: 'Bob Marley',
        description: 'Rasta Man Himself, Bob Marley Bobble.',
        price: 30,
        image: 'https://i.ebayimg.com/images/g/ZcUAAOSwux5YVUYq/s-l1600.jpg',	condition: 'Poor',	
        category: 'Singers',
        status: true,
        user_id: 3
        },
      { title: 'President Trump',	
        description: 'Our 45th President of the United States',
        price: 35,	
        image: 'https://images-na.ssl-images-amazon.com/images/I/61NCvZzO03L._SY679_.jpg',	
        condition: 'Poor',
        category: 'Presidents',
        status: true,
        user_id: 2
        },
      { title: 'Trey Anastasio', 	
        description: 'Lead member of Phish!',
        price: 25,	
        image: 'https://i.pinimg.com/474x/8e/6b/15/8e6b1501965d1ef306ca91d6b79758bf--surprise-birthday-toy-art.jpg',
        condition: 'Good',
        category: 'Singers',
        status:true,
        user_id: 1
        },
      { title: 'Johnny Depp',	
        description: 'Johnny Depp as Jack Sparrow',
        price: 30,	
        image: 'https://thumbs.worthpoint.com/zoom/images1/1/1013/16/vintage-johnny-depp-bobble-head_1_3683b7a02fc5fac760ad4376b061334f.jpg',
        condition: 'Excellent',
        category: 'Actors',
        status: true,
        user_id: 3
        }  

    ]);
  });
};


  		

		





		

  

	

