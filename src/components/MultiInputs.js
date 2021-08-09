import React, {useState} from 'react'

const MultiInputs = () => {

    const [userRegistraion, setUserRegistraion] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    })

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setUserRegistraion({...userRegistraion, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...userRegistraion, id: new Date().getTime().toString()} 

        setRecords([...records, newRecord])
        // console.log(records);
        setUserRegistraion({username:'', email: '', phone: '', password: ''});
        
    }
    return (
        <> 
            <div className="container">
                <h1 className='text-center my-5'>Registraion Form</h1>
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label htmlFor="username"> Full Name </label>
                            <input autoComplete='off' type="text" class="form-control" 
                            name='username' id="username" value={userRegistraion.username}
                            onChange={handleInput} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input autoComplete='off' type="text" class="form-control" 
                            name='email' id="email" value={userRegistraion.email}
                            onChange={handleInput} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="phone"> Phone </label>
                            <input autoComplete='off' type="text" class="form-control" 
                            name='phone' id="phone" value={userRegistraion.phone}
                            onChange={handleInput} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="password"> Password </label>
                            <input autoComplete='off' type="password" class="form-control" 
                            name='password' id="pasword" value={userRegistraion.password}
                            onChange={handleInput} />
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    <div className="col-md-6 col-10 mx-auto my-4">
                        {
                            records.map((curElem) => {
                                const {id, username, email, phone, password} = curElem;
                                return(
                                    <div key={id}>
                                    <ul className="list-group mb-3">
                                        <li className="list-group-item list-group-item-primary">{username}</li>
                                        <li className="list-group-item list-group-item-secondary">{email}</li>
                                        <li className="list-group-item list-group-item-success">{phone}</li>
                                        <li className="list-group-item list-group-item-danger">{password} </li>
                                    </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
               
        </>
    )
}

export default MultiInputs;