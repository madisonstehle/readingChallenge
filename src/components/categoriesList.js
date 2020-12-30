import React from 'react';

import db from '../db.json';
// import BookForm from './bookForm.js';
// import BookItem from './bookItem.js';
// import Category from './categoryItem.js';

function Categories(props) {
    console.log(db.categories);

    let categoryDisplay = [];

    function toggleCheckbox(category) {
        console.log("Checked the Box!")
        category.isComplete = !category.isComplete;
            // return (<BookForm category={category} />)
    }

    db.categories.forEach( category => {
            categoryDisplay.push(
                <div>
                    <label>
                        <input
                            name="isComplete"
                            type="checkbox"
                            checked={false}
                            onChange={(e) => {
                                // e.preventDefault();
                                toggleCheckbox(category);
                                }
                            }
                        ></input>
                        {category.display_name}
                    </label>
                </div>
            )
        }
    )

    return (
        <>
            <div>This is from Categories!</div>
            { categoryDisplay }
        </>
    )
}

export default Categories