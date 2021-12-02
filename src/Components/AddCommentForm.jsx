import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);

  const validateInput = () => {
    text.length > 2 && username.length ? setDisabled(false) : setDisabled(true);
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({
        username,
        text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await result.json();
    setArticleInfo(body);

    setUsername('');
    setText('');
    setDisabled(true);
  };

  return (
    <form id='add-comment-form'>
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type='text'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onKeyUp={validateInput}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows='4'
          cols='50'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyUp={validateInput}
        />
      </label>

      <button
        type='submit'
        disabled={disabled}
        className={disabled ? 'disabled' : ''}
        onClick={(e) => addComment(e)}
      >
        Add Comment
      </button>
      <br />
    </form>
  );
};

export default AddCommentForm;
