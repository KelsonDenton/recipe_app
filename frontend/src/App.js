import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewFavorites: false,
      recipeList: [],
      modal: false,
      activeItem: {
        name: "",
        ingredients: "",
        is_favorite: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/recipes/")
      .then((res) => this.setState({ recipeList: res.data }))
      .catch((err) => console.log(err));
  };
  

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/recipes/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios.post("/api/recipes/", item).then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios.delete(`/api/recipes/${item.id}/`).then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { name: "", ingredients: "", is_favorite: false };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayFavorites = (status) => {
    if (status) {
      return this.setState({ viewFavorites: true });
    }

    return this.setState({ viewFavorites: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewFavorites ? "nav-link active" : "nav-link"}
          onClick={() => this.displayFavorites(true)}
        >
          Favorites
        </span>
        <span
          className={this.state.viewFavorites ? "nav-link" : "nav-link active"}
          onClick={() => this.displayFavorites(false)}
        >
          Not Favorited
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewFavorites: viewFavorites } = this.state;
    const newItems = this.state.recipeList.filter(
      (item) => item.is_favorite === viewFavorites
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewFavorites ? "completed-todo" : ""
          }`}
          title={item.ingredients}
        >
          {item.name}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Personal Recipe Book</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add Recipe
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;