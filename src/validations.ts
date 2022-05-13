import validator from 'validator';

const validate: Array<string[]> = [[]]

function clearValidate(){
    while(validate[0]){
        validate.pop();
    }
}

export const validate_email = (e: string)=>{
    const error = [];

    if(!validator.isEmail(e)){
        error.push('Invalid Email');
    }

    if(error.length === 0)
        clearValidate();
    else
        validate.push([...error])

   return error;
};

export const validate_password = (e: string)=>{
    const error = []

    if(!e.match(/.{6,}/)){
        error.push('Password must has 6 characters at least')
    }

    if(error.length === 0)
        clearValidate();
    else
        validate.push([...error])

    return error;
}

export default validate;