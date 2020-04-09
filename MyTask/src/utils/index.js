import queryString from 'query-string'
// let rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

let rootUrl = 'https://www.fastmock.site/mock/33dd55f777ff054fac721ec06e2e62a8/task';

let myFetch = {
    get(url,queryParams){
        url = rootUrl+url
        if(queryParams){
            url += "?"+queryString.stringify(queryParams);
        }
        return fetch(url)
            .then(res=>res.json())
    },
    post(url,body){
        // console.log(JSON.stringify(body));
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
            
    }
}

export {myFetch};