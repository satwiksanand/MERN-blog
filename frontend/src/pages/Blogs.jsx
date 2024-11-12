function Blogs() {
  return (
    <div>
      <form className="flex items-center justify-between bg-[#262626] p-4">
        <p>This is the Blog form</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row md:gap-6">
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
          <div className="flex flex-col">
            <label
              htmlFor="limit"
              className="font-thin text-[#7e7e81] sm:text-lg sm:font-semibold"
            >
              Number of Blogs
            </label>
            <select
              name="limit"
              id="limit"
              className="rounded-lg bg-[#757575] hover:cursor-pointer"
            >
              <option value="16">16</option>
              <option value="20">20</option>
              <option value="32">32</option>
              <option value="40">40</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Blogs;
