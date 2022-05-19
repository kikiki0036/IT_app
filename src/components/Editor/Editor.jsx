import React,{useState ,useEffect } from 'react';
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
// import "react-quill/dist/quill.snow.css";
// import '../../../node_modules/react-quill/dist/quill.snow.css'
import "./editor.css";

// import { useHistory } from "react-router-dom";
import axios from 'axios';

export const Editor = (props) => {

  // let history = useHistory();
  const [userInfo, setuserInfo] = useState({
    description: "",
    // description: props.postList[0].description,
    // description: "<p>TEST<p/>",
  }); 

 

  // console.log(datajob[0] + " d ");

  const PoemAddbooks = async (e) => {
    // e.preventDefault();
    try {
     
        await axios.post('http://localhost:5000/notes', {
          // id:props.editPostID,
          id_profile:props.editPostID,
          // title: userInfo.title,
          description: userInfo.description,
          // information: userInfo.information,

        });
    } catch (error) {
      console.log(error);
    }
  }

  const CreateNotes = async (e) => {
    // e.preventDefault();
    try {
        await axios.post('http://localhost:5000/createnote', {
           id_profile: props.editPostID,
           description: ""
        })

    } catch (error) {
      console.log(error);
    }

  }  

  const viewPostId = async (e) => {
    // e.preventDefault();
    try {
        await axios.post('http://localhost:5000/getnotes', {
          id_profile: props.editPostID
        }).then(res => {  

          setuserInfo({ ...userInfo,
            description: res.data[0].description
          });

        })
    } catch (error) {
      // console.log(error);
      CreateNotes();

    }

  }  

  useEffect(() => {

    if ( props.editPostID != '' ){
      viewPostId()
    }

  }, [props.editPostID]);

  useEffect(() => {

    PoemAddbooks()

  },[userInfo.description]);

  const ondescription = (value) => {

    setuserInfo({ ...userInfo,
      description:value
    });
   
  } 

  return (
    <div className="text-editor">
    <EditorToolbar toolbarId={'t1'}/>
    <ReactQuill
      theme="snow"
      value={userInfo.description}
      onChange={ondescription}
      placeholder={"Write something ..."}
      modules={modules('t1')}
      formats={formats}
    />
    </div>
  );
};

export default Editor;