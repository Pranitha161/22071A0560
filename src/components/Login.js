function Login(){
    return(
        <div className='container w-50'>
            <h1 className="display-1 text-center">Login</h1>
        <form>
          <label className='form-label'>UserName:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Password:</label>
          <input type='text' className='form-control'></input>
        </form>
        <button className=' d-flex mx-auto mt-4 btn btn-success'>Login</button>
        <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} 22071A0560 Pranitha</p>
      </footer>
       </div>
    );
}
export default Login;