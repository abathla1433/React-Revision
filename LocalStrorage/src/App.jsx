const App=()=>{
  localStorage.setItem('user','ansh')
  const user=localStorage.getItem('user')
  console.log(user)
  localStorage.setItem("College","Quantum")
  localStorage.clear()
  return(

    <div>
      App
    </div>
  )
}

export default App