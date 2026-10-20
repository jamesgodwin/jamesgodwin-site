import quotes from './quotes';

const unlearnOutput = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export default unlearnOutput;