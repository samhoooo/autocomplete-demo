import data from "./data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  if (!keyword) {
    return Response.json([]);
  }

  const output = data.filter((country) =>
    country.name.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
  );
  return Response.json(output);
}
