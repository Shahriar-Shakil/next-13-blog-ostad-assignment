const domain = process.env.NEXT_PUBLIC_DOMAIN;
export default async function getBlogs() {
  const res = await fetch(`${domain}/blogs/api`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("error fetching Posts");
  }
  //   console.log(res.json(), "response");
  return res.json();
}
