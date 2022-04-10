import { Component } from "react";

class Heroes extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <section className={this.props.className}>
              <h1>{this.props.nombreSuper}</h1>
              <h3>{this.props.identidad}</h3>
              <img style={{width: "100%"}} src={this.props.image} alt={this.props.alt} />
              { this.props.children }
            </section>
          )
    }
}

export default Heroes;