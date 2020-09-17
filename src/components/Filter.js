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
                <div className="" key={index}>
                    <input
                        className="filter-box"
                        type="checkbox"
                        name={item}
                        value={item}
                        onChange={handleChange}
                    />
                    <label className="text-light ml-2">{item}</label>
                </div>
            )
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
            )
        })


        return (


            <form>
                <div className="form-group row mb-0">
                    <div className="col-md-4 col-sm-12 mb-4">
                        <h4 className="text-light">Select mark</h4>
                        <select
                            className="form-control"
                            name="mark"
                            value={mark}
                            onChange={handleChange}
                        >
                            {getMarks}
                        </select>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4">
                        <h4 className="text-light">Sort by countries</h4>
                        {getCountries}
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4">
                        <h4 className="text-light">Sort by availability</h4>
                        <input
                            type="checkbox"
                            name="availability"
                            checked={availability}
                            onChange={handleChange}
                        />
                        <label className="ml-2 text-light">Availability</label>
                    </div>
                </div>
            </form>

            // <form className="">
            //     <div className="row">
            //
            //         <div className="col-md-4 col-sm-12">
            //             <div className="form-group">
            //                 <h4 className="text-light">Select mark</h4>
            //                 <select
            //                     className="form-control"
            //                     name="mark"
            //                     value={mark}
            //                     onChange={handleChange}
            //                 >
            //                     {getMarks}
            //                 </select>
            //             </div>
            //         </div>
            //
            //         <div className="col-md-4 col-sm-12">
            //             <div className="form-group">
            //                 <h4 className="text-light">Sort by countries</h4>
            //                 {getCountries}
            //             </div>
            //         </div>
            //
            //         <div className="col-md-4 col-sm-12">
            //             <div className="form-group ">
            //                 <h4 className="text-light">Sort by availability</h4>
            //                 <input
            //                     type="checkbox"
            //                     name="availability"
            //                     checked={availability}
            //                     onChange={handleChange}
            //                 />
            //                 <label className="ml-2 text-light">Availability</label>
            //             </div>
            //         </div>
            //     </div>
            // </form>
        )
    }
}

export default Filter;