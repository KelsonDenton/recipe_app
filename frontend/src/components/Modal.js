import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Recipe Entry</ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
              <Label for="recipe-name">Name of Recipe</Label>
              <Input
                type="text"
                id="recipe-name"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Recipe Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="recipe-ingredients">Ingredients</Label>
              <Input
                type="text"
                id="recipe-ingredients"
                name="ingredients"
                value={this.state.activeItem.ingredients}
                onChange={this.handleChange}
                placeholder="Enter Recipe Ingredients"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="is_favorite"
                  checked={this.state.activeItem.favorite}
                  onChange={this.handleChange}
                />
                Favorite
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}