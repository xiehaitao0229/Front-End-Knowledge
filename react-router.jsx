import React from 'react';
import { render } from 'react-dom';

import { Router, Route, Link } from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {/* 把 <a> 变成 <Link> */}
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

                {/*
            接着用 `this.props.children` 替换 `<Child>`
            router 会帮我们找到这个 children
          */}
                {this.props.children}
            </div>
        )
    }
})

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
React.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox} />
      </Route>
    </Router>
  ), document.body)