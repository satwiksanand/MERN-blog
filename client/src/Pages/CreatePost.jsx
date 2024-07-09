import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  return (
    <div className="flex flex-col gap-4 min-h-screen mx-auto max-w-3xl">
      <h1 className="text-center text-3xl font-semibold my-5">Create a Post</h1>
      <form className="flex flex-col gap-4 p-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <TextInput
            id="title"
            placeholder="Title"
            required
            type="text"
            className="flex-1 p-auto"
          ></TextInput>
          <Select>
            <option value={"UnCategorized"}>Select a Category</option>
            <option value={"ReactJs"}>React.Js</option>
            <option value={"MernJS"}>MERN</option>
            <option value={"Nodejs"}>Node.Js</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="images/*"
            className="flex-1 sm:h-fit"
          />
          <Button
            gradientDuoTone={"purpleToBlue"}
            className="cursor-pointer flex-3"
          >
            Upload a Image
          </Button>
        </div>

        <ReactQuill
          theme="snow"
          placeholder="write your content here..."
          className="h-72 mb-10"
        />
        <Button type="submit" gradientDuoTone={"purpleToPink"}>
          Create Post
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;
