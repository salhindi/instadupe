import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { fetchPostsAsync, selectPosts, selectStatus, Statuses } from './postSlice';
import { AppDispatch } from '../../app/store';
function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>status</div>
  } else {
    contents = <div className="card"> 
    <div className='card-body'>
      <h3>{status}</h3>
      {posts && posts.length > 0 && posts.map(post => {
        return <div key={post.id} style={{margin:"5em"}}>
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>


        </div>
      })}
        </div>
      </div>
  }
  return <div><h1>Posts</h1></div>;
  
}

export default Posts;