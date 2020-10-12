import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "../App";

// Mocks
import { fakeAuthor } from "../testUtils";

const mockStore = configureStore([]);

describe("<App />", () => {
  const authors = Array.from(
    { length: Math.floor(Math.random() * 10) },
    fakeAuthor
  );

  const store = mockStore({
    authors
  });

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it("should render with the authors from the store", () => {
    expect(wrapper.find(".card").length).toBe(authors.length);
  });
});
