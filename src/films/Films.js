import React, { Component } from "react"

class Films extends Component {
    // State & Props
    constructor() {
        super()
        this.state = { greeting: "Hello" }
        console.log(this.state)
  }
    render() {
        return(
            <>
                This is a films comp
            </>
        )
    }
}

export default Films