import Form from './Form';
import Input from './Input';
import validate, { validate_email, validate_password } from '../validations';
import './App.css';

const App: React.FC = ()=>{
    return(
        <div className="container">
            <div className="sub-container">
                <Form validate={validate}>
                    <Input label="Email" typeInput="text" validation={validate_email}/>
                    <Input label="Password" typeInput="password" validation={validate_password}/>
                </Form>
            </div>
        </div>
    );
}


export default App;