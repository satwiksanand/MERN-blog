import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import User from "../components/User";

function Users() {
  const { register, handleSubmit } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = useCallback(async (data) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/user/getAllUsers?filter=${data?.["filter"] || ""}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );
      const finalData = await res.json();
      console.log(finalData);
      if (res.ok) {
        setUsers(finalData.result);
      } else {
        toast.error(finalData.message || "something wrong with the server!");
      }
    } catch (err) {
      toast.error(err.message || "something wrong with the server!");
    }
  }, []);

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, [onSubmit, handleSubmit]);

  return (
    <div className="min-h-full p-12">
      <form
        className="flex flex-col justify-start p-3 sm:flex-row sm:items-center sm:justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="mb-8 text-3xl font-semibold">
          <span className="text-5xl font-bold text-[#2b4cf0]">All Users</span>
          (Admin not included)
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            id="filter"
            name="filter"
            placeholder="Search for a User"
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none"
            {...register("filter")}
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#102ca0] p-1 px-3 font-semibold text-white"
          >
            <FaSearch size={16} /> Search
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-3">
        {users &&
          users.map((user, ind) => {
            return <User user={user} key={ind} index={ind + 1} />;
          })}
      </div>
    </div>
  );
}

export default Users;
