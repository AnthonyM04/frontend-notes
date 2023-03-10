import BlogList from "../components/BlogList.jsx";
import SideMenu from "../components/SideMenu.jsx";
import { useState } from "react";

//home page
export default function Home() {
  const [blogs, setBlogs] = useState()
  return (
    <>
      <SideMenu /> //the nav bar
      <BlogList  //  where the cards reside
        blogs={blogs}
        setBlogs={setBlogs}/>
    </>
  )
}