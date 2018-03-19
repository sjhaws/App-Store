import React from "react"
import { Card, Image, CardContent } from "semantic-ui-react"

class IApp extends React.Component {
  state = { 
    name: this.props.name,
    description: this.props.description,
    category: this.props.category,
    price: this.props.price,
    version: this.props.version,
    author: this.props.author,
    logo: this.props.logo,
    created_at: this.props.created_at,
  }

  render(){
    return(
      <Card>
        <CardContent>
          {console.log(this.state)}
          {this.state.name}
          <Image src={this.state.logo}/>
          {this.state.description}
          {this.state.category}
          ${this.state.price}
          {this.state.version}
          {this.state.author}
          {this.state.created_at}
        </CardContent>
      </Card>
    )
  }

}

export default IApp