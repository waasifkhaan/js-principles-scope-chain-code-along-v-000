/* Your code goes here */
var customerName = 'bob';
const leastFavoriteCustomer = 'wasif'

function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'khan';

}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    let favoriteCustomer = 'not bar'
}
function congratulateCustomer(){
  return `congrats ${favoriteCustomer}`
}