// import React, { useState } from 'react';
// import axios from 'axios';
// import ApiUrls from '../Includes/corsUrls';
// import { Toaster,toast} from 'sonner';
// import DOMPurify from 'dompurify';


// const Register = () => {
//   const [state, setState] = useState({
//     username:'',
//     email: '',
//     password: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Sanitize input fields by trimming white spaces
//     const sanitizedValue = DOMPurify.sanitize(value.trim());
//     setState({ ...state, [name]: sanitizedValue });
//   }

//   const handleSignIn = () => {
//     const data = {
//       email: state.email,
//       password: state.password,
//       username: state.username
//     };

//     // Perform validation (e.g., check for empty fields)
//     if (!data.email || !data.password) {
//       toast.error('Please fill in all fields.');
//       return;
//     }
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!data.email.match(emailRegex)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     // Validation for password
//     // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
//     // if (!data.password.match(passwordRegex)) {  
//     //   toast.error('Password should be min 8 characters long and includes atleast one uppercase and lowercase and special character.');
//     //   return;
//     // }

//     axios.post(ApiUrls['register'], data)
//       .then((response) => {
//         // Successful response
//         const successMessage = response.data.message;
//         setState({ ...state, message: successMessage });
//         toast.success(successMessage);
//       })
//       .catch((error) => {
//         // Handle API response errors and display the reason
//         const errorMessage = error.response ? error.response.data.message : 'Error: Unable to log in.';
//         setState({ ...state, message: errorMessage });
//         toast.error(errorMessage);
//       });
//   }

//   return (
//     <main className="main-content mt-0">
//       <section>
//         <div className="page-header min-vh-70">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-10 col-lg-10 col-md-10 d-flex flex-column mx-lg-0 mx-auto">
//                 <div className="card card-plain">
//                   <div className="card-header pb-0 text-start">
//                   <div className="card-body">
//                     <div className="mb-3">
//                       <input
//                         type="username"
//                         name="username"
//                         id="username"
//                         className="form-control form-control-lg"
//                         placeholder="Username"
//                         aria-label="username"
//                         required
//                         value={state.username}
//                         onChange={handleInputChange}
//                       />
//                       <Toaster richColors position='top-center' />
//                     </div>
//                   <div className="card-body">
//                     <div className="mb-3">
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         className="form-control form-control-lg"
//                         placeholder="Email"
//                         aria-label="Email"
//                         required
//                         value={state.email}
//                         onChange={handleInputChange}
//                       />
//                       <Toaster richColors position='top-center' />
//                     </div>
//                     <div className="mb-3">
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         className="form-control form-control-lg"
//                         placeholder="Password"
//                         aria-label="Password"
//                         required
//                         minLength='8'
//                         value={state.password}
//                         onChange={handleInputChange}
//                       />
//                     </div>
                    
//                     <div className="text-center">
//                       {typeof state.message !== 'undefined' && (
//                         <div className="alert alert-custom" role="alert">
//                           <span>{state.message}</span>
//                         </div>
//                       )}
//                       <button
//                         onClick={handleSignIn}
//                         className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
//                       >
//                         Register
//                       </button>
//                     </div>
//                   </div>
                 
//                 </div>
//               </div>
           
//             </div>
//           </div>
     
//         </div>
//         </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Register;
