import React, { useState } from 'react'
import { fakeData } from './mocks'
import ArticleCard from '../ArticleCard'
import {ArticleWrapper } from './styles'

// class ArticleList extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       data: [...fakeData],
//       visible: 2
//     }

//     this.showMore = this.showMore.bind(this)
//   }

//   showMore() {
//     this.setState((prev) => {
//       return {visible: prev.visible + 2};
//     })
//   }

//   render() {
//     return (
//       <ArticleWrapper>
//         {this.state.data
//           .slice(0, this.state.visible)
//           .map(data => <ArticleCard {...data} key={data.id} />)
//         }
//         <button onClick={this.showMore}>
//             Show More
//         </button>
//       </ArticleWrapper>
//     )
//   }
// }

const ArticleList2 = () => {
  const [ showMore, setShowMore] = useState(2)

  const loadMore = () => {
    setShowMore(showMore + 2)
  }

  return (
    <ArticleWrapper>
      {fakeData
        .slice(0, showMore)
        .map(data => <ArticleCard {...data} key={data.id} />)
      }
      <button onClick={loadMore}>
          Show More
      </button>
    </ArticleWrapper>
  )
}

// export default ArticleList
export default ArticleList2
