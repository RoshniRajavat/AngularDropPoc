import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddComponentService {
  component;
  getComponent() {
    var date = new Date();
    var obj = {
      button: `<div>
    <button>Click Me!</button><br><br>
    <h1>Button</h1><br>
    <p>This is a button</p>
     </div>`,

      textbox: `<div>
    <h1>Textbox</h1><br>
    <p>This is a Textbox</p><br>
    <input type="text"><br><br>
     </div>`,

      header: `<div>
    <header></h1>Header</h1><br>
    <p>This is a Header</p><br></header>
     </div>`,

      footer: `<div>
     <footer></h1>footer</h1><br>
     <p>This is a footer</p><br></footer>
      </div>`,

      table: `<div>
     <table><thead><tr><td>Name</td><td>Ag</td></thead></thead>
     <tbody><tr><td>John</td><td>20</td></tr></tbody></table>
      </div>`,

      time: `<div>
      <p>Time : ${date}</p>
       </div>`,

      dropdown: `<h2>Dropdown</h2>
       <p>The select element defines a drop-down list:</p>
         <select name="cars">
           <option value="volvo">Volvo</option>
           <option value="saab">Saab</option>
           <option value="fiat">Fiat</option>
           <option value="audi">Audi</option>
         </select>`,

      spinner: `<div><p>This is number spin box</p><INPUT TYPE="NUMBER" MIN="0" MAX="10" STEP="2" 
         VALUE="6" SIZE="6"></div>`,

      divider: `<div><h1>divider</h1><hr><p>This is Divider</p></div>`
    }
    
    return obj[this.component]
  }
}
