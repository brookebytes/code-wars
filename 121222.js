//Largest Elements - 7kyu
//Write a program that outputs the top n elements from a list.


function largest(n,xs){
    return xs.sort((a,b) => b-a).slice(0,n).reverse();
}
