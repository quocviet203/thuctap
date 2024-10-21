import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='position-relative vh-100'>
            <div className='position-absolute top-0 start-0 p-3 text-white'>
                <h1>PREMIUM</h1>
                <div className="mb-3" >
                    <label htmlFor="language" className="form-label"></label>
                    <select id="language" className="form-select">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        {/* Add more languages as needed */}
                    </select>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <form>
                        <div className="container">
                            <span className="d-block mt-2">SE CONNECTER</span>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">E-mail</label>
                            <input type="Entrez e-mail" id="email" name="email" placeholder='Entrez e-mail' className="form-control" required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="Entrez le mot de passe" name="password" placeholder='Entrez le mot de passe' className="form-control" required />
                        </div>
                        <button type="submit" className='btn btn-success'>SE CONNECTER</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
