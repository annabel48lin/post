import React from "react";

import { DashboardLayout } from "../components/Layout";

const SubscribePage = () => {
  const plants = [
    "Agalteca",
    "Alauca",
    "Atima",
    "Cuatro Comunidades",
    "Otoro",
    "Marcala",
    "Moroceli",
    "Matias",
    "San Nicolas",
    "Tamara",
    "Las Vegas",
    "San Juan Guarita",
    "Zamorano",
    "Gracias",
  ];

  return (
    <DashboardLayout>
      <h2>Subscribe</h2> <br />
      <form>
        <label>
          Name: <br />
          <input type="text" name="name" />
          <br />
        </label>
        <label>
          Email: <br />
          <input type="text" name="email" />
          <br />
        </label>
        <label>
          Password: <br />
          <input type="text" name="password" />
          <br />
        </label>
        <label>
          Repeat Password: <br />
          <input type="text" name="rpassword" />
          <br />
        </label>
        <br />
        Please select the plant(s) you want to subscribe to : <br />
        {plants.map((plant) => {
          return (
            <div>
              <label>
                {/* {plant}  */}
                <input
                  name="plant"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
                />
              </label>
              {plant}
            </div>
          );
        })}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </DashboardLayout>
  );
};

export default SubscribePage;
