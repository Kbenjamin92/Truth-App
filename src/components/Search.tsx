import React from "react";
import Form from "react-bootstrap/Form";
import { subText, searchButton } from "../content";

type UserInput = {
    input: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
    userErrorMessage: string[];
  };

const Search: React.FC<UserInput> = ({
  input, 
  handleChange, 
  handleSubmit, 
  userErrorMessage
}) => {
  return (
    <div>
      <Form className='form-container' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <div className='search-operation'>
            <Form.Control
              name='input'
              type='text'
              className='search-input-field'
              placeholder='Search Scriptures...'
              onChange={handleChange}
              value={input}
              required
            />
            <button className='search-btn'>
              {searchButton}
            </button>
          </div>
          <div className='sub-text'>
            <p className='error-message'>{userErrorMessage}</p>
            <Form.Text className='text-muted'>{subText}</Form.Text>
          </div>
        </Form.Group>
      </Form>
    </div>
  )};

export default Search;
