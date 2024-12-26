const Articles = ({articles}) => {
  return (
   <ul>
        {articles.map(item => <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>)}
      </ul>
  )
}

export default Articles
