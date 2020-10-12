import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Components
import Sidebar from "../Sidebar";

// Actions
import { addAuthor } from "../redux/actionCreators";

// Mocks
import { fakeAuthor } from "../testUtils";

const mockStore = configureStore([]);

describe("<Sidebar />", () => {
  const store = mockStore({});

  store.dispatch = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  );

  it("should dispatch 'ADD_AUTHOR' when the add button is clicked", () => {
    wrapper.find("#add-button").simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(addAuthor());
  });
});
