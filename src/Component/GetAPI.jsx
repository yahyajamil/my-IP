import React, { Component } from "react";
import '../Component/style.css';
import { Circles } from 'react-loader-spinner';
import Card from "./Card";

export default class GetAPI extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: null,
            isLoading: true
        }
    }

    async getAPI() {
        const response = await fetch('https://api64.ipify.org?format=json')

        const data = await response.json()

        return data.ip
    }

    async getInfo() {
        const ip = await this.getAPI()

        const response = await fetch(`http://ipwho.is/${ip}`)

        const data = await response.json()

        return data;
    }

    componentDidMount() {

        this.getInfo().then(data => {

            this.setState({
                info: data,
                isLoading: false
            })

        })
    }

    render() {
        const isLoading = this.state.isLoading;
        return (<>
            { isLoading ? <Circles
                height="80"
                width="80"
                radius="9"
                color="white"
                ariaLabel="loading"
            />

            :!isLoading && <Card data = {this.state.info}/>}
        </>

        )
    }

}