const loadingDOMedit = document.querySelector('.loading-text-editpage')
const DmisDOM = document.querySelector('.dmis')
const dmiIDDOM = document.querySelector('.dmi-edit-id')
const editFormDOM = document.querySelector('.single-dmi-form')
const editBtnDOM = document.querySelector('.dmi-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')

const params = document.location.search
const paramStr = new URLSearchParams(params).get('paramStr')
const dmiIDSearched = paramStr.split("/")[0]


// Show DMI Function

const showTasks = async () => {
    loadingDOMedit.style.visibility = 'visible'
    console.log(`edit-dmi-hrms.js : inside showDmiHrms fn `)
    try{
        const { data : { recordset }} = await axios.get(`/api/v1/dmis/${paramStr}`)
        console.log(`edit-dmi-hrms.js : inside showDmiHrms fn data : ${recordset} `)
        if(recordset.length <1){
            DmisDOM.innerHTML = ` <p> ${dmiIDSearched} not present in MAS (TBL_FLS_MASTER)</p> `
            loadingDOMedit.style.visibility = 'hidden'
            editBtnDOM.style.visibility = 'hidden'
            return
        }
        
        
        const dmiObject = recordset[0]
        const dmiObjectKeys = Object.keys(dmiObject)
        const dmiObjectValues = Object.values(dmiObject)
        

        let htmlFormString = ''

        for(let i=0; i<dmiObjectKeys.length; i++){
            let individualKey = dmiObjectKeys[i]
            let individualValue = dmiObjectValues[i]

            htmlFormString += 
            `
                <div class="form-control">
                    <label for="${individualKey}">${individualKey}</label>
                    <input type="text" name="${individualKey}" value="${individualValue}" class="task-edit-name" />
                </div>  
    
            `
        }

        
        
        dmiIDDOM.innerHTML = dmiObjectValues[0] + " Details :"
        DmisDOM.innerHTML = htmlFormString

        let inputs = DmisDOM.getElementsByTagName('input');
        

    }
    catch(error) {
        console.log(`edit-dmi-hrms.js : erro inside showDmiHrms fn error : ${error} `)
        DmisDOM.innerHTML = ` <p> Some error is there : ${error} </p> `
    }

    loadingDOMedit.style.visibility = 'hidden'
}
showTasks()


editFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(`edit-dmi-hrms.js : inside updateDmi fn `)
    var updateObject = {  }

    let inputs = DmisDOM.getElementsByTagName('input');

    for (let index = 0; index < inputs.length; index++) {
        let name = inputs[index].name
        let value = inputs[index].value
        updateObject = { ...updateObject, [name] : value }
    }

    

    try {
        if(confirm("Do yo want to Edit entered details")){
            const updateAxios = axios.patch(`/api/v1/dmis/${paramStr}`,updateObject)
            console.log(`edit-dmi-hrms.js : inside updateDmi fn : updated records`)
            window.alert("Updation Successful");
            window.location.href = `index.html`;
        }
        else{
            //dialogue box cancel
            console.log(`edit-dmi-hrms.js : inside updateDmi fn : not updated recrds`)
        }
    } catch (error) {
        DmisDOM.innerHTML = ` <p> Error : ${error} </p> `
    }

    

})

//Delete DMI 

async function dmiDeleteFunction() {
    console.log(`edit-dmi-hrms.js : inside dmidelete fn `)
    try {
        if(confirm(`Do yo want to Delete ${dmiIDSearched}`)){
            const deleteAxios = axios.delete(`/api/v1/dmis/${paramStr}`)
            console.log(`edit-dmi-hrms.js : inside dmidelete fn res :deleted `)
            window.alert(`${dmiIDSearched} Deleted Successfully`);
            window.location.href = `index.html`;
        }
        else{
            //dialogue box cancel
            console.log(`edit-dmi-hrms.js : inside dmidelete fn res : Not deleted `)
        }
    } catch (error) {
        DmisDOM.innerHTML = ` <p> Error : ${error} </p> `
    }

}


const checkS = async () => { 
    
    try {
        let dataAxios  = await axios.get(`/checkS`)
        let flag = dataAxios.data.loggedIn
        console.log(`edit-dmi-hrms.js : inside CheckS fn flag logedin : ${flag}`)

        if(!flag){
            console.log(`edit-dmi-hrms.js : inside CheckS fn flag logedin is false : ${flag}`)
            alert('Session Expired. Please Login again')
            window.location.href = `auth.html`
        }
        

    } catch (error) {
        console.log(`edit-dmi-hrms.js :error inside CheckS fn error : ${error}`)
       
    }


}

checkS()


