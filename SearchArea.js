import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <from action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search movie" type="text" onChange={props.handleChange}/>
                        </div>
                        </from> 
                </section>
            </div>
        </div>
    )
}

export default SearchArea;