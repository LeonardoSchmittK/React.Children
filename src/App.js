import React, { Children, Component } from "react";
import PropTypes from "prop-types";
// import 'App.css';

// export default class App extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <>
//         <Nav name={"Geralt"}>
//           <p>Hi there!</p>
//           <p>Hi there!</p>
//           <h1>32</h1>
//         </Nav>

//         {/* <Nav name={"Geralt"}>3</Nav> */}
//       </>
//     );
//   }
// }

// function Nav({ children, name }) {
//   return (
//     <h1
//       style={{
//         color: "blue",
//         fontSize: 50,
//         textAlign: "center",

//       }}
//     >
//       {React.Children.count(children) + " Elements"}
//       {children}
//     </h1>
//   );
// }

// Nav.propTypes = {
//   children: PropTypes.node,
// };

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "This is a title",
      names: {
        first: "Geralt",
        second: "Tobias",
      },
    };
  }

  render() {
    const name = { first: "Geralt", second: "Tobias" };
    return (
      <div>
        <Nav>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>
            Contact
            <mark>ee</mark>
          </h1>
          <samp>ee</samp>
        </Nav>
        <Element names={name} title={this.state.title}></Element>
      </div>
    );
  }
}

const Nav = ({ children }) => {
  let items = React.Children.toArray(children);
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(
      i,
      0,
      <span key={i} className="separator">
        |
      </span>
    );
  }
  return <div>{items}</div>;
};




function Element(props) {
  const {names:{first,second},title } = props;
  
  return (
  React.createElement(
    "div",
    { className: "card" },
    "",
    React.createElement("h1", {}, title),
    React.createElement("h1", {}, title),
    React.createElement("h1", {}, 'eee'),
    React.createElement("h1", {}, first+'ee'),
    React.createElement("h1", {}, second+'ee'),
    
  )
  );
}

Element.propTypes = {
  title: PropTypes.string,
  names:PropTypes.objectOf(PropTypes.string)
};
