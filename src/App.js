import React, { useState } from 'react';
import './style.css';

let postListData = [
  { id: 0, name: 'preena', message: 'hi' },
  { id: 1, name: 'mazhai', message: 'hello' },
];

let count = 2;
export default function App() {
  const [postList, setPostList] = useState(postListData);
  const [nameInput, setNameInput] = useState();
  const [messageText, setMessagetext] = useState();
  const [openP, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState({});

  let ClassName;

  const savePost = () => {
    setOpen(false);
    setPostList([
      ...postList,
      { name: nameInput, message: messageText, id: count++ },
    ]);
  };

  const deletePost = (id) => {
    setPostList(postList.filter((item) => item.id !== id));
  };
  // const EditPost = (id) => {
  //   // setPostList(postList.filter((item) => item.id !== id));
  // };

  const addPost = (ID) => {
    //console.log(ID);
    setEditObj(postList.filter((item) => item.id === ID));
    setNameInput('');
    setMessagetext('');
    setOpen(true);
    setIsEdit(true);
  };
  console.log(editObj);
  if (openP) {
    ClassName = 'openPopup';
  } else {
    ClassName = 'hidePopup';
  }

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={ClassName}>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label>Name :</label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>
          <div>
            <label>Message :</label>
            <textarea
              type="text"
              value={messageText}
              onChange={(e) => setMessagetext(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <input
              type="button"
              onClick={savePost}
              name="Save Post"
              value="Save Post"
            />
          </div>
        </form>
      </div>

      <div>
        <ul>
          {postList.map((postListItem) => (
            <li
              key={postListItem.id}
              style={{ display: 'flex', marginBottom: '1rem' }}
            >
              <div style={{ marginRight: '1rem' }}>{postListItem.name},</div>
              <div style={{ marginRight: '1rem' }}>
                message:{postListItem.message}
              </div>
              <div style={{ marginRight: '1rem' }}>
                <button onClick={() => addPost(postListItem.id)}>Edit</button>
              </div>
              <div>
                <button onClick={() => deletePost(postListItem.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
