function Blogs() {
  async function handleClick() {
    const res = await fetch("http://localhost:3000/api/v1/user/test", {
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <button onClick={handleClick}>click me to fetch data!</button>
    </div>
  );
}

export default Blogs;
