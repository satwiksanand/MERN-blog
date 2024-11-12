function Blogs() {
  return (
    <div>
      <form className="flex items-center justify-between bg-[#262626] p-4">
        <p>This is the Blog form</p>
        <div className="flex flex-col">
          <label
            htmlFor="category"
            className="font-thin text-[#7e7e81] sm:text-lg sm:font-semibold"
          >
            Chose your Category
          </label>
          <select
            name="category"
            id="category"
            className="rounded-lg bg-[#757575] hover:cursor-pointer"
          >
            <option value="All">All</option>
            <option value="ReactJS">ReactJS</option>
            <option value="NodeJS">NodeJS</option>
            <option value="NextJS">NextJS</option>
            <option value="MERN">MERN</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Blogs;
