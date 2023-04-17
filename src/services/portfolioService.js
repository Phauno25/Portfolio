import {getDocs,collection} from 'firebase/firestore'
import {FireDB} from "../config/firebase"

const portfolioService =  {


    getCollection: (collect) => {

        return new Promise(async (resolve, reject) => {
            await getDocs(collection(FireDB, collect))
            .then(res => {
                const docs = []
                res.forEach((item) =>{
                    const doc = {
                        id: item.id,
                        data: item.data()
                    }
                    docs.push(doc)
                }) 
                docs.sort((a, b) => a.data.id - b.data.id);       
                resolve(docs)    
            });
          });
    }
}

export default portfolioService