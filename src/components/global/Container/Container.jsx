
const Container = ({children, bgColor}) => {
  return (
    <div style={{backgroundColor:bgColor?bgColor:"white"}} className="w-[85%] m-auto p-5">
        {children}
    </div>
  )
}

export default Container