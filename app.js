import axios from 'axios';

async function getData(userId){
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+userId)
    const {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+userId)
    console.log("users:", users)
    console.log("posts:", posts)
}
export default getData