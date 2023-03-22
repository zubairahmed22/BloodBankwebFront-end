
import {API} from "../backend"

export const  getDonation =() =>{

    return fetch(`${API}donationGet`,{
        method: "GET"
    }).then(response =>{
        return response.json()
    })
    .catch(error => console.log(error))

}

// export const donation = user  =>{
//     return fetch(`${API}/donation`,{
//         method:"POST",
//         headers:{
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//        body: JSON.stringify(user)
//     })
//     .then(response =>{
//       return response.json()
//     })
//     .catch(error => console.log(error))
// }

export const donation = data =>{
    return fetch(`${API}donation`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response =>{
      return  response.json()
    })
    .catch(err => console.log(err))
    }