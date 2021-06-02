import logo from './logo.svg'
import Category from './Category'
import data from './data/categoryList'
import { Link } from 'react-router-dom'
import './css/index.css'

function Categories() {
  return (
    <main>
      <h3 style={{'color':'red'}}className='Categories'>Categories</h3>
      <div></div>
      <section className='container'>
        {data.map((category) => {
          return (
            <div key={category.category_id}>
              <Category {...category} />
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Categories
