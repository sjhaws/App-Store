import React from "react"
import { Card, Image, CardContent } from "semantic-ui-react"

class IApp extends React.Component{
  state = { 
    edit: false,
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
          {this.state.name}
        </CardContent>
      </Card>
    )
  }

}

export default IApp