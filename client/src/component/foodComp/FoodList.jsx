



import { handleDeleteFoodItem } from "../../services/fetchfoodservices";
import Food from "./Food" ;

export default function FoodList({ food_data, mealItems, onAdd, onRemove }) {
  //const { foods, isLoading, handleAddFoodItem, handleDeleteFoodItem } 
  

 
  return (
      <>
      <br></br>
    
      <br></br>
    
        <div className="foodList">
          
          { 
            food_data.map((food, index) => (
              
              
                <Food
                  key={food.id}
                  food={food}
                  item={mealItems.find((x) => x.id === food.id)}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  handleDeleteFoodItem={handleDeleteFoodItem}
                />

          
            ))
           }
        </div>
    
    </>
  );
  
  
  
}