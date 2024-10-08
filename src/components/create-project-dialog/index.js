import Factory from "../../factory";
import Controller from "../../controller";

import { Input, Div, Button, Title } from "..";

import "./create-project-dialog.css";

const factory = new Factory();
const controller = new Controller();

const closeDialog = () => {
  document.querySelector("#create-project-dialog").close();
};

const acceptBtnHandler = () => {
  const input = document.querySelector("#project-name-input");
  const projectName = input.value;

  if (projectName) {
    const project = factory.createProject(projectName);
    controller.createProject(project);
    closeDialog();
    input.value = "";
  } else {
    alert("Project name is required");
  }
};

const CreateProjectDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "create-project-dialog";
  dialog.className = "create-project-dialog";

  const wrapper = Div("create-project-dialog__wrapper");
  const title = Title("create-project-dialog__title", "Create new project");
  const input = Input(
    "create-project-dialog__input",
    "project-name-input",
    "Enter name",
    ""
  );
  const btnGroup = Div("create-project-dialog__btn-group");
  const cancelBtn = Button("Cancel", closeDialog);
  const acceptBtn = Button("Add", acceptBtnHandler);

  dialog.appendChild(wrapper);
  wrapper.appendChild(title);
  wrapper.appendChild(input);
  wrapper.appendChild(btnGroup);
  btnGroup.appendChild(cancelBtn);
  btnGroup.appendChild(acceptBtn);

  document.body.appendChild(dialog);

  return dialog;
};

export default CreateProjectDialog;
