import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import QuoteList from "./QuoteList";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          q: "There is no fear for one whose mind is not filled with desires.",
          a: "Buddha",
          c: "63",
          h: "<blockquote>&ldquo;There is no fear for one whose mind is not filled with desires.&rdquo; &mdash; <footer>Buddha</footer></blockquote>"
        }
      ]),
  })
);

describe("QuoteList Component", () => {
  it("renders loading state initially", () => {
    render(<QuoteList />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders quotes after data is fetched", async () => {
    render(<QuoteList />);

    await waitFor(() => expect(screen.getByText(/Buddha/)).toBeInTheDocument());
    expect(screen.getByText(/There is no fear for one whose mind is not filled with desires./)).toBeInTheDocument();
  });

  it("displays quotes with correct HTML structure", async () => {
    render(<QuoteList />);

    await waitFor(() => expect(screen.getByText(/Buddha/)).toBeInTheDocument());

    const blockquote = screen.getByText(/There is no fear for one whose mind is not filled with desires./).closest('blockquote');
    expect(blockquote).toBeInTheDocument();
  });

  it("loops through quotes after 5 seconds", async () => {
    jest.useFakeTimers();
    render(<QuoteList />);

    jest.advanceTimersByTime(5000);

    await waitFor(() => expect(screen.getByText(/Buddha/)).toBeInTheDocument());

    jest.useRealTimers();
  });
});
