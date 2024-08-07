import {
  ProjectListItems,
  CreateProjectBtn,
  ProjectBoard,
} from "./components";

import StateManager from "./state/state-manager";

import "./index.css";

const stateManager = new StateManager();

stateManager.initComponent("project-list-component", ProjectListItems());
stateManager.initComponent("create-project-btn-component", CreateProjectBtn());
stateManager.initComponent("project-board-component", ProjectBoard());
