import { useEffect, useState } from "react";

import { fetchfood, handleDeleteFoodItem } from "../services/fetchfoodservices";
// import Container from "react-bootstrap/esm/Container";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import Footer from "./Footer";

import FoodList from "./foodComp/FoodList";

import Addfood from "./foodComp/Addfood";

import CalculateNutrients from "./foodComp/CalculateNutrients";
import { Slider } from "./foodComp/Slider";
import { NavigationBar } from "./Navigationbar";

export function DashBorad() {
  const [foodlist, setFoodlist] = useState([]);
  const [mealItems, setMealItems] = useState([]);

  async function populatefoodlist() {
    try {
      const list = await fetchfood(); // api call
      console.log(list.foods);
      setFoodlist(list.foods);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populatefoodlist();
  }, []);

  const onAdd = (meal) => {
    //get a meal and add to mealItems
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists) {
      //increase it by 1 qty
      const newMealItems = mealItems.map(
        (x) => (x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x) //if meal in calc is == to meal id else don't change qty
      );
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
      // console.log(mealItems);
    } else {
      const newMealItems = [...mealItems, { ...meal, qty: 1 }];
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
    }
  };

  // Remove an item from mealItems using minus meal btn inside right column calculate nutrients tab
  const onRemove = (meal) => {
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists.qty === 1) {
      const newMealItems = mealItems.filter((x) => x.id !== meal.id);
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
    } else {
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty - 1 } : x
      );
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
    }
  };

  useEffect(() => {
    setMealItems(
      localStorage.getItem("mealItems")
        ? JSON.parse(localStorage.getItem("mealItems"))
        : []
    );
  }, []);

  return (
    <div className="dashbody">
      <NavigationBar></NavigationBar>
      <Row>
        <Col xs={12} md={8} lg={6}>
          <Addfood></Addfood>
        </Col>
        <Col xs={12} md={8} lg={6} className="mt-6">
          <Slider></Slider>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={8} lg={6}>
          <h3 className="foodhead">
            Your Food Items <Badge bg="secondary">add them to list</Badge>
          </h3>
          <div className="row">
            <div className="col-left">
              <div className="wrapper-card-food-list">
                <FoodList
                  food_data={foodlist}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  mealItems={mealItems} // local strg
                />
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={8} lg={6}>
          <div className="col-right">
            <div className="wrapper-card-calculate-rightCol">
              <CalculateNutrients
                onAdd={onAdd}
                onRemove={onRemove}
                mealItems={mealItems}
                countMealItems={mealItems.length}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
}
