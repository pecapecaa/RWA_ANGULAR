const URL_ROOT = 'http://localhost:3005'

export function getWine(){
    const request = fetch(`${URL_ROOT}/vinarija`, { method: 'GET'})
                    .then(response => response.json());
    return request;
  }
  

  export function postData(obj){
    
    fetch(`${URL_ROOT}/vinarija`, {
        method: 'post',
        headers: {
            
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
    .then(response => {
      })
}

export function updateData(obj){     
  
      fetch(`${URL_ROOT}/vinarija/${obj.id}`, {
          method: 'put',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        })
}