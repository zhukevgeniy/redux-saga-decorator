import { store } from "../../core/store";
import { injectSaga } from "../../core/tools/inject-saga";
import { customElement } from "../../core/decorators/custom-element";
import { initializeApplicationRequest } from "./actions";
import { ApplicationSaga } from "./saga";

@customElement("application-container")
@injectSaga(ApplicationSaga)
export class ApplicationContainer extends HTMLElement {
  connectedCallback() {
    store.dispatch(initializeApplicationRequest());
  }
}
