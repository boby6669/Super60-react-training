import {Link} from 'react-router-dom'
const navData=[
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:'/about-page'
    },
    
    {
        name:"Contact",
        link:"/contact-page"
    }
]

const Navbar = () => {
  return (
    <div>
        <div className='bg-slate-900 flex justify-between p-2 px-7 text-white items-center'>
            <div>
                <p className="text-sm">Call us: 123-456-7890</p>
            </div>
            <div>
                <Link to ="/admin-login" className='text-lg underline font-medium'>Admin?</Link>
            </div>
        </div>
        <header className="shadow-md">
            <nav className="h-24 flex justify-between items-center px-7">
                <div>
                    <h1 className="text-4xl font-bold w-20 h-16 text-slate-800">Logo</h1>
                </div>
                <div>
                    <ul className="flex gap-x-9 justify-center items-center">
                        {
                            navData.map((item, index)=>{
                                return(<li key={index} ><Link className="uppercase text-slate-800 hover:text-slate-950 duration-100" to={item.link}>{item.name}</Link></li>)
                            })
                        }
                    </ul>
                </div>
                
            </nav>
        </header>
    </div>
  )
}

export default Navbar