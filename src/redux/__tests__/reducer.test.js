import reducer from "../reducer";

import authors from "../../data";

describe("The Reducer", () => {
  it("returns an initial state with the correct keys", () => {
    const initialState = reducer(undefined, {});
    expect(initialState.authors).toEqual(authors);
    expect(initialState).toHaveProperty("newAuthorId");
  });

  describe("receiving `ADD_AUTHOR` action type", () => {
    const initialState = { authors, newAuthorId: 5 };
    let newState;

    beforeEach(
      () => (newState = reducer(initialState, { type: "ADD_AUTHOR" }))
    );

    it("adds an an author to the list", () => {
      expect(newState.authors.length).toBe(initialState.authors.length + 1);
    });

    it("adds an an author with the correct properties", () => {
      const newAuthor = newState.authors[newState.authors.length - 1];
      expect(newAuthor).toHaveProperty("first_name");
      expect(newAuthor).toHaveProperty("last_name");
      expect(newAuthor).toHaveProperty("imageUrl");
      expect(Array.isArray(newAuthor.books)).toBe(true);
      expect(newAuthor.id).toBe(initialState.newAuthorId);
    });

    it("increments the `newAuthorId", () => {
      expect(newState.newAuthorId).toBe(initialState.newAuthorId + 1);
    });
  });

  describe("receiving `DELETE_AUTHOR` action type", () => {
    const initialState = { authors, newAuthorId: 5 };
    const authorToDelete = authors[Math.floor(Math.random() * authors.length)];
    let newState;

    beforeEach(
      () =>
        (newState = reducer(initialState, {
          type: "DELETE_AUTHOR",
          payload: authorToDelete
        }))
    );

    it("deletes an an author from the list", () => {
      expect(newState.authors.length).toBe(initialState.authors.length - 1);
    });

    it("deletes the correct author", () => {
      expect(
        newState.authors.find(author => author === authorToDelete)
      ).toBeUndefined();
    });
  });
});
