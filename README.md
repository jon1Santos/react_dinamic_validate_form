# react_dinamic_validate_form

[<img height="50px" src="https://media0.giphy.com/media/5ABGt7KDXJ62zg7oI0/giphy.gif?cid=790b761123aba84c737efe59273d3d75b3dbaef458bf13a4&rid=giphy.gif&ct=s" />](https://react-dinamic-validate-form.vercel.app/)

## Getting Started

```javascript
 <Form validate={validate}>
    <Input label="Email" typeInput="text" validation={validate_email}/>
 </Form>
```

##

* Add a new input into a Form component

![image](https://user-images.githubusercontent.com/42220755/168334515-c40adb82-4957-4446-bb74-919d80ad1e91.png)
```javascript
 <Form validate={validate}>
    <Input label="Email" typeInput="text" validation={validate_email}/>
    <Input label="Password" typeInput="password"/>
 </Form>
```

##

* If you want you can add a validation 
* But note, In this case you need to pass a validate as props to component Form

![image](https://user-images.githubusercontent.com/42220755/168334669-76486794-900e-48ea-afdc-ee65ffd9892f.png)
```javascript
 <Form validate={validate}>
    <Input label="Email" typeInput="text" validation={validate_email}/>
    <Input label="Password" typeInput="password" validation={validate_password}/>
 </Form>
```

## Test Libraries

* -Validator
* -Bulma CSS

### Validation

>You can see the ```validations.ts``` file into ```src``` folder for more informations


