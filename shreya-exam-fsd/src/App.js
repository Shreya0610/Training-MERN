import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify';

import config from './config/config.json';
import http from './utils/httpService';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    posts: [],
    comments: []
  }

  async componentDidMount(){
    console.clear();
    const {data: posts} = await http.get(config.urlEndPoint1);
    const {data: comments} = await http.get(`https://jsonplaceholder.typicode.com/posts/${posts.id}/comments`);
    this.setState({posts});
    this.setState({comments});
    console.log(comments);
  }

  render() { 
    return (
      <React.Fragment>
        <ToastContainer />
        <table className="table">
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
 
export default App;