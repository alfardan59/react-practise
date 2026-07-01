import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between item-center py-6 px-10 bg-emerald-900">
            <Link to='/' className="font-medium text-2xl">Media Search </Link>
            <div className="flex gap-5 text-xl items-center">
                <Link className="text-base font-medium active:scale-95 bg-emerald-100 text-emerald-950 rounded px-4 py-2" to='/'>Search</Link>
                <Link className="text-base font-medium active:scale-95 bg-emerald-100 text-emerald-950 rounded px-4 py-2" to='/collection'>Collection</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar