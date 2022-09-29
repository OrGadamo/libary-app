import { addAction, deleteAction, updateAction } from "./book-actions";
import {
  ADD_ACTION,
  DELETE_ACTION,
  UPDATE_ACTION,
} from "../types/book-actions-types";
describe("tests for add action", () => {
  it("return type object", () => {
    expect(typeof addAction({ check: "check" })).toEqual("object");
  });
  it("return with valid payload", () => {
    expect(addAction({ check: "check" })["payload"]).toEqual({
      check: "check",
    });
  });
  it("return with valid type ", () => {
    expect(addAction({ check: "check" })["type"]).toEqual(ADD_ACTION);
  });
});
describe("tests for update action", () => {
  it("return type object", () => {
    expect(typeof updateAction({ check: "check" })).toEqual("object");
  });
  it("return with valid payload", () => {
    expect(updateAction({ check: "check" })["payload"]).toEqual({
      check: "check",
    });
  });
  it("return with valid type ", () => {
    expect(updateAction({ check: "check" })["type"]).toEqual(UPDATE_ACTION);
  });
});
describe("tests for delete action", () => {
  it("return type object", () => {
    expect(typeof deleteAction("1234")).toEqual("object");
  });
  it("return with valid payload", () => {
    expect(deleteAction("1234")["payload"]).toEqual("1234");
  });
  it("return with valid type ", () => {
    expect(deleteAction("1234")["type"]).toEqual(DELETE_ACTION);
  });
});
