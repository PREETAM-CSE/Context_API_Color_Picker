// importing the useContext hooks and color context
import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = () => {

  //Consuming the context
  const {color} = useContext(colorContext)

  return (
  <p style={{ color: color }}>Color code: {color}</p>
)
};

export default GrandChildComponent;


/*
Ways to consume hooks : 
1. In fuctional component it is consumed using hooks useContext()
2. In class component it is consumed using Consumer (It could also be used in functional component but
first one is more popular)

1. useContext
 useContext may have several context so We have to specify which context We want to use
*/


/*
We can also consume value using context consumer
eg. for color context
<colorContext.Consumer>
{
(value) => <p style = {{ color: value.color }}>Color code: {color}</p>
}
</colorContext.consumer>

*/