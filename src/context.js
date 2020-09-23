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

            // cart
            countCartItems: 0,
            totalCost: 0,

            // menu
            menuOpen: false,
            isMobileNav: "",

            // filters
            country: {},
            mark: "All",
            availability: false
        }


        this.timer = null;

        this.setNavbarStyle = this.setNavbarStyle.bind(this);
        this.applyNavbarStyle = this.applyNavbarStyle.bind(this);
    }


    componentDidMount() {
        const getData = this.prepareData(carsData);
        const getFeatured = getData.filter(item => item.featured === true);

        window.addEventListener("resize", this.applyNavbarStyle);
        this.setNavbarStyle();

        this.setState({
            posts: getData,
            featured: getFeatured,
            sorted: getData,
        });
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.isMobileNav);
    }


    componentWillUnmount() {
        window.removeEventListener("resize", this.applyNavbarStyle);
    }

    setNavbarStyle = () => {
        this.setState({
            isMobileNav: window.innerWidth < 768 ? true : false,
            menuOpen: false
        });
    }


    applyNavbarStyle = () => {
        let _this = this;

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout( ()=> {
            _this.setNavbarStyle();
        }, 100);
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


    openCloseMenu = () => {
        this.setState(prevState => {
            return {
                menuOpen: !prevState.menuOpen
            }
        })
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


    getItemById = (id) => {
        const item = this.state.posts.find(item => item.id === id);
        return item;
    }


    handleAddToCart = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id))
        const post = getData[index];

        post.inCart = true;
        post.clicked = true;
        post.quantity = 1;
        post.total = post.cost * post.quantity;

        this.setState(prevState => {
            return {
                posts: getData,
                countCartItems: prevState.countCartItems + 1
            }
        }, this.countTotalCost)
    }


    handleRemoveFromCart = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id))
        const post = getData[index];

        post.inCart = false;
        post.quantity = 0;

        this.setState(prevState => {
            return {
                posts: getData,
                countCartItems: prevState.countCartItems - 1
            }
        }, this.countTotalCost)
    }


    handleAddQuantity = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id));
        const post = getData[index];

        post.quantity++;
        post.total = post.quantity * post.cost;

        this.setState({
            posts: getData
        }, this.countTotalCost)
    }


    handleRemoveQuantity = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id));
        const post = getData[index];

        post.quantity--;

        if (post.quantity === 0) {
            this.handleRemoveFromCart(id)
        } else {
            post.total = post.cost * post.quantity;
        }

        this.setState({
            posts: getData
        }, this.countTotalCost)
    }


    countTotalCost = () => {
        let total = 0;
        const getTotal = this.state.posts.map(item => total += item.quantity * item.cost);
        this.setState({
            totalCost: total
        });
    }


    render() {
        return (
            <CarsContext.Provider value={{
                ...this.state,
                openCloseMenu: this.openCloseMenu,
                getPostBySlug: this.getPostBySlug,
                handleChange: this.handleChange,
                handleAddToCart: this.handleAddToCart,
                handleRemoveFromCart: this.handleRemoveFromCart,
                handleAddQuantity: this.handleAddQuantity,
                handleRemoveQuantity: this.handleRemoveQuantity,
            }}>
                {this.props.children}
            </CarsContext.Provider>
        )
    }
}

const CarsConsumer = CarsContext.Consumer;
export {CarsContext, CarsProvider, CarsConsumer};