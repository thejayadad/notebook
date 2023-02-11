import React from 'react'
import { Link } from 'react-router-dom'



const ArticlesListPage = () => {
  return (
    <section>
      <h2 className='title'>Latest Post</h2>
      <div className='contentBox'>
        <div className='postColumn'>
          <div className='postBox height'>
            <div className='imgBox'>
              <img src='https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg' alt='pic'/>
              <div className='textBx'>
              <h2>Content Title</h2>

              <h3>Just same text from one of our readers post. Signup to see more.....</h3>
                <Link className='more' to="/" >Read More</Link>
              </div>
            </div>
          </div>
          <div className='postBox height'>
            <div className='imgBox'>
              <img src='https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg' alt='pic'/>
              <div className='textBx'>
              <h2>Content Title</h2>
              <h3>Just same text from one of our readers post. Signup to see more.....</h3>
              <Link className='more' to="/" >Read More</Link>

              </div>            </div>
          </div>
          <div className='postBox height'>
            <div className='imgBox'>
              <img src='https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg' alt='pic'/>
              <div className='textBx'>
              <h2>Content Title</h2>
              <h3>Just same text from one of our readers post. Signup to see more.....</h3>
              <Link className='more' to="/" >Read More</Link>

              </div>            </div>
          </div>
          <div className='postBox height'>
            <div className='imgBox'>
              <img src='https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg' alt='pic'/>
              <div className='textBx'>
                <h2>Content Title</h2>
              <h3>Just same text from one of our readers post. Signup to see more.....</h3>
              <Link className='more' to="/" >Read More</Link>

              </div>            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticlesListPage