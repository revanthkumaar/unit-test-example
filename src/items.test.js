import React from "react";
import renderer from "react-test-renderer";

import Items from "./Items";

//SNAPSHOT TESTING

test('renders the correct list structure', () => {
    const tree = renderer.create(<Items/>).toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
})

test("renders correctly when there is a single item", () => {
  const items = ["one"];
  const tree = renderer.create(<Items items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly when there are multiple items", () => {
  const items = ["one", "two", "three"];
  const tree = renderer.create(<Items items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});