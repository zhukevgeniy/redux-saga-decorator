import { store } from "core/store";
import { injectSaga } from "core/injectors/inject-saga";
import { injectReducer } from "core/injectors/inject-reducer";
import { customElement } from "core/decorators/custom-element";
import { ApplicationSaga } from "containers/application/saga";
import { ApplicationReducer } from "containers/application/reducer";
import { initializeApplicationRequest } from "containers/application/actions";

@customElement("application-container")
@injectSaga(ApplicationSaga)
@injectReducer({ key: "ApplicationReducer", reducer: ApplicationReducer })
export class ApplicationContainer extends HTMLElement {
  connectedCallback() {
    store.dispatch(initializeApplicationRequest());
  }
}
