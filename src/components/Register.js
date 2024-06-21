function Register(){
    return(
        <div className='container w-50'>
            <h1 className="display-1 text-center">SignUp</h1>
        <form>
          <label className='form-label'>First Name:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Last Name:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Date of Birth:</label>
          <input type='date' className='form-control'></input>
          <label className='form-label'>Father Name:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Mother Name:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Roll No:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Phone No:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Github:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>LinkedIn:</label>
          <input type='text' className='form-control'></input>
          <div>
          <label className="form-label">Gender:</label>
          <select>
            <option id="female">Female</option>
            <option id="male">Male</option>
          </select>
          </div>
          <label className='form-label'>Email:</label>
          <input type='email' className='form-control'></input>
          
          <label className='form-label'>Password:</label>
          <input type='text' className='form-control'></input>
          <label className='form-label'>Address:</label>
          <textarea className="cols-3 w-100"></textarea>
        </form>
        <button className=' d-flex mx-auto mt-4 btn btn-success'>Sign Up</button>
       </div>
    );
}
export default Register;