import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import './blog.css';

export default function BlogCard() {
  // show and setShow are set to false 
  const [show, setShow] = useState(false);
  // when handleClose is used, the setShow will equal false, making the modal close.
  const handleClose = () => setShow(false);

  // returns this as the viewable section
  return (
    <>
    {/* when blog is not defined( null, undefinted, false, 0, or an empty string), a progress bar will appear */}
      {!blog
      // the progress bar is currently still being worked on
        ? <progress max="100" value ={countTo100()} />
        // when !blog = false (when blogs are defined)
        : blog.map(element => (   
          // show={show} controls whether the modal is to be displayed, and onHide closes the Modal when given a prompt to do so
              <Modal show={show} onHide={handleClose}>
              {/* the header for the modal */}
              <Modal.Header>
                {/* the title of the post */}
                <Modal.Title>{element.title}</Modal.Title>
              </Modal.Header>
              {/* the property {element._id} is the global identifier for the post  */}
                <Modal.Body key={element._id}> 
                {/* posts the image in the modal */}
                <img src="{element.image}" />
                {/* the description and the review of the post go here */}
                  {element.description} {element.review}
                </Modal.Body>
                {/* the footer of the modal */}
                <Modal.Footer>
                  <div class="row">
                    <div class="col-8">
                      {/* when clicked, modal will be set to close, as setShow(previously set as true) will be set to false */}
                  <button onClick={handleClose}>Close</button>
                    </div>
                  </div>
                </Modal.Footer>
              </Modal>
        ))
      }
    </>
  )
}
