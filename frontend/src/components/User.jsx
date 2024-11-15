import PropTypes from "prop-types";

User.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
};

function User({ user, index }) {
  const { profilePicture, username, useremail } = user;
  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#262626] p-8 sm:grid-cols-4 sm:p-4">
      <p className="hidden text-lg font-bold sm:block sm:justify-self-start">
        {index}
      </p>
      <img
        src={profilePicture}
        alt="profile"
        className="max-w-8 rounded-full"
      />
      <p className="truncate text-lg font-thin">{username}</p>
      <p className="col-span-2 text-lg font-thin sm:col-span-1">{useremail}</p>
    </div>
  );
}

export default User;
