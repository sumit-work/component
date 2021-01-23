import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"
import './index.css';

const App = () => {
  return (
    <div className="ui comments">
      <ApprovalCard>
        <div>
          <h4>
            Warning!
          </h4>
          Are you sure want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="How awesome" tere="reply" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 2:00AM" comment="Superb" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" comment="amazing" />
      </ApprovalCard>

    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
