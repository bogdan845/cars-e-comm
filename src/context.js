import React from "react"


// context
const CarsContext = React.createContext();

class CarsProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            featured: [],
            sorted: [],
            isLoading: true,
            isError: false,

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

        // timer (for setTimeout when window resize)
        this.timer = null;

        // binding for getting state
        this.setNavbarStyle = this.setNavbarStyle.bind(this);
        this.applyNavbarStyle = this.applyNavbarStyle.bind(this);
    }


    componentDidMount() {
        fetch("https://my-json-server.typicode.com/bogdan845/cars-e-comm-data/db")
            .then(response => response.json())
            .then(data => {
                const getData = this.prepareData(data.data);
                const getFeatured = getData.filter(item => item.featured === true);
                this.setState({
                    posts: getData,
                    featured: getFeatured,
                    sorted: getData,
                    isLoading: false,
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({isError: true})
            });

        window.addEventListener("resize", this.applyNavbarStyle);
        this.setNavbarStyle();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(this.state.isMobileNav);
    // }

    // remove eventListener when unmount
    componentWillUnmount() {
        window.removeEventListener("resize", this.applyNavbarStyle);
    }


    // set style for Navigation
    setNavbarStyle = () => {
        this.setState({
            isMobileNav: window.innerWidth < 768 ? true : false,
            menuOpen: false
        });
    }


    // apply style for Navigation
    applyNavbarStyle = () => {
        let _this = this;
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            _this.setNavbarStyle();
        }, 100);
    }


    // structuring data for further usage
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


    // close / open menu
    openCloseMenu = () => {
        this.setState(prevState => {
            return {
                menuOpen: !prevState.menuOpen
            }
        })
    }


    // for Single page (Single.js). Displaying clicked post on single page
    getPostBySlug = (slug) => {
        const getPost = this.state.posts.find(item => item.slug === slug);
        return getPost;
    }


    // applying selected filters (Filter.js)
    handleChange = (e) => {
        const {country} = this.state;
        let setCountries = country;

        if (e.target.classList.contains("filter-box")) {
            if (e.target.checked) {
                setCountries[e.target.name] = true;
            } else {
                setCountries[e.target.name] = false;
            }
        }

        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        this.setState({
            [name]: value,
            country: setCountries
        }, this.filter)
    }


    // displaying posts that matches filter values
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
                    return (
                        item.country === key ? sortByCountries.push(item) : ""
                    )
                })
            }
        }
        sortByCountries.length > 0 ? tempData = sortByCountries : tempData = [...getData];

        if (mark !== "All") {
            tempData = tempData.filter(item => item.mark === mark)
        }

        if (availability) {
            tempData = tempData.filter(item => item.isAvailable === true);
        }

        this.setState({
            sorted: tempData
        })
    }


    // get post id when clicked on it
    getItemById = (id) => {
        const item = this.state.posts.find(item => item.id === id);
        return item;
    }


    // message when item is added/removed from cart
    deleteAddToCartMessage = (id, className, text, mark, model) => {
        const createMessage = document.createElement('div');
        createMessage.className = `b-cart-message ${className}`;
        createMessage.innerText = `${mark} ${model} ${text}`;

        setTimeout(() => {
            const getMessage = document.querySelector(".b-cart-message");
            getMessage.remove();
        }, 2500);
        document.body.appendChild(createMessage);
    }


    // add item to cart
    handleAddToCart = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id))
        const post = getData[index];

        post.inCart = true;
        post.clicked = true;
        post.amount = 1;
        post.total = post.cost * post.amount;

        this.deleteAddToCartMessage(id, "added", "Added to cart", post.mark, post.model);

        this.setState(prevState => {
            return {
                posts: getData,
                countCartItems: prevState.countCartItems + 1
            }
        }, this.countTotalCost)
    }


    // remove item from cart
    handleRemoveFromCart = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id))
        const post = getData[index];

        post.inCart = false;
        post.amount = 0;

        this.deleteAddToCartMessage(id, "removed", "Removed from cart", post.mark, post.model);

        this.setState(prevState => {
            return {
                posts: getData,
                countCartItems: prevState.countCartItems - 1
            }
        }, this.countTotalCost)
    }


    // increase amount of item
    handleIncreaseAmount = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id));
        const post = getData[index];

        post.amount++;
        post.total = post.amount * post.cost;

        this.setState({
            posts: getData
        }, this.countTotalCost)
    }


    // decrease amount of item
    handleDecreaseAmount = (id) => {
        const {posts: getData} = this.state;
        const index = getData.indexOf(this.getItemById(id));
        const post = getData[index];

        post.amount--;

        if (post.amount === 0) {
            this.handleRemoveFromCart(id)
        } else {
            post.total = post.cost * post.amount;
        }

        this.setState({
            posts: getData
        }, this.countTotalCost)
    }


    // count cost of all items in cart
    countTotalCost = () => {
        let total = 0;
        this.state.posts.map(item => total += item.amount * item.cost);
        this.setState({
            totalCost: total
        });
    }


    // remove all item from cart
    handleClearCart = () => {
        let {posts: getData} = this.state;

        getData = getData.map(item => {
            if (item.inCart) {
                item.inCart = false;
                item.amount = 0
            }
            return item;
        });

        this.setState({
            post: getData,
            totalCost: 0,
            countCartItems: 0
        })
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
                handleIncreaseAmount: this.handleIncreaseAmount,
                handleDecreaseAmount: this.handleDecreaseAmount,
                handleClearCart: this.handleClearCart,
            }}>
                {this.props.children}
            </CarsContext.Provider>
        )
    }
}

const CarsConsumer = CarsContext.Consumer;
export {CarsContext, CarsProvider, CarsConsumer};