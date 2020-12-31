import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import db from '../db.json';

import { getCategories } from '../store/slices/category-slice.js';

// import BookForm from './bookForm.js';
// import BookItem from './bookItem.js';
// import Category from './categoryItem.js';

function Categories(props) {
    // console.log(db.categories);
    const { getCategories } = props;

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    let categoryDisplay = [];

    props.categoriesList.map( (category, i) => {
            categoryDisplay.push(
                <div
                    key={i}>
                    <label>
                        <input
                            name="isComplete"
                            type="checkbox"
                            value={category.isComplete}
                            checked={category.isComplete}
                            onChange={(e) => {console.log(e, e.target.value)}}
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

const mapStateToProps = state => ({
    categoriesList: state.categories.categoriesList
});

const mapDispatchToProps = { getCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)