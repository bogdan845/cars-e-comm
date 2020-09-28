import React from "react";


// context
import {CarsContext} from "../context";

class Filter extends React.Component {

    static contextType = CarsContext;

    render() {

        const {
            handleChange,
            posts,
            mark,
            availability
        } = this.context;


        const filteredCountries = new Set(posts.map(item => item.country))
        let getCountries = [...filteredCountries];

        getCountries = getCountries.map((item, index) => {
            return (
                <div key={index}>
                    <input
                        className="filter-box"
                        type="checkbox"
                        name={item}
                        value={item}
                        onChange={handleChange}
                    />
                    <label className="ml-2">{item}</label>
                </div>
            );
        });


        const filteredMarks = new Set(posts.map(item => item.mark));
        let getMarks = ["All", ...filteredMarks];

        getMarks = getMarks.map((item, index) => {
            return (
                <option
                    key={index}
                    value={item}
                >
                    {item}
                </option>
            );
        });


        return (

            <form className="mb-sm-5 text-dark">

                <h3 className="mb-4 text-sm-center text-md-left">Filters</h3>

                <div className="form-group ">
                    <h5>Select mark</h5>
                    <select
                        className="form-control"
                        name="mark"
                        value={mark}
                        onChange={handleChange}
                    >
                        {getMarks}
                    </select>
                </div>

                <div className="form-group">
                    <h5>Sort by countries</h5>
                    {getCountries}
                </div>

                <div className="form-group">
                    <h5>Sort by availability</h5>
                    <input
                        type="checkbox"
                        name="availability"
                        checked={availability}
                        onChange={handleChange}
                    />
                    <label className="ml-2">Available</label>
                </div>
            </form>
        );
    }
}

export default Filter;