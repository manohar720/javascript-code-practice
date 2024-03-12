//(1)(difference between  new Array(), and [ ] while declaring arrays in Js
let a = new Array();
let b = [ ];
console.log(a.length,b.length);//both are same with same length = 0//

let c = new Array('om','manohar');
    d = [ 'ram','shayam'];
console.log(c.length,d.length);//both are same with same length = 2//
let e = new Array(5);
let f = [5];
console.log(e.length,f.length);//here is the difference that length of e, f are  5 and 1//
console.log(e[0 ],f[0]);//output is undefined and 5//


//(2)You're developing an application to manage a grocery shopping list. Your task is to handle and manipulate the shopping list using JavaScript arrays./

let groceryList = [  "Basmati Rice","Masoor Dal","Paneer", "Turmeric Powder","Ghee", "Mangoes", "Assam Tea", "Papadums", "Jaggery"];

groceryList.push('coriander powder',"papad",'chat masala');
console.log(groceryList);//push

groceryList.pop();
console.log(groceryList);//pop

groceryList.shift();
console.log(groceryList);//shift=>Removing an element to the beginning of an array

groceryList.unshift('Brown Rice', 'Mung dal');//unshift=>Adding an element to the beginning of an array
console.log(groceryList);
                   
 
//(3)You're building a system to manage a bookstore's inventory. Your goal is to handle and update the book inventory using JavaScript arrays.
const bookInventory = [
  ["The God of Small Things", "Arundhati Roy", 10],
  ["Train to Pakistan", "Khushwant Singh", 15],
  ["The White Tiger", "Aravind Adiga", 8],
  ["The Immortals of Meluha", "Amish Tripathi", 20],
  ["Midnight's Children", "Salman Rushdie", 12]
];
console.log(bookInventory);

//(3)(a)Implement functionality to add new books using concat.//
const addArray = [
  ["The Inheritance of Loss", "Arvind Adiga", "11"],
   ['Wings of Fire','APJ Abdul Kalam','9']];
const concateArray = bookInventory.concat(addArray);
console.log("concate: ", concateArray);

//3(b)Use splice to update book details (change quantity or //remove books).//
//Remove 0 (zero) elements before index 2, and insert array//

 bookInventory.splice(2,0,['Ramcharitmanas','Tulsidas','18']);//add items at index /2,and zero item delete/
console.log('insertArray:',bookInventory);
// delete any array from anywhere like  ["The Immortals of Meluha", "Amish Tripathi", 20]//
bookInventory.splice(4,2);//4=index,2=two items we have to delete from index 4/
console.log('removeArray',bookInventory);


//4(a)Create an array musicPlaylist containing strings representing song titles.
const musicPlaylist = ["Chaiyya Chaiyya - Dil Se",
  "Maa Tujhe Salaam - A.R. Rahman",
  "Kabira - Yeh Jawaani Hai Deewani",
  "Kal Ho Naa Ho - Kal Ho Naa Ho",
  "Mile Sur Mera Tumhara - Doordarshan"];
//4(b)Use loops to display the contents of musicPlaylist.//
for (i = 0; i < musicPlaylist.length; i++) {
  console.log(musicPlaylist[i]);
}
//4(c)Implement slice to create a smaller playlist based on specific criterion (e.g., top 5 songs).//
//syntax:- slice(from(include), to(exclude))
const favoritePlaylist = musicPlaylist.slice(1,4);
console.log(favouritePlaylist );








