import React from "react"

// cars data
import carsData from "./cars-data";

// context
const CarsContext = React.createContext();


class CarsProvider extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            featured: [],
            sorted: [],

            // filters
            country: {},
            mark: "All",
            availability: false

        }
    }

    componentDidMount() {
        const getData = this.prepareData(carsData);
        const getFeatured = getData.filter(item => item.featured === true);


        this.setState({
            posts: getData,
            featured: getFeatured,
            sorted: getData,
        });
    }

    prepareData = (data) => {
        const dataStructure = data.map(item => {

            const images = item.images.map(image => image);

            const readyData = {
                ...item.fields,
                ...item.techParams,
                images
            };
            return readyData
        });
        return dataStructure;
    }


    getPostBySlug = (slug) => {
        const getPost = this.state.posts.find(item => item.slug === slug);
        return getPost;
    }


    handleChange = (e) => {
        const {country} = this.state;
        let setCountries = country;

        if (e.target.classList.contains("filter-box")) {
            if (e.target.checked) {
                setCountries[e.target.name] = true
            } else {
                setCountries[e.target.name] = false
            }
        }

        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        this.setState({
            [name]: value,
            country: setCountries
        }, this.filter)
    }


    filter = () => {
        const {
            posts: getData,
            country,
            mark,
            availability,
        } = this.state;

        let tempData = [...getData];



        let sortByCountries = [];
        for (const key in country) {
            if (country[key]) {
                tempData.map(item => {
                    if (item.country === key) {
                        sortByCountries.push(item)
                    }
                })
            }
        }
        sortByCountries.length > 0 ? tempData = sortByCountries : tempData = [...getData];


        if (mark !== "All") {
            tempData = tempData.filter(item => item.mark === mark)
        }


        if (availability) {
            tempData = tempData.filter(item => item.availability === true);
        }


        this.setState({
            sorted: tempData
        })
    }

    render() {
        return (
            <CarsContext.Provider value={{
                ...this.state,
                getPostBySlug: this.getPostBySlug,
                handleChange: this.handleChange,
            }}>
                {this.props.children}
            </CarsContext.Provider>
        )
    }
}

const CarsConsumer = CarsContext.Consumer;

export {CarsContext, CarsProvider, CarsConsumer};
