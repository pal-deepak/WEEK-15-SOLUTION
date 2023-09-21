let map= new Map();

function add_user_data(name , age, email){
const userdata={age,email};
   map.set(name,userdata);
}
 function update_user_data(name,age,email)
 {
    if(map.has(name))
    {
        const userdata=map.get(name);
        userdata.age=age;
        userdata.email=email;
    }
 }

 function delete_data(name)
 {
    map.delete(name);
 }

 add_user_data("Deepak",21,"deepakpal7390@gmail.com");
 add_user_data("sachin",21,"deepakpal7390@gmail.com");
 console.group(map);
 update_user_data("Deepak",22,"deepakpal7390@gmail.com");
 console.group(map);
 delete_data("sachin");
 console.group(map);
 
 