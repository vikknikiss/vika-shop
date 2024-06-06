import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {link} from 'react-dom'
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Filter = ({handleSearchChange,handleChange,nbItem})=>{
    return(
      <div class="col-md-4">
          <div className="md-form mt-0">
              <input className="form-control" type="text" name="search" onChange={handleSearchChange} placeholder="Поиск" aria-label="Поиск"/>
          </div>
          <div>
              <input type="checkbox" id="men" name="men clothing" onChange={handleChange}/>
                  <label htmlFor="men">Мужская одежда</label>
          </div>
          <div>
              <input type="checkbox" id="women" name="women clothing" onChange={handleChange}/>
              <label htmlFor="women clothing">Женская одежда</label>
          </div>
          <div>
              <input type="checkbox" id="jewelery" name="jewelery" onChange={handleChange}/>
              <label htmlFor="jewelery">Ювелирные украшения</label>
          </div>
          <div>
              <input type="checkbox" id="elec" name="electronics" onChange={handleChange}/>
              <label htmlFor="electronics">Электроника</label>
          </div>

          <div>
              <input type="number" id="min" name="min" onChange={handleChange}/>
              <label htmlFor="min">мин.цена</label>
          </div>
          <div>
              <input type="number" id="max" name="max" onChange={handleChange}/>
              <label htmlFor="max">макс.цена</label>
          </div>
      </div>
    );
}

export default Filter;
