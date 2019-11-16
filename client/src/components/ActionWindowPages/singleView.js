import React, {Component} from 'react';
import API from './utils/API';



class SingleView extends Component {
  state = {
    incident: {}
  }

  componentDidMount() {
    let params = new URLSearchParams(window.location.search)
    let id = params.get('id')
    this.searchID(id)
  }

  searchID = (id) => {
    API.single(id)
      .then(res => {
        console.log(res.data)
        this.setState({incident: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return(<div className="singleView">SingleView test</div>)
  }

}

export default SingleView;
