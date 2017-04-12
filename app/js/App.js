'use strict';

//import React              from 'react';
import React, {Component} from 'react';
import {List}  from 'immutable';

// import CurrentUserActions from './actions/CurrentUserActions';
// import CurrentUserStore   from './stores/CurrentUserStore';
// import Header             from './components/Header';
// import Footer             from './components/Footer';
//
// const propTypes = {
//   params: React.PropTypes.object,
//   query: React.PropTypes.object,
//   children: React.PropTypes.oneOfType([
//     React.PropTypes.array,
//     React.PropTypes.object
//   ])
// };
//
// class App extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.onUserChange = this.onUserChange.bind(this);
//
//     this.state = {
//       currentUser: {}
//     };
//   }
//
//   onUserChange(err, user) {
//     if ( err ) {
//       this.setState({ error: err });
//     } else {
//       this.setState({ currentUser: user || {}, error: null });
//     }
//   }
//
//   componentWillMount() {
//     console.log('About to mount App');
//   }
//
//   componentDidMount() {
//     this.unsubscribe = CurrentUserStore.listen(this.onUserChange);
//     CurrentUserActions.checkLoginStatus();
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   renderChildren() {
//     return React.cloneElement(this.props.children, {
//       params: this.props.params,
//       query: this.props.query,
//       currentUser: this.state.currentUser
//     });
//   }
//
//   render() {
//     return (
//       <div>
//
//         <Header />
//
//         {this.renderChildren()}
//
//         <Footer />
//
//       </div>
//     );
//   }
//
// }
//
// App.propTypes = propTypes;
class App extends  Component {
    render() {

        var width = 8;
        var height = 8;
        var rows = []
        var cells;
        var row;

        var numrow = [];
        var arr = Array.apply(null, {length: width}).map(Number.call, Number);
        numrow.push(<td className="numbers" key={0}></td>)
        arr.map((i, index)=>{numrow.push(<td key={index+1}>{index+1}</td>)});
        rows.push(<tr className="chars" key={-1}>{numrow}</tr>);

        var lowrow = numrow.map((i,id)=>i);

        for (var x = 0; x < width; x++){

            cells = []

            var chr = String.fromCharCode(97 + x);

            cells.push(<td className='numbers' key={chr}>{chr}</td>)

            for (var y = 0; y < height; y++) {

                var bg = (x + y) % 2 ? 'even' : 'odd';

                cells.push(<td className={bg} key={y+'-'+x}></td>)
            }
            cells.push(<td className='numbers' key={chr+1}>{chr}</td>)

            row = <tr key={x}>{cells}</tr>

            rows.push(row);

        }


        rows.push(<tr className="chars" key={height+1}>{lowrow}</tr>);


        return<table><tbody>{rows}</tbody></table>

    }
}

export default App;
