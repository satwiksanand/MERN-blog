import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import { MdEditOff } from "react-icons/md";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";

function UserProfile() {
  const userId = useParams().userId;
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function toggleEditing() {
    setEditing((editing) => !editing);
  }

  //fetching data;
  const getUser = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://blogzy-4hxg.onrender.com/api/v1/user/getUserById/${userId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );
      const finalData = await res.json();
      if (!res.ok) {
        toast.error(finalData.message || "something wrong with the server!");
        navigate("/users");
        return;
      }
      setValue("username", finalData.username);
      setValue("useremail", finalData.useremail);
      setValue("profilePicture", finalData.profilePicture);
    } catch (err) {
      toast.error(err.message || "something wrong with the server");
    } finally {
      setLoading(false);
    }
  }, [userId, navigate, setValue]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  async function onSubmit(data) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://blogzy-4hxg.onrender.com/api/v1/user/update/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        },
      );
      const finalData = await res.json();
      if (!res.ok) {
        toast.error(finalData.message || "something wrong with the server!");
        return;
      }
      toast.success("user updated!");
      navigate("/users");
    } catch (err) {
      toast.error(err.message || "something wrong with the server!");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size="xl" className="max-h-12 max-w-12" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-12">
      <form
        className="flex max-w-full flex-grow flex-col gap-4 rounded-xl border-[1px] p-6 outline-gray-500/50 sm:max-w-[80%] sm:p-8 md:max-w-[60%] md:p-10 lg:max-w-[45%] lg:p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-2 flex flex-col items-center justify-center gap-2 text-xl font-semibold">
          <span className="text-3xl font-bold">Profile</span>
          Click the edit button to make changes
        </div>
        <div className="flex items-center justify-end gap-3 p-3 sm:gap-6">
          {editing ? (
            <MdEditOff
              fill="blue"
              size={32}
              className="hover:cursor-pointer"
              onClick={toggleEditing}
            />
          ) : (
            <MdEdit
              fill="blue"
              size={32}
              className="hover:cursor-pointer"
              onClick={toggleEditing}
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">
            User Name
          </label>
          <input
            type="text"
            id="username"
            disabled={!editing}
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none disabled:cursor-not-allowed"
            {...register("username", { required: "username is required" })}
          />
          {errors.username && (
            <p className="font-semibold text-red-600">
              <span className="font-bold">Oops </span>
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="useremail" className="text-lg font-semibold">
            User Email
          </label>
          <input
            type="email"
            id="useremail"
            disabled={!editing}
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none disabled:cursor-not-allowed"
            {...register("useremail", { required: "useremail is required" })}
          />
          {errors.useremail && (
            <p className="font-semibold text-red-600">
              <span className="font-bold">Oops </span>
              {errors.useremail.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="Enter a new password to update"
            disabled={!editing}
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none disabled:cursor-not-allowed"
            {...register("password")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="profilePicture" className="text-lg font-semibold">
            Profile picture
          </label>
          <input
            type="text"
            id="profilePicture"
            placeholder="Enter a new url to edit"
            disabled={!editing}
            className="rounded-lg bg-[#262626] p-2 font-thin placeholder:font-thin placeholder:text-[#b3b3b3] focus:outline-none disabled:cursor-not-allowed"
            {...register("profilePicture", {
              required: "profile picture is required!",
            })}
          />
          {errors.profilePicture && (
            <p className="font-semibold text-red-600">
              <span className="font-bold">Oops </span>
              {errors.profilePicture.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-3">
          <button
            className="rounded-lg bg-[#1e5beb] p-3 text-[#3a3a3a]"
            // onClick={handleSubmit(handleEdit)}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
