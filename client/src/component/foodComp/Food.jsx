import { Button } from "react-bootstrap";


export default function Foods({ handleDeleteFoodItem , item , food , onAdd , onRemove}){
    return(
                <div className="food-card">
            <div className="food-name">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 ><strong>{food.name}</strong></h4>

                    <Button variant="primary"   onClick={() => handleDeleteFoodItem(food.name)}>Delete</Button>
                </div>
                <p><small>Per <b>{food.serving}g </b>serving </small></p>
            </div>

            <div className="food-nutrients">
                <p><small>Protein</small> <b>{food.protein}g</b>  </p>
                <p><small>Calories</small>{food.calories}</p>
                <p><small>Sugar</small>{food.sugar}</p>
            </div>

            <div>
                {item ? (
                    <div>
                        <button onClick={() => onRemove(item)} className="food-remove">-</button>
                        &nbsp;&nbsp;
                        <span>{item.qty}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => onAdd(item)} className="food-add">+</button>
                    </div>
                ) : (
                    <button onClick={() => onAdd(food)} className="add-btn">Add meal</button>
                )}
            </div>
        </div>
              
          
          
    );
}