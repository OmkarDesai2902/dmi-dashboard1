
const userLoginForm = document.querySelector('.user-login-form')
const usernameInputDOM = document.querySelector('.username')
const passwordInputDOM = document.querySelector('.password')

axios.defaults.withCredentials = true ;

userLoginForm.addEventListener('submit', async (event) =>{
    console.log(`auth.js : inside submitLoginCred fn `)
    event.preventDefault()
    const username  = usernameInputDOM.value
    const password  = passwordInputDOM.value
    let insertObject = { username , password}
    try {
        const insertAxios = await axios.post(`/api/v1/dmis/userauth`,insertObject)
        let flag = insertAxios.data.loggedIn
        console.log(`auth.js : inside submitLoginCred fn flag for session loggedIn : ${flag}`)
        if(flag){
            console.log(`auth.js : inside submitLoginCred fn flag is True `)
            window.location.href = `index.html`
        }
        else{
            console.log(`auth.js : inside submitLoginCred fn flag is False`)
            alert('Please Enter Valid Credentials')
        }

    } catch (error) {
        console.log(error)
        console.log(`auth.js : Error inside submitLoginCred fn error : ${error}`)
    }

    


} )

const checkS = async () => { 
    console.log(`auth.js :  inside checkS fn `)
    try {
        let dataAxios  = await axios.get(`/checkS`)
        let flag = dataAxios.data.loggedIn
        console.log(`auth.js :  inside checkS fn loggedIn flag : ${flag}`)
        if(flag){
            console.log(`auth.js :  inside checkS fn loggedIn flag is true : ${flag}`)
            window.location.href = `index.html`
        }
        

    } catch (error) {
        console.log(error)
        console.log(`auth.js : Error inside checkS fn error : ${error}`)
    }


}

checkS()