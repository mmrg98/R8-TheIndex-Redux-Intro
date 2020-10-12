import { addAuthor, deleteAuthor } from "../actionCreators";
import { fakeAuthor } from "../../testUtils";

describe("`addAtuhor` action", () => {
  it("returns the correct action object", () => {
    expect(addAuthor()).toEqual({ type: "ADD_AUTHOR" });
  });
});

describe("`deleteAuthor` action", () => {
  const author = fakeAuthor();
  it("returns an action object with the correct type", () => {
    expect(deleteAuthor(author).type).toBe("DELETE_AUTHOR");
  });

  it("returns an action object with the correct payload", () => {
    expect(deleteAuthor(author).payload).toBe(author);
  });
});
