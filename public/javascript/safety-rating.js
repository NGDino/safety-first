$(function() {
  console.log( "ready!" );

// get id for fetch
const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

//api endpoint
const endpoint = `/../../api/businesses/${id}`;

//let trueValues =[]
let percentArr = []
let rating 

let trueCount = 0;

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
        var number = []
        for(i = 2; i < values.length; i++){
          if (values[i]){
            number.push(1)
          } else {
            number.push(0)
          }
        }
        var eachTrueAmount = number.reduce((a,b)=> a + b ,0)
        var eachTruePercent = eachTrueAmount / 6
        percentArr.push(Math.round(eachTruePercent * 100))
        // Math.round(eachTruePercent)
        
          // var trueAnswers = values.filter(function(e) { return e === true }).length
          // console.log('these are true length', trueAnswers)
        
          
      }
      let average = (array) => array.reduce((a, b) => a + b) / array.length;
      rating = average(percentArr);
      console.log(' if this works', percentArr)
      console.log('afkjdlkfjfkj rating', rating)
      ratingFunc(rating)
    // };
      // console.log('true values', trueValues)
      // let trueCount= trueValues.joined().count;
      
  })

  console.log('global', rating)





const ratingFunc =(rating) =>{
$(function () {
 
  $("#rateYo").rateYo({
    rating: `${rating}%`,
    precision: 0,
    readOnly: true
  });
 
});
}

});