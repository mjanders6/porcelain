import React, { Component } from 'react'
import Form from '../../components/form'
import Bathrooms from '../../utils/bathroom'
import Image from '../../utils/image.js'
import Dispbathroom from '../../components/dispbathroom'
import User from '../../utils/user.js'
import Request from '../../utils/request.js'
import axios from 'axios'
import './addBR.css';

class AddBR extends Component {
    state = {
        userstatus: null,
        street: '',
        city: '',
        state: '',
        zipcode: '',
        gender: '',
        stalls: '',
        level:  '',
        cleanliness: '',
        caption: '', 
        file: null,
        image: '',
        rating: '',
        bathroom: []
    }
    componentWillMount() {
        // hard coded userId into local storage for testing, will need to change once login is finish
        localStorage.setItem('userId', 1)
        let id = localStorage.getItem('userId')
        User.getOne(id)
        .then(({data}) => {
            this.setState({userstatus: data})
        })
        .catch(e => console.log(e))
    }
    handleInputChange = event => {
        if (event.target.id === "image") {
            this.setState({ file: event.target.files })
        } else {
            this.setState({ [event.target.id]: event.target.value })
        }
    }
    handleLocation = event => {
        event.preventDefault()
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert( "Geolocation is not supported by this browser.")
            }
        }
        
        const showPosition = (position) => {
            axios.get(`https://www.mapquestapi.com/geocoding/v1/reverse?key=zlMKNlqjyFv79AvMHSCLunzQE5O7u7Ak&location=${position.coords.latitude},${position.coords.longitude}`)
                .then(({data: {results}}) => {
                    let locations = results[0].locations[0]
                    this.setState({
                        street: locations.street,
                        city: locations.adminArea5,
                        state: locations.adminArea3,
                        zipcode: locations.postalCode
                    })
                })
                .catch(e => console.error(e))
        }
        getLocation()
    }
    handleFormSubmit = event => {
        event.preventDefault()
        console.log(this.state.userstatus.adminstatus)
        let state = this.state
        if (state.file === null || state.street === '' || state.city === '' || state.state === '' || state.zipcode === '' || state.gender === '' || state.stalls === '' || state.level === '' || state.caption === ''){
            alert('Please fill out form')
        } else {
        this.setState({bathroom:[]})
        const fd = new FormData()
        let image = ''
        fd.append('image', this.state.file[0])
        Image.postOne(fd)
        .then(({data}) => {
            image = data.imageUrl
            this.setState({image: image})
            let newbathroom = {
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zipcode: parseInt(this.state.zipcode),
                gender: this.state.gender,
                stalls: parseInt(this.state.stalls),
                level:  parseInt(this.state.level),
                cleanliness: this.state.cleanliness,
                caption: this.state.caption, 
                image: this.state.image,
                rating: this.state.rating,
                userId: localStorage.getItem('userId')
            }
            if (this.state.userstatus.adminstatus === true) {
                Bathrooms.postOne(newbathroom)
            } else {
                Request.postOne(newbathroom)
            }
            let bathroom = this.state.bathroom
            bathroom.push({
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zipcode: parseInt(this.state.zipcode),
                gender: this.state.gender,
                stalls: parseInt(this.state.stalls),
                level:  parseInt(this.state.level),
                cleanliness: this.state.cleanliness,
                caption: this.state.caption, 
                image: this.state.image,
                rating: this.state.rating
            })
            this.setState({bathroom})
            this.setState({
                street: '',
                city: '',
                state: '',
                zipcode: '',
                gender: '',
                stalls: '',
                level:  '',
                cleanliness: '',
                caption: '', 
                rating:'',
                file: null,
                image: ''
            })
        })
        .catch(e => console.log(e))
    }
    }
    render() {
        let state = this.state
        return (
            <>
                <h1>Add a bathroom</h1>
                <Form handleInputChange={this.handleInputChange} 
                    handleFormSubmit={this.handleFormSubmit} 
                    handleLocation={this.handleLocation}
                    street={state.street}
                    city={state.city}
                    state={state.state}
                    zipcode={state.zipcode}
                    gender={state.gender}
                    stalls={state.stalls}
                    level={state.level}
                    cleanliness={state.level}
                    caption={state.caption}
                    rating={state.rating}
                />
                <Dispbathroom bathroom={state.bathroom} />
            </>
        )
    }
}

export default AddBR; 