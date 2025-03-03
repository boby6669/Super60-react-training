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