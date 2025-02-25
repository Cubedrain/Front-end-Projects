import { useQuote } from "./Hooks/useQuote";

const Quote = (): React.ReactNode => {
  const [error, quote] = useQuote();

  return (
    <div id="quote">
      {error && <p> Error occured in fetching quote, Refresh the page</p>}
      {quote &&
        quote.map((quote, index) => (
          <div key={index}>
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Quote;
