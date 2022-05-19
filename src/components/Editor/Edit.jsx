import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Editpost from './Editor';
const Edit = (props) => {
  const [ispostId, setpostId] = useState([]);
  const [id, setId] = useState('');
  // const [userid, setuserid] = useState(props.userID);

  useEffect(() => {
    // viewPostId(props.match.params.postID);
    // setuserid(props.userID)
  
    setId(props.userID);
          // }, 5000)

    // viewPostId(0);
  },[props.userID]);
       
  // setInterval(async() =>{
  //   try {
  //     await axios.post('http://localhost:5000/getnotes', {
  //        user_id:   id
  //     }).then(res => {  
  //       setpostId(res.data);
  //     })
  // } catch (error) {
  //   console.log(error);
  // }  }, 1000);


  // const viewPostId = async (e) => {
  //   // e.preventDefault();
  //   try {
  //       await axios.post('http://localhost:5000/getnotes', {
  //         id_profile:  id
  //       }).then(res => {  
  //         setpostId(res.data);
  //       })
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(ispostId);

  // }  
  
  // useEffect(  () => {
  //   try {
  //      axios.post('http://localhost:5000/getnotes', {
  //         user_id: id
  //       }).then(res => {  
  //         setpostId(res.data);
  //       })
  //   } catch (error) {
  //     console.log(error);
  //   }

  // },[id]);
  
    return (
      <>
        {
            // ispostId.length > 0 ?
              <div>    
              <Editpost 
                // postList={ispostId}  
                editPostID={id} />      
              </div> 
            
            // : null  
        } 
      </>
    )
}
export default Edit

//  //   setTimeout(() => {
//   console.log("LOAD....EDITOR " + props.editPostID) 
//   //   }, 5000)