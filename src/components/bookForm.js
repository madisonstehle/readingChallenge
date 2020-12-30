import React from 'react';

function Form() {
    return (
        <form>
            <label>Title:
                <input
                    name="title"
                    type=""
                    value=""
                ></input>
            </label>

            <label>Author:
                <input
                    name="author"
                    type=""
                    value=""
                ></input>
            </label>

            <input
                name="entry"
                type=""
                value=""
            ></input>
        </form>
    )
}

export default Form;