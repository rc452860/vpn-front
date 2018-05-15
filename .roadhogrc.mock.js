
import fs from 'fs'
import path from 'path'

const mock = {}
fs.readdirSync(path.join(__dirname+'/mock')).forEach((file)=>{
  if(path.extname(file) == '.js'){
    Object.assign(mock,require('./mock/'+file))
  }
})
console.log(mock)
export default mock;
