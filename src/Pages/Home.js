import React , {useEffect}from 'react'

function Home() {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
       <>
        <div className="home" style={{textAlign:'center'}}>
            {/* <h5 style={{marginRight:'400px', position:'fixed'}}>Welcome to Planning App</h5>   */}
            <p style={{marginLeft:'400px'}}>Plan Your daily activities here, Set Targets, Get reminders, Create Tasks, Updates the tasks....etc</p>           
        </div>
        
                
        
        </>
    )
}

export default Home
