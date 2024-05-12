export const useAutoComplete = () => {
  const search = async (keyword: string) => {
    console.log("searching " + keyword);
    const response = await fetch("/api/country?keyword=" + keyword);
    const result = await response.json();
    console.log({ result });
    return result;
  };

  return { search };
};
