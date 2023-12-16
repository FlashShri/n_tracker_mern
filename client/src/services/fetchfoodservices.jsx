import axios from 'axios';


// calls

export async function fetchfood(){

    try {
        const response = await axios.get("http://127.0.0.1:4500/user/food_data");
        return response.data;
    } catch (error) {
        console.log( error );
    }

}

export async function addfoodtoDB( fooditem ){
    try {

      const res = await  axios.post('http://127.0.0.1:4500/user/food_data' , fooditem);
      console.log('post api hit ');
      return res ;
        
    } catch (error) {
        console.log( error );
    }
}

export async function handleDeleteFoodItem( name ){
    try {
         const res = await  axios.delete(`http://127.0.0.1:4500/user/food_data/${name}` );
         console.log("deleted");
    } catch (error) {
        console.log( error );
    }
}