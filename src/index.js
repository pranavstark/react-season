import React from 'react';
import ReactDOM from 'react-dom';

//functional component
// const App = () => {
//     return (
//         <div>
//             <p>Hi There!</p>
//         </div>
//     )
// }

//class based component
class App extends React.Component {
    constructor(props){
        super(props);

        this.state  = {lat: null};

    
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
                this.setState({lat: position.coords.latitude});
            },
            err => console.log(err)
        );
}

    render(){
        return <div> Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));