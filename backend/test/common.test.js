let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing REST APIs',()=>{

    it('Should Return Status 200 for `/`',(done)=>{
        chai
            .request('http://localhost:8080/')
            .get("/")
            .then((res)=>{
                expect(res).to.have.status(200);
                done();
            })
            .catch((err)=>{
                throw err;
            })
    });

    it('Should Return Status 200 for `/users`',(done)=>{
        chai
            .request('http://localhost:8080')
            .get("/admin/users")
            .then((res)=>{
                expect(res).to.have.status(200);
                done();
            })
            .catch((err)=>{
                throw err;
            })
    })
})