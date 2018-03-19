import React from "react"
import IApp from "./IApp"

const AppsList = ({apps}) => (
<div>
{ apps.map( app =>
<IApp
  key={app.id}
  {...app}
/>

)}
</div>
)

export default AppsList