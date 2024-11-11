function Create() {
  return (
    <div className="flex items-center justify-center gap-3 p-12">
      <form className="grid flex-grow grid-cols-1 gap-2 rounded-lg border-[1px] p-8 outline-gray-500/50 sm:max-w-[70%] sm:grid-cols-3">
        <div className="col-span-2 flex flex-col justify-evenly gap-3 p-4 sm:col-start-1">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg font-semibold">
              Title
            </label>
            <input
              type="text"
              placeholder="What's your blog called?"
              id="title"
              className="rounded-lg bg-[#757575] p-2 font-thin placeholder:font-thin placeholder:text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="intro" className="text-lg font-semibold">
              Intro
            </label>
            <input
              type="text"
              placeholder="highlights of your blog!"
              id="intro"
              className="rounded-lg bg-[#757575] p-2 font-thin placeholder:font-thin placeholder:text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content" className="text-lg font-semibold">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              placeholder="contents of your blog"
              className="rounded-lg bg-[#757575] p-2 font-thin placeholder:font-thin placeholder:text-white focus:outline-none"
              rows={8}
            ></textarea>
          </div>
          <div className="flex items-center gap-6 p-2">
            <label htmlFor="readingTime" className="text-lg font-semibold">
              Reading Time
            </label>
            <select
              name="readingTime"
              id="readingTime"
              className="rounded-lg bg-[#757575]"
            >
              <option value="5min+">5 minutes</option>
              <option value="10min+">10 minutes</option>
              <option value="15min+">15 minutes</option>
              <option value="30min+">30 minutes</option>
            </select>
          </div>
          <div className="flex items-center gap-6 p-2">
            <label htmlFor="publicationDate" className="text-lg font-semibold">
              Publish Date
            </label>
            <input
              type="date"
              name="publicationDate"
              id="publicationDate"
              className="rounded-lg bg-[#757575]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4 sm:col-start-3">
          <div className="flex items-center gap-6 p-2">
            <label htmlFor="category" className="text-lg font-semibold">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="rounded-lg bg-[#757575]"
            >
              <option value="ReactJS">ReactJS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="NextJS">NextJS</option>
              <option value="MERN">MERN</option>
            </select>
          </div>
          <div>
            <div className="max-w-sm rounded-lg border border-gray-200 bg-[#444] shadow dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://plus.unsplash.com/premium_photo-1680680514571-e16201d23e9d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwb24lMjBkZXNrfGVufDB8fDB8fHww"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-#7e7e81 mb-2 text-2xl font-bold tracking-tight dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="col-start-1 rounded-lg bg-[#7e7e91] p-3 text-white sm:col-span-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
