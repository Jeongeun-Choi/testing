import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Input from "./Input";

let container: any = null;

beforeEach(() => {
  // DOM 엘리먼트를 렌더링 대상으로 설정
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 종료시 정리
  unmountComponentAtNode(container as Element);
  container?.remove();
  container = null;
});

describe("props name, age", () => {
  // if (!container) {
  //   return;
  // }

  it("props name", () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<Input name={"루나"} age={25} />, container);
    });
    // console.log(container.);
    expect(container.textContent).toBe(`이름: 루나`);
  });
});
