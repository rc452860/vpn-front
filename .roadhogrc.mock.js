
import fs from 'fs';
import path from 'path';


function delay(proxy, timer) {
  var mockApi = {};
  Object.keys(proxy).forEach(function(key) {
    var result = proxy[key].$body || proxy[key];
    if (Object.prototype.toString.call(result) === '[object String]' && /^http/.test(result)) {
      mockApi[key] = proxy[key];
    } else {
      mockApi[key] = function (req, res) {
        var foo;
        if (Object.prototype.toString.call(result) === '[object Function]') {
          foo = result;
        } else {
          foo = function (req, res) {
            res.json(result);
          };
        }

        setTimeout(function() {
          foo(req, res);
        }, timer);
      };
    }
  });
  mockApi.__mockData = proxy;
  return mockApi;
};

const mock = {}
fs.readdirSync(path.join(__dirname+'/mock')).forEach((file)=>{
  if(path.extname(file) == '.js'){
    Object.assign(mock,require('./mock/'+file))
  }
})
console.log(mock)
export default delay(mock,1000);
