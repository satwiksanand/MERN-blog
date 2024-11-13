import { Card, Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import TextShrink from "./Home_Components/TextShrink";

BlogCard.propTypes = {
  blog: PropTypes.object,
  deletePost: PropTypes.func,
};

export default function BlogCard({ blog, deletePost }) {
  const { isAdmin } = useSelector((state) => state.user.currentUser);
  const { bannerImage, title, introduction, content } = blog;

  return (
    <Card className="flex flex-col gap-3 bg-[#757575] p-2">
      {isAdmin && (
        <div className="flex justify-end text-end">
          <Dropdown className="rounded-lg" inline label="">
            <Dropdown.Item className="font-thin" icon={FaEdit}>
              Update
            </Dropdown.Item>
            <Dropdown.Item
              className="font-thin"
              icon={MdDelete}
              color="red"
              onClick={() => {
                deletePost(blog._id);
              }}
            >
              Delete
            </Dropdown.Item>
          </Dropdown>
        </div>
      )}
      <img
        src={bannerImage}
        alt="bannerImage"
        className="h-40 w-full flex-grow rounded-lg"
      />
      {/* i am stuck with css help helpp heeeelp heeeeeeeeeeeeeeeeeeelp */}
      <TextShrink
        wordlength={5}
        style={"font-semibold text-lg w-full h-10 overflow-hidden"}
      >
        {title}
      </TextShrink>
      <TextShrink
        wordlength={5}
        style={"font-thin text-sm w-full h-10 overflow-hidden"}
      >
        {introduction}
      </TextShrink>
    </Card>
  );
}
