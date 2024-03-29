import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/`
      <div class="col-12 col-md-6 col-lg-4 mt-2 mb-2">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">
              <ul>
                Item
              </ul>
            </p>
            <button class="btn btn-primary" onclick="app.listController.addListItem()">Add Item</button>
            <button class="btn btn-primary" onclick="app.listController.deleteList()">Delete List</button>
          </div>
        </div>
        </div > `;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
