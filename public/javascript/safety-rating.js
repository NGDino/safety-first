// const { json } = require("sequelize/types");

// var rateyo = require("rateyo")
$(function() {
  console.log( "ready!" );




const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const endpoint = `/../../api/businesses/${id}`;

const trueValues = [];

fetch(endpoint)
  .then(response => response.json())
  .then(reviews => {
    const bizPosts = reviews.posts
    // for(const review of reviews){
      console.log(bizPosts)
      for(const bizpost of bizPosts){
        // var obj = JSON.parse(bizpost)
        var values = Object.keys(bizpost).map(function (key){return bizpost[key]; });
        console.log('the values', values)
        
          var trueAnswers = values.filter(function(e) { return e === true })
          console.log('these are true',trueAnswers)
        trueValues.push(trueAnswers)
          
      }
    // };
      console.log('true values', trueValues)
      // let trueCount= trueValues.joined().count;
      
  })

  



// const getSafetyScore = (reviews) =>{ 

  

//   for (i = 0; i < reviews.length; i++) {
//     const contactless = posts[i].contactless_payment;
//     console.log(contactless)
    
//   }

// }



$(function () {
 
  $("#rateYo").rateYo({
    rating: 3.6
  });
 
});

});