import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Components
import AuthorCard from "../AuthorCard";

// Actions
import { deleteAuthor } from "../redux/actionCreators";

// Mocks
import { fakeAuthor } from "../testUtils";

const mockStore = configureStore([]);

describe("<Sidebar />", () => {
  const author = fakeAuthor();

  const store = mockStore({});

  store.dispatch = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <AuthorCard author={author} />
    </Provider>
  );

  it("should dispatch 'DELETE_AUTHOR' with the correct payload when the delete button is clicked", () => {
    wrapper.find("button").simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(deleteAuthor(author));
  });
});
